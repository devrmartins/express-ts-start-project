import cors from 'cors';
import express, { Request, Response } from 'express';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (request: Request, response: Response) => {
    return response.json({ message: 'Hello World!' });
});

app.post('/', (request: Request, response: Response) => {
    const { name } = request.body;
    return response.json({ name });
});

app.listen(3333, () => {
    console.log('Server is runing');
});
