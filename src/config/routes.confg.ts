const routes = {
    REGISTER: '/auth/register',
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    GET_ACCESS_TOKEN: '/auth/get-access-token',
    CREATE_TEMPLATE: '/templates',
    GET_TEMPLATES: '/templates',
    GET_TEMPLATE: '/templates/:templateId',
    UPDATE_TEMPLATE: '/templates/:templateId',
    REMOVE_TEMPLATE: '/templates/:templateId',
    SEARCH_TEMPLATES: '/templates-search',
    THEMES: '/template-themes',
    REMOVE_TEMPLATE_IMG: '/template-img/:templateId',
    CREATE_QUESTOIN: '/questions/:templateId',
    GET_QUESTIONS: '/questions/:templateId',
    UPDATE_QUESTION: '/questions/:questionId',
    DELETE_QUESTION: '/questions/:questionId',
    CREATE_OPTION: '/options/:questionId',
    GET_OPTIONS: '/options/:questionId',
    GET_QUESTION_TYPES: '/question-types',
    UPDATE_OPTION:"/options/:optionId"
};

export default routes;
