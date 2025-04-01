# Projeto de Web Scraping de Notebooks

Este projeto realiza o scraping de dados de notebooks e disponibiliza uma API para consumir esses dados. A aplicação possui duas rotas principais: uma para iniciar o scraping dos notebooks e outra para obter a lista de notebooks salvos no banco de dados.

## Passo a Passo para Rodar o Projeto

### 1. Clone o Repositório

Clone este repositório para sua máquina local:

```bash
git clone https://github.com/RuanChagas95/notebookScrape.git
cd notebookScrape

```


### 2. Instale as Dependências

Instale as dependências do projeto utilizando o npm:

```bash
npm install
```

### 3. Configure o Banco de Dados

Inicie o banco de dados e aplique as migrações utilizando o Prisma:

```bash
npx prisma migrate dev
```

### 4. Inicie o Servidor

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

### 5. Resumo das Rotas

#### Rota de Scraping (`POST /scrape`)
Esta rota inicia o processo de scraping dos dados de notebooks. Ao ser chamada, a aplicação coleta informações de notebooks de fontes configuradas e salva os dados no banco de dados.

#### Rota de Notebooks (`GET /notebooks`)
Esta rota retorna a lista de notebooks salvos no banco de dados de forma ascendente.
