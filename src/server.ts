import express from 'express';
import cors from 'cors';
import produtosRoutes from './routes/produtos.routes';
import vendasRoutes from './routes/vendas.routes';
import statusRoutes from './routes/status.routes';
import plataformasRoutes from './routes/plataformas.routes';

const app = express();

// Configuração de CORS
app.use(cors({
    origin: ['http://localhost:5173', 'http://192.168.1.137:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware
app.use(express.json());

// Rotas
app.use('/produtos', produtosRoutes);
app.use('/vendas', vendasRoutes);
app.use('/status', statusRoutes);
app.use('/plataformas', plataformasRoutes);

const PORT = Number(process.env.PORT) || 3000;
const HOST = "0.0.0.0"

app.listen(PORT, HOST, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

