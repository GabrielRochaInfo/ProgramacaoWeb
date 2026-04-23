import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());
app.get('/', (req, res) => {
    res.json({
    date: new Date().toLocaleString('pt-BR'),
    status: 'API no render funcionando!'
    });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('servidor rodando na porta ${PORT}');
});