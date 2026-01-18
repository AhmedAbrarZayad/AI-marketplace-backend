# AI Prompt Marketplace Backend

Express.js backend API for the AI Prompt Marketplace.

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```bash
MONGODB_URI=your_mongodb_connection_string
NODE_ENV=development
```

3. Run the server:
```bash
npm run dev
```

## Deployment

See [DEPLOYMENT_GUIDE.md](../DEPLOYMENT_GUIDE.md) for Vercel deployment instructions.

## API Endpoints

- `GET /` - Health check
- `GET /api/prompts` - Get all prompts
- `GET /api/prompts/:id` - Get single prompt
- `GET /api/prompts/trending/top` - Get trending prompts
- `POST /api/prompts/add-prompt` - Create new prompt
