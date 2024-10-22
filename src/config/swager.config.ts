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
            servers: [
                {
                    url: process.env.HOST,
                },
            ],
        },
    },
    apis: ['./src/modules/**/*.ts'],
};

export default swaggerOptions;
