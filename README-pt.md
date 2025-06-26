# Aplicação de Estudo de Arquitetura React

Uma aplicação React moderna construída com princípios de arquitetura limpa, apresentando autenticação, temas e um sistema de design baseado em componentes.

## 🚀 Começando

### Pré-requisitos

- Node.js (versão 18 ou superior)
- Gerenciador de pacotes pnpm

### Instalação

1. Clone o repositório:
```bash
git clone <repository-url>
cd react-architecture
```

2. Instale as dependências:
```bash
pnpm install
```

3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env.local` no diretório raiz
   - Adicione sua configuração do Supabase:
   ```env
   VITE_SUPABASE_URL=sua_url_do_supabase
   VITE_SUPABASE_ANON_KEY=sua_chave_anonima_do_supabase
   ```

4. Inicie o servidor de desenvolvimento:
```bash
pnpm dev
```

A aplicação estará disponível em `http://localhost:3000`

## 🏗️ Arquitetura

Este projeto segue os princípios de arquitetura limpa com clara separação de responsabilidades:

- **`src/components/`** - Componentes de design atômico (átomos, moléculas, organismos)
- **`src/core/`** - Lógica de negócios, casos de uso e entidades de domínio
- **`src/data/`** - Implementações da camada de dados
- **`src/presentation/`** - View models, formulários e lógica de UI
- **`src/shared/`** - Utilitários e clientes compartilhados

## 🧱 Estrutura de Componentes

Seguindo a metodologia de design atômico:
- **Átomos**: Blocos de construção básicos (tipografia, botões)
- **Moléculas**: Combinações simples de átomos (campos de formulário)
- **Organismos**: Componentes complexos (formulários, cabeçalhos)
- **Templates**: Layouts de página
- **Telas**: Páginas completas

## 🔧 Scripts Disponíveis

- `pnpm dev` - Inicia o servidor de desenvolvimento na porta 3000
- `pnpm build` - Constrói para produção
- `pnpm serve` - Visualiza a construção de produção
- `pnpm test` - Executa testes com Vitest
- `pnpm lint` - Executa ESLint
- `pnpm lint:fix` - Corrige problemas do ESLint

## 🛠️ Stack Tecnológica

- **React 19** - Biblioteca de UI
- **TypeScript** - Segurança de tipos
- **Vite** - Ferramenta de construção
- **TanStack Router** - Roteamento baseado em arquivos
- **TanStack Query** - Busca de dados
- **Tailwind CSS** - Estilização
- **Shadcn/ui** - Componentes de UI
- **Supabase** - Backend e autenticação
- **React Hook Form** - Manipulação de formulários
- **Zod** - Validação de esquemas

## 🎨 Estilização

Este projeto usa Tailwind CSS para estilização com o sistema de design Shadcn/ui.

### Adicionando Novos Componentes

Adicione componentes Shadcn:
```bash
pnpx shadcn@latest add <nome-do-componente>
```

## 🔐 Autenticação

A aplicação inclui um sistema de autenticação completo com:
- Telas de cadastro/login
- Rotas protegidas com AuthGuard
- Gerenciamento de sessão com Supabase

## 🌈 Temas

Suporte integrado a temas escuro/claro usando `next-themes`.

## 🧪 Testes

Os testes são escritos usando Vitest e React Testing Library:
```bash
pnpm test
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes de UI (design atômico)
├── core/               # Lógica de negócios
├── data/               # Camada de dados
├── presentation/       # View models e lógica de UI
├── routes/             # Roteamento baseado em arquivos
├── shared/             # Utilitários compartilhados
└── main.tsx           # Ponto de entrada da aplicação
```

## 🤝 Contribuindo

1. Faça um fork do repositório
2. Crie uma branch de feature
3. Faça suas alterações
4. Execute testes e linting
5. Envie um pull request

## 📝 Licença

Este projeto é para fins educacionais.