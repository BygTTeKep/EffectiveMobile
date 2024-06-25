const usersRoutes = async (fastify, options) => {
    fastify.post('initDb', async (req, res) => {
        try {
            fastify.pg.query(
                `
                CREATE TABLE IF NOT EXISTS users (
                id bigserial primary key, 
                login varchar(20) NOT NULL, 
                password varchar(255) NOT NULL,
                email varchar(25) NOT NULL,
                date_created timestamp NOT NULL DEFAULT NOW()
                )`
            );
        } catch (err) {
            if (err instanceof Error) fastify.log.error(err.message);
        }
    });

    fastify.post('/create', async (req, res) => {
        const { login, password, email } = req.body;
        try {
            const result = await fastify.pg.query(
                `INSERT INTO users(login, password, email, date_created)
           VALUES($1, $2, $3, $4) RETURNING *`,
                [login, password, email, new Date().toISOString()]
            );
            await fetch('http://history-service:3000/history', {
                method: 'POST',
                body: JSON.stringify({
                    user_id: result.rows[0].id,
                    action: 'Пользователь был создан',
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            res.send(result.rows[0]);
        } catch (err) {
            res.status(500).send(err);
        }
    });

    fastify.patch('/update/:id', async (req, res) => {
        const { login, password, email } = req.body;
        const { id } = req.params;
        try {
            const result = await fastify.pg.query(
                `UPDATE users SET login=$1, email=$2, password=$3 WHERE id=$4 RETURNING *`,
                [login, email, password, id]
            );
            if (result.rowCount === 0) {
                res.status(404).send({ error: 'User not found' });
            } else {
                await fetch('http://history-service:3000/history', {
                    method: 'POST',
                    body: JSON.stringify({
                        user_id: id,
                        action: `Пользователь обновил поля ${
                            login ? 'login' : null
                        }, ${password ? 'password' : null}, ${
                            email ? 'email' : null
                        }`,
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                res.send(result.rows[0]);
            }
        } catch (err) {
            res.status(500).send(err);
        }
    });

    fastify.get('/get/:id', async (req, res) => {
        const { id } = req.params;
        try {
            const result = await fastify.pg.query(
                `SELECT id, login, email FROM users WHERE id=$1`,
                [id]
            );
            if (result.rowCount === 0) {
                res.status(404).send({ error: 'User not found' });
            } else {
                // await fetch('http://history-service:3000', {
                //     method: 'POST',
                //     body: JSON.stringify({}),
                //     headers: {
                //         'Content-Type': 'application/json',
                //     },
                // });
                res.send(result.rows[0]);
            }
        } catch (err) {
            res.status(500).send(err);
        }
    });
};
export default usersRoutes;
