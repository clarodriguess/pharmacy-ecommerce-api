<div align="center">
<h1>💊 Pharmacy E-commerce API</h1> 

![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TypeORM](https://img.shields.io/badge/TypeORM-FE0902?style=for-the-badge&logo=typeorm&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4479A1?style=for-the-badge&logo=postgresql&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=black)

</div>


### 📌 Sobre o Projeto

API REST desenvolvida como do Bootcamp FullStack Generation, simulando o back-end de um **e-commerce de farmácia**. A aplicação permite gerenciar **produtos** e **categorias** com operações completas de CRUD e relacionamento entre as entidades.

---

### 🚀 Deploy

A API está disponível em produção no Render:

🔗 **API:** https://pharmacy-ecommerce-api.onrender.com  
📄 **Documentação (Swagger):** https://pharmacy-ecommerce-api.onrender.com/docs

> ⚠️ O plano gratuito do Render entra em modo de hibernação após inatividade. A primeira requisição pode levar até 50 segundos para responder.

---

### 🛠️ Tecnologias

| Tecnologia | Versão |
| --- | --- |
| Node.js | 18+ |
| NestJS | 10+ |
| TypeScript | 5+ |
| TypeORM | 0.3+ |
| PostgreSQL | — |
| Swagger (OpenAPI) | — |
| Render | — |

---

### 📐 Modelo de Dados

#### Categoria

| Campo | Tipo | Descrição |
| --- | --- | --- |
| `id` | number | Identificador único |
| `nome` | string | Nome da categoria |
| `descricao` | string | Descrição da categoria |
| `produtos` | Produto[] | Produtos relacionados |

#### Produto

| Campo | Tipo | Descrição |
| --- | --- | --- |
| `id` | number | Identificador único |
| `nome` | string | Nome do produto |
| `descricao` | string | Descrição do produto |
| `preco` | decimal | Preço unitário |
| `estoque` | number | Quantidade em estoque |
| `foto` | string | URL da imagem |
| `categoria` | Categoria | Categoria do produto |

> Relação: uma **Categoria** possui muitos **Produtos** (`OneToMany / ManyToOne`)

---

### ⚙️ Como Executar Localmente

#### Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior
- [PostgreSQL](https://www.postgresql.org/) instalado e rodando
- [Git](https://git-scm.com/)

#### 1. Clonar o repositório

```bash
git clone https://github.com/clarodriguess/pharmacy-ecommerce-api.git
cd pharmacy-ecommerce-api
```

#### 2. Instalar dependências

```bash
npm install
```

#### 3. Criar o banco de dados

No terminal do PostgreSQL:

```sql
CREATE DATABASE farmacia;
```

#### 4. Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=sua_senha
DB_DATABASE=farmacia
NODE_ENV=development
```

#### 5. Executar a aplicação

```bash
# Modo desenvolvimento
npm run start:dev
```

A API estará disponível em: `http://localhost:4000`  
A documentação Swagger em: `http://localhost:4000/docs`

---

### 🧪 Endpoints

#### 📁 Categorias — `/categorias`

| Método | Rota | Descrição |
| --- | --- | --- |
| `GET` | `/categorias` | Lista todas as categorias |
| `GET` | `/categorias/:id` | Busca categoria por ID |
| `GET` | `/categorias/nome/:nome` | Busca categoria por nome |
| `POST` | `/categorias` | Cria nova categoria |
| `PUT` | `/categorias` | Atualiza uma categoria |
| `DELETE` | `/categorias/:id` | Remove uma categoria |

#### 💊 Produtos — `/produtos`

| Método | Rota | Descrição |
| --- | --- | --- |
| `GET` | `/produtos` | Lista todos os produtos |
| `GET` | `/produtos/:id` | Busca produto por ID |
| `GET` | `/produtos/nome/:nome` | Busca produto por nome |
| `POST` | `/produtos` | Cria novo produto |
| `PUT` | `/produtos` | Atualiza um produto |
| `DELETE` | `/produtos/:id` | Remove um produto |

---

### 📄 Documentação com Swagger

A API conta com documentação interativa gerada automaticamente pelo **Swagger UI**.  
Acesse `/docs` para visualizar e testar todos os endpoints diretamente pelo navegador, sem precisar de ferramentas externas como Insomnia ou Postman.

---

### ☁️ Deploy no Render

#### Variáveis de ambiente necessárias

Configure as seguintes variáveis no painel do Render (Web Service → Environment):

```env
NODE_ENV=production
DB_HOST=
DB_PORT=5432
DB_USERNAME=
DB_PASSWORD=
DB_DATABASE=
```

#### Configurações do Web Service

| Campo | Valor |
| --- | --- |
| Build Command | `npm install --include=dev && npm run build` |
| Start Command | `node dist/main.js` |
| Plano | Free |


---

### 👩‍💻 Dev
 
Desenvolvido por **Clarisse Rodrigues**
 
[![GitHub](https://img.shields.io/badge/GitHub-clarodriguess-181717?style=flat&logo=github)](https://github.com/clarodriguess)
<br>
[![LinkedIn](https://img.shields.io/badge/LinkedIn-clarissee--rodriguess-0A66C2?style=flat&logo=linkedin)](https://www.linkedin.com/in/clarissee-rodriguess/)
 

