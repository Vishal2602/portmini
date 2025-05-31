# Personal Portfolio Site

A modern, responsive portfolio website built with React, TypeScript, and Express.js, showcasing projects and professional experience.

## 🚀 Tech Stack

- **Frontend**: React 18, TypeScript, Vite, TailwindCSS, Shadcn/UI
- **Backend**: Express.js, TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: TailwindCSS, Framer Motion
- **State Management**: TanStack Query
- **Routing**: Wouter

## 📋 Prerequisites

- Node.js 18+ 
- npm 8+
- PostgreSQL database (optional - only needed for user authentication features)

## 🛠️ Development Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd PersonalPortfolioSite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env
   ```
   
   Update `.env` with your configuration:
   ```env
   # Required
   PORT=3000
   NODE_ENV=development
   
   # Optional (only if you need database features)
   # DATABASE_URL=postgresql://username:password@localhost:5432/portfolio_db
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`

## 🏗️ Building for Production

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

## 🐳 Docker Deployment

### Using Docker Compose (Recommended for local testing)

1. **Start with Docker Compose**
   ```bash
   docker-compose up -d
   ```

   This will start:
   - PostgreSQL database on port 5432
   - Application on port 3000

2. **Stop the services**
   ```bash
   docker-compose down
   ```

### Using Docker only

1. **Build the image**
   ```bash
   docker build -t portfolio-site .
   ```

2. **Run the container**
   ```bash
   docker run -p 3000:3000 \
     -e DATABASE_URL="your-database-url" \
     -e NODE_ENV="production" \
     portfolio-site
   ```

## 🌐 Deployment Options

### Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Set environment variables in Vercel dashboard**
   - `DATABASE_URL`
   - `NODE_ENV=production`

### Netlify

1. **Install Netlify CLI**
   ```bash
   npm i -g netlify-cli
   ```

2. **Deploy**
   ```bash
   netlify deploy --prod
   ```

### Railway

1. **Install Railway CLI**
   ```bash
   npm i -g @railway/cli
   ```

2. **Deploy**
   ```bash
   railway login
   railway init
   railway up
   ```

### Render

1. Connect your GitHub repository to Render
2. Set build command: `npm run build`
3. Set start command: `npm start`
4. Add environment variables in Render dashboard

## 🗄️ Database Setup

### For Production

1. **Create a PostgreSQL database** (recommended providers):
   - [Neon](https://neon.tech/) (Recommended)
   - [Supabase](https://supabase.com/)
   - [Railway](https://railway.app/)
   - [PlanetScale](https://planetscale.com/)

2. **Run database migrations**
   ```bash
   npm run db:push
   ```

3. **Optional: Open database studio**
   ```bash
   npm run db:studio
   ```

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utility functions
├── server/                 # Backend Express application
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Database layer
│   └── vite.ts            # Vite integration
├── shared/                 # Shared types and schemas
├── Dockerfile             # Docker configuration
├── docker-compose.yml     # Docker Compose configuration
└── vercel.json            # Vercel deployment config
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run preview` - Build and preview production
- `npm run check` - Type checking
- `npm run lint` - Lint code
- `npm run clean` - Clean build artifacts
- `npm run db:generate` - Generate database migrations
- `npm run db:push` - Push schema to database
- `npm run db:migrate` - Run database migrations
- `npm run db:studio` - Open database studio

## 🔐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | No (only for user features) |
| `PORT` | Server port | No (default: 3000) |
| `NODE_ENV` | Environment mode | No (default: development) |
| `SESSION_SECRET` | Session encryption secret | No (only if using sessions) |

## 🚀 Performance Optimizations

- **Code Splitting**: Automatic route-based code splitting
- **Image Optimization**: Optimized images and lazy loading
- **Caching**: Static asset caching and API response caching
- **Compression**: Gzip compression for static assets
- **Bundle Analysis**: Use `npm run build` to analyze bundle size

## 🔒 Security Features

- **HTTPS**: Enforced in production
- **Security Headers**: XSS protection, content type sniffing prevention
- **Environment Variables**: Sensitive data stored securely
- **Input Validation**: Zod schema validation
- **SQL Injection Protection**: Drizzle ORM with prepared statements

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 🆘 Troubleshooting

### Common Issues

1. **Port 5000 already in use (macOS)**
   - Solution: The app now uses port 3000 by default

2. **Database connection errors**
   - Check your `DATABASE_URL` environment variable
   - Ensure your database is running and accessible

3. **Build errors**
   - Clear node_modules: `rm -rf node_modules && npm install`
   - Clear build cache: `npm run clean`

4. **TypeScript errors**
   - Run type checking: `npm run check`
   - Update TypeScript: `npm update typescript`

### Getting Help

- Check the [Issues](../../issues) page
- Review the deployment platform documentation
- Ensure all environment variables are set correctly

---

Built with ❤️ using modern web technologies 