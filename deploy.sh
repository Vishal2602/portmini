#!/bin/bash

# Personal Portfolio Site Deployment Script
# This script builds and deploys the application

set -e  # Exit on any error

echo "🚀 Starting deployment process..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ and try again."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version check passed: $(node -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Run type checking
echo "🔍 Running type checks..."
npm run check

# Clean previous build
echo "🧹 Cleaning previous build..."
npm run clean

# Build the application
echo "🏗️  Building application..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Build failed - dist directory not found"
    exit 1
fi

if [ ! -f "dist/index.js" ]; then
    echo "❌ Build failed - server bundle not found"
    exit 1
fi

if [ ! -d "dist/public" ]; then
    echo "❌ Build failed - client build not found"
    exit 1
fi

echo "✅ Build completed successfully!"

# Check if we're deploying to a specific platform
case "${1:-local}" in
    "vercel")
        echo "🌐 Deploying to Vercel..."
        if command -v vercel &> /dev/null; then
            vercel --prod
        else
            echo "❌ Vercel CLI not found. Install with: npm i -g vercel"
            exit 1
        fi
        ;;
    "netlify")
        echo "🌐 Deploying to Netlify..."
        if command -v netlify &> /dev/null; then
            # Use Netlify-specific build for deployment
            echo "🏗️  Building for Netlify..."
            npm ci --include=dev
            npm run build:netlify
            netlify deploy --prod
        else
            echo "❌ Netlify CLI not found. Install with: npm i -g netlify-cli"
            exit 1
        fi
        ;;
    "railway")
        echo "🚂 Deploying to Railway..."
        if command -v railway &> /dev/null; then
            railway up
        else
            echo "❌ Railway CLI not found. Install with: npm i -g @railway/cli"
            exit 1
        fi
        ;;
    "docker")
        echo "🐳 Building Docker image..."
        docker build -t portfolio-site .
        echo "✅ Docker image built successfully!"
        echo "💡 To run: docker run -p 3000:3000 -e DATABASE_URL='your-db-url' portfolio-site"
        ;;
    "local"|*)
        echo "🏠 Starting local production server..."
        echo "💡 Application will be available at http://localhost:3000"
        echo "💡 Press Ctrl+C to stop the server"
        NODE_ENV=production node dist/index.js
        ;;
esac

echo "🎉 Deployment completed successfully!" 