const options = {
    definition: {
      openapi: "3.1.0",
      info: {
        title: "API de Express para Slimmoms con Swagger",
        version: "0.1.0",
        description: "Esta es una aplicación CRUD API simple hecha con Express y documentada con Swagger",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "LogRocket",
          url: "https://logrocket.com",
          email: "info@email.com",
        },
      },
      servers: [
        {
          url: "http://localhost:3000",
        },
      ],
    },
    apis: ["./routes/api/*.js"],
  };
  
  module.exports = options;
  