# React Architecture Study Application

A modern React application built with clean architecture principles, featuring authentication, theming, and a component-based design system.

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd react-architecture
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
   - Create a `.env.local` file in the root directory
   - Add your Supabase configuration:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Start the development server:
```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

## 🏗️ Architecture

This project follows clean architecture principles with clear separation of concerns:

- **`src/components/`** - Atomic design components (atoms, molecules, organisms)
- **`src/core/`** - Business logic, use cases, and domain entities
- **`src/data/`** - Data layer implementations
- **`src/presentation/`** - View models, forms, and UI logic
- **`src/shared/`** - Shared utilities and clients

## 🧱 Component Structure

Following atomic design methodology:
- **Atoms**: Basic building blocks (typography, buttons)
- **Molecules**: Simple combinations of atoms (form fields)
- **Organisms**: Complex components (forms, headers)
- **Templates**: Page layouts
- **Screens**: Complete pages

## 🔧 Available Scripts

- `pnpm dev` - Start development server on port 3000
- `pnpm build` - Build for production
- `pnpm serve` - Preview production build
- `pnpm test` - Run tests with Vitest
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint issues

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **TanStack Router** - File-based routing
- **TanStack Query** - Data fetching
- **Tailwind CSS** - Styling
- **Shadcn/ui** - UI components
- **Supabase** - Backend and authentication
- **React Hook Form** - Form handling
- **Zod** - Schema validation

## 🎨 Styling

This project uses Tailwind CSS for styling with the Shadcn/ui design system.

### Adding New Components

Add Shadcn components:
```bash
pnpx shadcn@latest add <component-name>
```

## 🔐 Authentication

The app includes a complete authentication system with:
- Sign up/Sign in screens
- Protected routes with AuthGuard
- Session management with Supabase

## 🌈 Theming

Built-in dark/light theme support using `next-themes`.

## 🧪 Testing

Tests are written using Vitest and React Testing Library:
```bash
pnpm test
```

## 📁 Project Structure

```
src/
├── components/          # UI components (atomic design)
├── core/               # Business logic
├── data/               # Data layer
├── presentation/       # View models and UI logic
├── routes/             # File-based routing
├── shared/             # Shared utilities
└── main.tsx           # Application entry point
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📝 License

This project is for educational purposes.