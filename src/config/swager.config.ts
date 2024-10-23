const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentation',
            version: '1.0.0',
            description: 'Документация вашего API',
            contact: {
                email: 'jasurbekmansuraliyev@gmail.com',
            },
        },
    },
    apis: ['./src/modules/**/*.ts'],
};

export default swaggerOptions;
