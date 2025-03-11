import express from 'express';
import cors from 'cors';
import produtosRoutes from './routes/produtos.routes';
import vendasRoutes from './routes/vendas.routes';

const app = express();

// Configuração de CORS
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware
app.use(express.json());

// Rotas
app.use('/produtos', produtosRoutes);
app.use('/vendas', vendasRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

