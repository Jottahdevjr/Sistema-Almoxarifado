<div align="center">

# 📦 Sistema de Almoxarifado

> Uma solução Full-Stack completa para controle, gestão e monitoramento de estoque e insumos em tempo real.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

[🔗 Acesse a Aplicação Web](https://sistema-almoxarifado-red.vercel.app) · [🐞 Reportar um Bug](https://github.com/SEU-USUARIO/SEU-REPOSITORIO/issues)

</div>

---

## 📌 Sobre o Projeto

O **Sistema de Almoxarifado** foi desenvolvido para simplificar o gerenciamento de produtos e materiais. A aplicação permite realizar o CRUD completo de itens de estoque com sincronização remota, persistência de dados em nuvem e uma interface ágil e responsiva.

A arquitetura foi dividida em um ecossistema desacoplado:
- **Front-end**: Hospedado na **Vercel** com consumo reativo via Fetch API.
- **Back-end**: API RESTful construída com Node.js/Express e hospedada no **Render**.
- **Banco de Dados**: Cluster **MongoDB Atlas** para persistência segura dos dados.

---

## 🚀 Funcionalidades

- 🟢 **Listagem de Produtos**: Visualização em tempo real de todos os itens cadastrados.
- ➕ **Cadastro de Insumos**: Adição de novos produtos informando nome, quantidade e detalhes.
- ✏️ **Atualização de Registro**: Edição rápida de informações de produtos existentes.
- ❌ **Remoção de Itens**: Exclusão definitiva de registro integrado ao banco de dados.
- 🔐 **Segurança CORS**: Controle de origem para consumo seguro da API por domínios autorizados.

---

## 🛠️ Tecnologias Utilizadas

### **Front-end**
- HTML5 / CSS3 / JavaScript (ES6+)
- **Vercel** (Hospedagem e Deploy Contínuo)

### **Back-end**
- Node.js (ES Modules)
- Express.js
- Mongoose (ORM / ODM)
- CORS & Dotenv
- **Render** (Hospedagem e Deploy em Nuvem)

### **Banco de Dados**
- **MongoDB Atlas** (Database NoSQL em nuvem)

---

## 📂 Estrutura do Projeto

```text
├── 📂 backend
│   ├── server.js          # Arquivo principal do servidor Express
│   ├── package.json       # Dependências e scripts do servidor
│   └── .env               # Variáveis de ambiente (MongoDB URI)
│
└── 📂 frontend
    ├── index.html         # Estrutura principal da interface
    ├── script.js          # Consumo de rotas da API e renderização DOM
    └── style.css          # Estilização visual da aplicação
