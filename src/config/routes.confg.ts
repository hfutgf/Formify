const routes = {
    REGISTER: '/auth/register',
    LOGIN: '/auth/login',
    GET_ACCESS_TOKEN: '/auth/get-access-token',
    CREATE_TEMPLATE: '/templates',
    GET_TEMPLATES: '/templates',
    GET_TEMPLATE: '/templates/:templateId',
    UPDATE_TEMPLATE: '/templates/:templateId',
    REMOVE_TEMPLATE: '/templates/:templateId',
    SEARCH_TEMPLATES: '/templates-search',
    CREATE_QUESTOIN: '/questions/:templateId',
    GET_QUESTIONS: '/questions/:templateId',
    UPDATE_QUESTION: '/questions/:questionId',
    DELETE_QUESTION: '/questions/:questionId',
};

export default routes;
