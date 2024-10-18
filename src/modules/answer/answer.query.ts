import { modelNames } from '@src/config/models.config.js';
import { CommonQuery } from '../common/query.js';
import { Answer, AnswerOption, Form, QuestionType } from '@prisma/client';
import { FormQuery } from '../form/form.query.js';
import { QuestionQuery } from '../question/query.js';
import { PostgrestError } from '@supabase/supabase-js';

export class AnswerQuery extends CommonQuery {
    formQuery = new FormQuery();
    questionQuery = new QuestionQuery();
    constructor() {
        super();
    }

    createAnswer = async (
        body: Answer & { options: string[] }
    ): Promise<Answer> => {
        const question = await this.questionQuery.getQuesitonById(
            body.questionId
        );
        if (question.questionType !== QuestionType.MULTICHOICE) {
            const { data, error } = await this.supabase
                .from(modelNames.ANSWERS)
                .insert(body)
                .select('*');
            if (error) {
                throw new Error(error.message);
            }
            return data[0];
        }
        const { options, ...answerBody } = body;
        const { data, error } = (await this.supabase
            .from(modelNames.ANSWERS)
            .insert(answerBody)
            .select('*')) as { data: Answer[]; error: PostgrestError | null };

        if (error) {
            throw new Error(error.message);
        }
        for (let i = 0; i < body.options?.length; i++) {
            await this.createAnswerOption({
                answerId: data[0].id,
                option: body.options[i],
            });
        }
        return data[0];
    };

    updateAnswer = async (
        answerId: number,
        body: { answerValue: string }
    ): Promise<Answer | void> => {
        const { data, error } = await this.supabase
            .from(modelNames.ANSWERS)
            .update(body)
            .eq('id', answerId)
            .select('*');
        if (error) {
            throw new Error(error.message);
        }
        return data[0];
    };

    createAnswerOption = async (
        body: Omit<AnswerOption, 'id'>
    ): Promise<AnswerOption> => {
        const { data, error } = await this.supabase
            .from(modelNames.ANSWER_OPTIONS)
            .insert(body)
            .select('*');

        if (error) {
            throw new Error(error.message);
        }
        return data[0];
    };

    updateAnswerOption = async (
        optionId: number,
        body: Omit<AnswerOption, 'id' | 'answerId'>
    ): Promise<AnswerOption> => {
        const { data, error } = await this.supabase
            .from(modelNames.ANSWER_OPTIONS)
            .update(body)
            .eq('id', optionId)
            .select('*');

        if (error) {
            throw new Error(error.message);
        }
        return data[0];
    };

    getAnswersByForm = async (formId: number) => {
        const { data, error } = await this.supabase
            .from(modelNames.ANSWERS)
            .select('*')
            .eq('formId', formId);

        if (error) {
            throw new Error(error.message);
        }
        return data;
    };

    getOptionsByAnswerId = async (answerId: number): Promise<Answer[]> => {
        const { data, error } = await this.supabase
            .from(modelNames.ANSWER_OPTIONS)
            .select('*')
            .eq('answerId', answerId);

        if (error) {
            throw new Error(error.message);
        }
        return data;
    };

    removeAnswer = async (answerId: number): Promise<Answer> => {
        const { data, error } = await this.supabase
            .from(modelNames.ANSWERS)
            .delete()
            .eq('id', answerId)
            .select('*');

        if (error) {
            throw new Error(error.message);
        }
        return data[0];
    };
}
