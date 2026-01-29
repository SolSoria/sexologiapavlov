# Sexual Wellness Guide

A comprehensive web application focused on sexual health education and wellness resources. This platform provides evidence-based information, articles, and resources to promote healthy sexual wellbeing.

## 🚀 Features

- **Educational Articles**: Expert-written content on various aspects of sexual health and wellness
- **Modern UI**: Clean, responsive design built with modern web technologies
- **Secure & Private**: Built with privacy and security in mind
- **Professional Insights**: Content curated by certified sexual health professionals

## 🛠️ Tech Stack

### Frontend
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with custom theming
- **UI Components**: Radix UI components
- **Animations**: Framer Motion for smooth transitions
- **Icons**: Lucide React
- **Form Handling**: React Hook Form with Zod validation
- **Routing**: React Router

### Backend
- **Runtime**: Node.js with Express
- **Language**: TypeScript
- **Database**: SQLite with Drizzle ORM
- **API**: RESTful API architecture
- **Authentication**: JWT (JSON Web Tokens)

## 📁 Project Structure

```
Sexual-Wellness-Guide/
├── client/                 # Frontend application
│   ├── public/            # Static assets
│   └── src/               # Source code
│       ├── components/    # Reusable UI components
│       ├── pages/         # Page components
│       ├── styles/        # Global styles and themes
│       └── utils/         # Utility functions
│
├── server/                # Backend server
│   ├── db.ts             # Database configuration
│   ├── routes.ts         # API route definitions
│   ├── storage.ts        # Database operations
│   └── index.ts          # Server setup and middleware
│
├── shared/               # Shared code between frontend and backend
│   └── schemas/          # Shared validation schemas
│
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/sexual-wellness-guide.git
   cd sexual-wellness-guide
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   # Update the environment variables in .env
   ```

### Development

1. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
# Build the application
npm run build

# Start the production server
npm start
```

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm test:watch
```

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Special thanks to all the contributors who have helped shape this project
- Inspired by the need for better sexual health education resources
- Built with ❤️ by [Your Name]
