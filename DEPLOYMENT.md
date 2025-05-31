# 🚀 Deployment Guide

This document provides comprehensive instructions for deploying your Personal Portfolio Site to various platforms.

## 📋 Pre-Deployment Checklist

- [ ] Node.js 18+ installed
- [ ] All dependencies installed (`npm install`)
- [ ] Environment variables configured (PORT, NODE_ENV)
- [ ] Database setup (optional - only if you need user features)
- [ ] Build process tested (`npm run build`)

## 🔧 Environment Variables

Create a `.env` file based on `env.example`:

```env
# Required
PORT=3000
NODE_ENV=production

# Optional (only if you need database features)
# DATABASE_URL=postgresql://username:password@host:5432/database

# Optional
SESSION_SECRET=your-secure-session-secret
```

## 🏗️ Build Process

```bash
# Install dependencies
npm ci

# Build the application
npm run build

# Start production server
npm start
```

## 🌐 Deployment Options

### 1. Vercel (Recommended)

**Quick Deploy:**
```bash
npm i -g vercel
vercel
```

**Configuration:**
- Uses `vercel.json` for configuration
- Automatically detects Node.js project
- Set environment variables in Vercel dashboard

**Environment Variables to Set:**
- `DATABASE_URL`
- `NODE_ENV=production`

### 2. Netlify

**Quick Deploy:**
```bash
npm i -g netlify-cli
netlify deploy --prod
```

**Configuration:**
- Uses `netlify.toml` for configuration
- Automatic builds from Git
- Set environment variables in Netlify dashboard
- Uses serverless functions for API endpoints

**Important Notes for Netlify:**
- The build command is `npm run build:netlify` (client-only build)
- API endpoints are handled by Netlify Functions in `netlify/functions/`
- No database required for basic portfolio functionality
- Static site with serverless API functions

**Troubleshooting Netlify Deployment:**
1. **"vite: not found" error**: 
   - Ensure `npm ci` is in the build command
   - Check that devDependencies are being installed
   
2. **Function errors**:
   - Check function logs in Netlify dashboard
   - Ensure functions are in `netlify/functions/` directory
   
3. **Build failures**:
   - Use `npm run build:netlify` instead of `npm run build`
   - Check Node.js version is set to 18 in `netlify.toml`

### 3. Railway

**Quick Deploy:**
```bash
npm i -g @railway/cli
railway login
railway init
railway up
```

**Features:**
- Automatic PostgreSQL database provisioning
- Git-based deployments
- Built-in environment variable management

### 4. Render

**Setup:**
1. Connect GitHub repository to Render
2. Set build command: `npm run build`
3. Set start command: `npm start`
4. Add environment variables in dashboard

### 5. Docker Deployment

**Build and Run:**
```bash
# Build image
docker build -t portfolio-site .

# Run container
docker run -p 3000:3000 \
  -e DATABASE_URL="your-database-url" \
  -e NODE_ENV="production" \
  portfolio-site
```

**Docker Compose (with PostgreSQL):**
```bash
docker-compose up -d
```

## 🗄️ Database Setup

### Recommended Database Providers

1. **Neon** (Recommended)
   - Serverless PostgreSQL
   - Free tier available
   - Excellent for Vercel deployments

2. **Supabase**
   - PostgreSQL with additional features
   - Real-time capabilities
   - Good free tier

3. **Railway**
   - Simple PostgreSQL hosting
   - Integrated with Railway deployments

4. **PlanetScale**
   - MySQL-compatible
   - Branching for database schemas

### Database Migration

```bash
# Push schema to database
npm run db:push

# Generate migrations (if needed)
npm run db:generate

# Run migrations
npm run db:migrate

# Open database studio
npm run db:studio
```

## 🤖 Automated Deployment (CI/CD)

### GitHub Actions

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that:

- Runs tests on Node.js 18.x and 20.x
- Builds the application
- Deploys on push to main/master branch

**To enable:**
1. Uncomment your preferred deployment method in the workflow
2. Add required secrets to GitHub repository settings

### Required Secrets

**For Vercel:**
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

**For Netlify:**
- `NETLIFY_AUTH_TOKEN`
- `NETLIFY_SITE_ID`

**For Railway:**
- `RAILWAY_TOKEN`
- `RAILWAY_SERVICE`

## 🛠️ Manual Deployment Script

Use the included deployment script:

```bash
# Make executable
chmod +x deploy.sh

# Deploy to different platforms
./deploy.sh vercel    # Deploy to Vercel
./deploy.sh netlify   # Deploy to Netlify
./deploy.sh railway   # Deploy to Railway
./deploy.sh docker    # Build Docker image
./deploy.sh local     # Run locally
```

## 🔍 Health Checks

The application includes health check endpoints:

- `GET /api/health` - Application health status
- `GET /api` - API information

Test after deployment:
```bash
curl https://your-domain.com/api/health
```

## 🚨 Troubleshooting

### Common Issues

1. **Build Failures**
   ```bash
   npm run clean
   npm ci
   npm run build
   ```

2. **Database Connection Issues (if using database)**
   - Verify `DATABASE_URL` format
   - Check database server accessibility
   - Ensure database exists

3. **Environment Variables**
   - Verify required variables are set (PORT, NODE_ENV)
   - Check for typos in variable names
   - Database is optional for basic portfolio functionality

4. **Port Issues**
   - Application uses port 3000 by default
   - Set `PORT` environment variable if needed

### Performance Optimization

1. **Enable Compression**
   - Gzip compression is enabled by default
   - Static assets are optimized during build

2. **CDN Setup**
   - Most platforms provide CDN automatically
   - Consider separate CDN for static assets

## 📊 Monitoring

### Recommended Monitoring Tools

1. **Vercel Analytics** (for Vercel deployments)
2. **Netlify Analytics** (for Netlify deployments)
3. **Sentry** (for error tracking)

### Health Check Monitoring

Set up monitoring for:
- `https://your-domain.com/api/health`
- Response time < 500ms
- 99.9% uptime target

## 🔒 Security Considerations

1. **Environment Variables**
   - Never commit `.env` files
   - Use strong, unique secrets (if needed)

2. **Application Security**
   - HTTPS enforced in production
   - Security headers configured

## 📈 Scaling

### Horizontal Scaling
- Most platforms auto-scale
- Consider load balancers for high traffic

---

## 🎉 Quick Start Commands

```bash
# 1. Setup (minimal - no database needed)
cp env.example .env
# Edit .env with PORT and NODE_ENV only

# 2. Install and build
npm ci
npm run build

# 3. Deploy (choose one)
./deploy.sh vercel
# or
./deploy.sh netlify
# or
./deploy.sh railway

# 4. Verify deployment
curl https://your-domain.com/api/health
```

For questions or issues, check the main README.md or create an issue in the repository.