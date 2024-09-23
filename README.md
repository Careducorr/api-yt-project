# API YouTube Clone

Este projeto é uma API desenvolvida com Node.js e TypeScript, destinada a servir como base para um clone do YouTube. A API oferece funcionalidades para gerenciar vídeos, usuários e interações, permitindo a criação de uma plataforma de streaming de vídeo.

## Tabela de Conteúdos
1. [Descrição](#descrição)
2. [Instalação](#instalação)
3. [Uso](#uso)
4. [Estrutura do Projeto](#estrutura-do-projeto)
5. [Endpoints](#endpoints)
6. [Contribuição](#contribuição)
7. [Licença](#licença)
8. [Tecnologias Utilizadas](#tecnologias-utilizadas)
9. [Autoria](#autoria)

## Descrição

A API permite a realização de operações como upload de vídeos, registro de usuários, autenticação e gerenciamento de interações (curtidas e não curtidas). É uma excelente base para desenvolvedores que desejam criar uma aplicação semelhante ao YouTube.

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/Careducorr/api-yt-project.git
Navegue até a pasta do projeto:
bash
Copiar código
cd api-yt-project
Instale as dependências:
bash
Copiar código
npm install
Compile o código TypeScript:
bash
Copiar código
npm run build
Configure as variáveis de ambiente (veja .env.example para um exemplo).

## Uso
Para iniciar a aplicação, execute:

bash
Copiar código
npm start
A API estará disponível em http://localhost:4000 (ou na porta configurada).

## Estrutura do Projeto
bash
Copiar código
/api-yt-project
├── dist/            # Código compilado (JavaScript)
├── src/             # Código fonte (TypeScript)
│   ├── index.ts     # Ponto de entrada da aplicação
│   ├── routes/      # Rotas da API
│   └── ...          # Outros módulos
├── package.json      # Dependências e scripts
├── tsconfig.json     # Configuração do TypeScript
└── .env.example      # Exemplo de arquivo de variáveis de ambiente
## Endpoints
Usuários
POST /users: Cria um novo usuário.
GET /users/
: Obtém informações de um usuário específico.
Vídeos
POST /videos: Faz o upload de um novo vídeo.
GET /videos: Retorna uma lista de vídeos.
GET /videos/
: Obtém detalhes de um vídeo específico.
Interações
POST /videos/
/like: Curte um vídeo.
POST /videos/
/dislike: Não curte um vídeo.

## Contribuição
Fork o projeto.
Crie uma nova branch (git checkout -b minha-contribuicao).
Faça suas alterações e commit (git commit -m 'Adiciona nova funcionalidade').
Push para a branch (git push origin minha-contribuicao).
Crie um novo Pull Request.

## Licença
Este projeto está licenciado sob a MIT License.

## Tecnologias Utilizadas
Node.js
TypeScript
Express
MySQL (ou outra base de dados, conforme necessário)
JWT para autenticação

## Autoria
Criado por Careducorr.

## Recursos Adicionais
Documentação do Node.js
Documentação do TypeScript
Express Documentation
