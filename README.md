# 🚀 OS-Station - Dashboard de Processamento de Pedidos

Este projeto é a interface de front-end para a API OS-Station. Trata-se de um dashboard web, construído com React, que permite aos usuários interagir com o sistema de processamento de pedidos: fazendo upload de arquivos de texto e visualizando os dados normalizados de forma clara e intuitiva.

## ✨ Sobre o Projeto

O objetivo deste dashboard é fornecer uma interface gráfica amigável para a API de back-end, que lida com a complexa tarefa de processar, normalizar e persistir dados de um sistema legado. A aplicação permite que o usuário envie novos arquivos de pedidos e consulte o banco de dados cumulativo através de filtros dinâmicos.

Features Atuais
Interface de Upload: Componente dedicado para o envio de arquivos de texto (.txt).

Visualização Dinâmica de Pedidos: Renderização dos dados em um formato de tabela aninhada, mostrando usuários, seus pedidos e os produtos de cada pedido.

Busca e Filtragem: Formulário de busca que permite filtrar os resultados por ID do Pedido (do arquivo) e por um intervalo de datas (início e fim).

Design Responsivo: Layout construído com Tailwind CSS que se adapta a diferentes tamanhos de tela.

## 🏛️ Arquitetura do Front-end

O projeto foi estruturado de forma modular para promover a separação de responsabilidades, escalabilidade e fácil manutenção.

src/components/: Componentes React reutilizáveis (botões, inputs, tabelas, etc.). A base de componentes shadcn/ui é utilizada aqui.

src/pages/: Componentes que representam as páginas da aplicação (ex: Home, Orders), responsáveis por organizar o layout e o estado da página.

src/services/: Camada de serviço, responsável por toda a comunicação com a API de back-end. Abstrai a lógica do axios dos componentes.

src/types/: Contém as definições de interface do TypeScript.

src/utils/: Funções auxiliares e utilitárias (ex: formatação de moeda, manipulação de datas) que podem ser usadas em qualquer parte do projeto.

## 🛠️ Stack de Tecnologias

Vite + React + Typescript: Para a construção da base do Projeto.

React Router: Para gerenciamento de rotas e navegação entre as diferentes páginas da aplicação.

Tailwind CSS: Framework CSS "utility-first" para a estilização.

Shadcn/UI: Coleção de componentes de UI reutilizáveis.

Axios: Cliente HTTP para realizar as requisições à API.

## ⚙️ Começando (Como Executar o Projeto)

Siga os passos abaixo para configurar e executar o projeto em seu ambiente local.

### Pré-requisitos:

- Node.js (versão 18 ou superior)

- npm, yarn ou pnpm

- Uma instância do back-end OS-Station rodando localmente (disponível em http://localhost:3001).

### Instalação

1.Clone o repositório:

```Bash

git clone https://github.com/anna-paula-dante/OSStation-Frontend
cd OSStation-Frontend-main
```

2.Instale as dependências:

```Bash
npm install
```

3.Configure as Variáveis de Ambiente:
Crie um arquivo chamado .env na raiz do projeto, e defina a URL da sua API de back-end:

```Bash
# O prefixo VITE\_ é necessário para que o Vite exponha a variável ao front-end
VITE_API_URL=http://localhost:3001/api
```

4.Inicie o servidor de desenvolvimento:

```Bash
npm run dev
A aplicação estará disponível em http://localhost:5173 (ou outra porta indicada pelo Vite).
```

## 🗺️ Roadmap (Funcionalidades Futuras)

Este projeto é a base para um sistema mais completo. As próximas funcionalidades planejadas incluem:

[ ] Autenticação de Usuários: Implementar uma logica solidada para página de login protegendo o acesso ao dashboard.

[ ] Cadastro de Novos Usuários: Criar uma página de registro.

[ ] Gerenciamento de Sessão com JWT: Utilizar JSON Web Tokens para manter o usuário logado de forma segura entre as sessões.

[ ] Recuperação de Senha: Fluxo de "esqueci minha senha" com envio de e-mail.

[ ] Dashboard de Métricas: Uma página inicial com gráficos e estatísticas sobre os pedidos.

[ ] Paginação: Adicionar paginação na lista de resultados para lidar com grandes volumes de dados.

[ ] Feedback de Upload: Melhorar o feedback visual durante e após o upload do arquivo (barra de progresso, mensagens de sucesso/erro mais detalhadas)
