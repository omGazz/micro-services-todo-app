import express from 'express';

const app = express();
const users: { id: number, mail: string }[] = [];

app.use(express.json());

app.get('/users', (req, res) => {
    res.json(users);
});

app.listen(3001, () => console.log('User Service listening on port 3001'));
