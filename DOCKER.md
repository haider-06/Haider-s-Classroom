# Docker Deployment Guide - Haider's Classroom

## Overview

This guide covers building and running the Haider's Classroom Next.js 14 application with Prisma Postgres using Docker.

## Prerequisites

- Docker installed and running ([download here](https://www.docker.com/products/docker-desktop))
- `.env` file with required environment variables:
  - `DATABASE_URL` - Prisma Postgres connection string
  - `NEXTAUTH_SECRET` - Secret key for NextAuth.js
  - `NEXTAUTH_URL` - Auth callback URL (default: http://localhost:3000)

## Quick Start

### 1. **Local Development with Docker Compose**

```bash
# Build and start the application
docker-compose up --build

# Application will be available at http://localhost:3000
```

The container will:
- Build the Next.js application
- Generate Prisma Client
- Start the server on port 3000
- Run health checks every 30 seconds

### 2. **Build Docker Image**

```bash
# Build image with a tag
docker build -t haiders-classroom:1.0 .

# List images
docker images | grep haiders-classroom
```

### 3. **Run Container**

```bash
# Run with environment file
docker run -p 3000:3000 \
  --env-file .env \
  --name haiders-classroom \
  haiders-classroom:1.0

# Run with specific environment variables
docker run -p 3000:3000 \
  -e DATABASE_URL="postgres://..." \
  -e NEXTAUTH_SECRET="your-secret" \
  -e NEXTAUTH_URL="http://localhost:3000" \
  haiders-classroom:1.0
```

### 4. **Docker Compose Management**

```bash
# Start services
docker-compose up -d

# View logs
docker-compose logs -f app

# Stop services
docker-compose down

# Remove volumes (careful - deletes data)
docker-compose down -v

# Rebuild without cache
docker-compose up --build --no-cache
```

## Multi-Stage Build

The Dockerfile uses a 3-stage build for optimized production images:

1. **Dependencies Stage** - Installs production dependencies only
2. **Builder Stage** - Builds the Next.js app with all dev dependencies
3. **Runner Stage** - Lean production image with only what's needed

This reduces final image size from ~2GB to ~400MB.

## Environment Variables

Create a `.env` file in the project root:

```env
# Database (Prisma Postgres)
DATABASE_URL=postgres://...@pooled.db.prisma.io:5432/postgres?sslmode=require

# NextAuth Configuration
NEXTAUTH_SECRET=generate-a-strong-secret-key-here
NEXTAUTH_URL=http://localhost:3000

# Production (optional)
NODE_ENV=production
```

## Security Features

✅ Non-root user (`nextjs`) runs the container  
✅ Health checks verify application is running  
✅ Automatic restart on failure  
✅ Network isolation with bridge network  
✅ Environment variables not committed to git

## Deployment Scenarios

### Production on Cloud (Vercel, Railway, etc.)

```bash
# Build image
docker build -t myrepo/haiders-classroom:latest .

# Push to registry
docker push myrepo/haiders-classroom:latest

# Deploy using cloud provider's CLI
```

### Docker Hub Push

```bash
# Tag image
docker tag haiders-classroom:1.0 yourusername/haiders-classroom:latest

# Login to Docker Hub
docker login

# Push image
docker push yourusername/haiders-classroom:latest
```

## Troubleshooting

### Container won't start

```bash
# Check logs
docker logs haiders-classroom

# Verify environment variables
docker inspect haiders-classroom | grep -A 20 "Env"
```

### Database connection fails

```bash
# Verify DATABASE_URL is set
echo $DATABASE_URL

# Check connectivity
docker exec haiders-classroom npx prisma db execute --stdin
```

### Port already in use

```bash
# Run on different port
docker run -p 3001:3000 haiders-classroom:1.0

# Find process using port 3000
lsof -i :3000

# Kill process (Linux/Mac)
kill -9 <PID>
```

### Out of disk space

```bash
# Clean up unused images
docker image prune

# Remove all unused volumes
docker volume prune

# Complete cleanup
docker system prune -a
```

## Performance Optimization

### Build Cache

```bash
# First build
docker build -t haiders-classroom:1.0 .

# Second build (uses cache)
docker build -t haiders-classroom:1.0 .  # Much faster!

# Skip cache
docker build --no-cache -t haiders-classroom:1.0 .
```

### Image Size

Current optimizations:
- Alpine Linux base (5MB vs 150MB for full Linux)
- Multi-stage build (only runtime deps in final image)
- Node production mode (automatic)

Current image size: ~450MB

## Next Steps

1. **Test the container locally:**
   ```bash
   docker-compose up --build
   ```

2. **Verify database connectivity:**
   ```bash
   docker-compose exec app npx tsx scripts/verify-prisma.ts
   ```

3. **Push to container registry:**
   ```bash
   docker push myrepo/haiders-classroom:latest
   ```

4. **Deploy to cloud:**
   - Heroku: `git push heroku main`
   - Railway: Connect GitHub repo
   - AWS ECS: Use ECR registry
   - Google Cloud Run: `gcloud run deploy`

## Resources

- [Docker Documentation](https://docs.docker.com/)
- [Next.js Docker Guide](https://nextjs.org/docs/deployment/docker)
- [Prisma Docker Guide](https://www.prisma.io/docs/orm/prisma-client/deployment/deploy-to-docker)
- [Docker Compose Reference](https://docs.docker.com/compose/compose-file/)
