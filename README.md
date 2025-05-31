# Sales Management Backend

Este é o backend de um sistema de gerenciamento de vendas desenvolvido com Node.js, Express e Prisma. O projeto é acadêmico e tem como objetivo demonstrar habilidades no desenvolvimento de APIs RESTful.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework para criação de APIs.
- **Prisma**: ORM para interação com o banco de dados.
- **MySQL**: Banco de dados relacional.

## Pré-requisitos

- Node.js (versão 16 ou superior)
- MySQL
- Gerenciador de pacotes (npm ou yarn)

## Configuração

1. Clone o repositório:
   ```bash
   git clone https://github.com/Olieveira/sales-management-backend.git
   cd sales-management-backend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na raiz do projeto com base no arquivo `.env.example`.

4. Execute as migrações do banco de dados:
   ```bash
   npx prisma migrate dev
   ```

5. Inicie o servidor:
   ```bash
   npm run dev
   ```

O servidor estará disponível em `http://localhost:3000`.

## Estrutura de Pastas

- **src/**: Contém o código-fonte do backend.
  - **controllers/**: Controladores das rotas.
  - **models-docs/**: Modelo físico do banco de dados.
  - **routes/**: Definição das rotas.
  - **services/**: Lógica de negócios e interação com o banco de dados.
- **prisma/**: Configurações e migrações do Prisma.

## Rotas Disponíveis

- **Produtos**: `/produtos`
- **Vendas**: `/vendas`
- **Status**: `/status`
- **Plataformas**: `/plataformas`
- **Itens de Venda**: `/itensVenda`
- **Estoque**: `/estoque`
- **Fornecedores**: `/fornecedores`

## Licença

Este projeto está licenciado sob a [Creative Commons BY-NC 4.0](LICENSE), permitindo uso não comercial com atribuição.
