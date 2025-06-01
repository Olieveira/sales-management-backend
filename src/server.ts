import express from 'express';
import cors from 'cors';
import produtosRoutes from './routes/produtos.routes';
import vendasRoutes from './routes/vendas.routes';
import statusRoutes from './routes/status.routes';
import plataformasRoutes from './routes/plataformas.routes';
import itensVendaRoutes from './routes/itensVenda.routes';
import estoqueRoutes from './routes/estoque.routes';
import fornecedoresRoutes from './routes/fornecedores.routes';
import categoriaProdutosRoutes from './routes/categoriasProdutos.routes';

const app = express();

// Middleware
app.use(express.json());

// Configuração de CORS
app.use(cors({
    origin: ['http://localhost:5173', 'http://192.168.1.137:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Rotas
app.use('/produtos', produtosRoutes);
app.use('/vendas', vendasRoutes);
app.use('/status', statusRoutes);
app.use('/plataformas', plataformasRoutes);
app.use('/itensVenda', itensVendaRoutes);
app.use('/estoque', estoqueRoutes);
app.use('/fornecedores', fornecedoresRoutes);
app.use('/categorias', categoriaProdutosRoutes);

const PORT = Number(process.env.PORT) || 3000;
const HOST = "0.0.0.0"

app.listen(PORT, HOST, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

