import fastify from 'fastify';
import fastifyCors from '@fastify/cors';
import { fastifyPostgres } from '@fastify/postgres';
import usersRoutes from './routes/user.js';
const port = process.env.PORT;
const host = process.env.HOST;
const app = fastify({ logger: { level: 'error' } });

app.register(fastifyPostgres, {
    connectionString:
        'postgres://postgres:o5hapLMEM1@postgres-service:5432/Testovoe',
});

app.register(fastifyCors, {
    origin: '*',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['*'],
    exposedHeaders: ['*'],
    maxAge: 3600,
});

app.register(usersRoutes, { prefix: '/' });

app.ready()
    .then(() => {
        app.listen({ port: port, host: host });
        (err, address) => {
            if (err instanceof Error) {
                fastify.log.error(err.message);
                process.exit(1);
            }
            console.log(`Server is running on ${address}`);
        };
    })
    .catch((err) => {
        if (err instanceof Error) app.log.error(err.message);
    });
