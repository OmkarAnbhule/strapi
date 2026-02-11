# Strapi Base Project Template

A production-ready Strapi 5 base project template with Docker support. Fork this repository to get started with your own Strapi project.

## 🚀 Quick Start

### Option 1: Fork and Clone

1. **Fork this repository** by clicking the "Fork" button at the top right
2. **Clone your fork:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/strapi-base-project.git
   cd strapi-base-project
   ```

### Option 2: Use as Template

1. Click "Use this template" on GitHub
2. Create a new repository from this template
3. Clone your new repository

## 📋 Prerequisites

- **Docker** and **Docker Compose** installed
- **Node.js** 20.x or 22.x (for local development without Docker)
- **npm** 6.x or above

## 🐳 Running with Docker (Recommended)

### Step 1: Configure Environment

Copy the example environment file and configure it:

```bash
cp .env.example .env
```

Edit `.env` file with your configuration:
- Set your database credentials
- Generate secure secrets (see below for generating secrets)

### Step 2: Generate Secrets

Generate secure random strings for your secrets. You can use:

**On Linux/Mac:**
```bash
openssl rand -base64 32
```

**On Windows (PowerShell):**
```powershell
[Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Maximum 256 }))
```

Generate separate secrets for:
- `APP_KEYS` (comma-separated, 4 keys)
- `API_TOKEN_SALT`
- `ADMIN_JWT_SECRET`
- `TRANSFER_TOKEN_SALT`
- `ENCRYPTION_KEY`

### Step 3: Start Containers

```bash
docker-compose up -d --build
```

This will:
- Build the Strapi production image
- Start PostgreSQL database container
- Start Strapi container
- Connect them via Docker network

### Step 4: Access Strapi

- **Admin Panel:** http://localhost:1337/admin
- **API:** http://localhost:1337/api

On first access, you'll be prompted to create your administrator account.

## 💻 Local Development (Without Docker)

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Configure Environment

```bash
cp .env.example .env
```

Update `.env` with your local database configuration.

### Step 3: Start Development Server

```bash
npm run develop
```

## 📁 Project Structure

```
strapi/
├── config/              # Strapi configuration files
│   ├── database.ts      # Database configuration
│   ├── server.ts        # Server settings
│   ├── admin.ts         # Admin panel configuration
│   └── middlewares.ts   # Middleware setup
├── src/                 # Application source code
│   ├── api/             # API routes, controllers, services
│   ├── components/      # Reusable components
│   ├── admin/           # Admin panel customization
│   └── index.ts         # Application entry point
├── public/              # Public assets
│   └── uploads/         # Media uploads directory
├── database/           # Database migrations
├── scripts/            # Utility scripts
├── Dockerfile          # Production Docker image
├── docker-compose.yml  # Docker Compose configuration
└── package.json        # Dependencies and scripts
```

## 🔧 Available Scripts

- `npm run develop` - Start development server with auto-reload
- `npm run start` - Start production server
- `npm run build` - Build admin panel for production
- `npm run seed:example` - Seed database with example data

## 🐳 Docker Commands

- **Start containers:** `docker-compose up -d`
- **Stop containers:** `docker-compose down`
- **View logs:** `docker-compose logs -f`
- **Rebuild containers:** `docker-compose up -d --build`
- **Access Strapi container:** `docker exec -it strapi sh`
- **Access database:** `docker exec -it strapiDB psql -U strapi -d strapi`

## 🔐 Environment Variables

Required environment variables (see `.env.example`):

| Variable | Description |
|----------|-------------|
| `HOST` | Server host (default: 0.0.0.0) |
| `PORT` | Server port (default: 1337) |
| `DATABASE_CLIENT` | Database client (postgres/mysql/sqlite) |
| `DATABASE_HOST` | Database host |
| `DATABASE_PORT` | Database port |
| `DATABASE_NAME` | Database name |
| `DATABASE_USERNAME` | Database username |
| `DATABASE_PASSWORD` | Database password |
| `DATABASE_SSL` | Enable SSL for database connection |
| `APP_KEYS` | Comma-separated app keys for session encryption |
| `API_TOKEN_SALT` | Salt for API token generation |
| `ADMIN_JWT_SECRET` | JWT secret for admin panel |
| `TRANSFER_TOKEN_SALT` | Salt for transfer token |
| `ENCRYPTION_KEY` | Encryption key for sensitive data |

## 🗄️ Database

This template uses **PostgreSQL** by default. To use a different database:

1. Update `DATABASE_CLIENT` in `.env`
2. Modify `docker-compose.yml` to use the appropriate database image
3. Update `config/database.ts` if needed

## 🚢 Production Deployment

This Docker setup is production-ready. For production deployment:

1. **Set all environment variables** properly
2. **Use a reverse proxy** (nginx, Traefik, etc.) in front of Strapi
3. **Set up SSL/TLS certificates**
4. **Configure proper backup strategies** for your database
5. **Review security settings** in `config/middlewares.ts`
6. **Set `NODE_ENV=production`** in your environment

## 📝 Customization

After forking, you can:

1. **Modify content types** in `src/api/`
2. **Customize admin panel** in `src/admin/`
3. **Add custom middleware** in `config/middlewares.ts`
4. **Create custom plugins** in `src/extensions/`
5. **Add custom controllers/routes/services** in `src/api/`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📚 Resources

- [Strapi Documentation](https://docs.strapi.io)
- [Strapi Quick Start Guide](https://docs.strapi.io/cms/quick-start)
- [Strapi Docker Documentation](https://docs.strapi.io/cms/installation/docker)
- [Docker Documentation](https://docs.docker.com)

## 📄 License

MIT License - feel free to use this template for your projects!

## ⚠️ Important Notes

- **Never commit `.env` file** - it contains sensitive information
- **Generate new secrets** for production deployments
- **Backup your database** regularly
- **Keep dependencies updated** for security patches

---

**Made with ❤️ using Strapi**
