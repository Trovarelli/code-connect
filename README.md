# Projeto Next.js - Estudo de Server Side Rendering e CSS Modules

Este é um projeto simples desenvolvido com [Next.js](https://nextjs.org), criado com o auxílio do [\`create-next-app\`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

O objetivo principal foi estudar o uso adequado de **Server Side Rendering (SSR)** com Next.js e entender melhor a organização de estilos utilizando **CSS Modules**, permitindo encapsulamento e reaproveitamento mais seguro de estilos em componentes.

## 🚀 Como rodar o projeto

### 1. Instalando dependências

Antes de tudo, certifique-se de instalar as dependências do projeto:

\`\`\`bash
npm install
\`\`\`

### 2. Iniciando o servidor de desenvolvimento do Next.js

Para rodar o projeto localmente com o Next.js:

\`\`\`bash
npm run dev

# ou

yarn dev

# ou

pnpm dev

# ou

bun dev
\`\`\`

Abra [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado.

Você pode começar a editar a página principal modificando o arquivo \`app/page.tsx\`. As alterações serão refletidas automaticamente.

### 3. Rodando com json-server (mock API)

Este projeto também utiliza um mock de API para simular dados durante o desenvolvimento, utilizando o [\`json-server\`](https://github.com/typicode/json-server).

Para iniciar o \`json-server\` com os dados mockados:

\`\`\`bash
json-server posts.mock.json -p 3042
\`\`\`

A API estará acessível em: [http://localhost:3042/posts](http://localhost:3042/posts)

## 📚 Recursos e aprendizado

Durante o desenvolvimento, foram abordados os seguintes conceitos:

- Utilização de **Server Side Rendering** no Next.js (\`getServerSideProps\`, rotas dinâmicas, etc.)
- Estilização de componentes utilizando **CSS Modules**
- Integração com API simulada usando o \`json-server\`

## 📘 Links úteis

- [Documentação oficial do Next.js](https://nextjs.org/docs)
- [Tutorial interativo do Next.js](https://nextjs.org/learn)
- [Repositório no GitHub do Next.js](https://github.com/vercel/next.js)

## ☁️ Deploy

A forma mais fácil de realizar o deploy de aplicações Next.js é usando a plataforma [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), criada pelos próprios desenvolvedores do framework.

Consulte a [documentação de deploy](https://nextjs.org/docs/app/building-your-application/deploying) para mais detalhes.

---

Desenvolvido com 💻 por fins de estudo e aprendizado.
