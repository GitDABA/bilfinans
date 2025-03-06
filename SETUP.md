# Bilfinans Project Setup Guide

This guide will help you set up your Bilfinans project with Sanity Studio and Next.js.

## 1. Initial Setup

The project was initialized with:

```bash
npm create sanity@latest -- --template robotostudio/turbo-start-sanity --project jyrid0xg --dataset production
```

## 2. Environment Configuration

### For Sanity Studio (apps/studio)

Create a `.env.local` file in the `apps/studio` directory with:

```
SANITY_STUDIO_PROJECT_ID=jyrid0xg
SANITY_STUDIO_DATASET=production
SANITY_STUDIO_TITLE="Bilfinans Studio"
SANITY_STUDIO_PRESENTATION_URL=http://localhost:3000
```

### For Next.js Web App (apps/web)

Create a `.env.local` file in the `apps/web` directory with:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=jyrid0xg
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-03-06
NEXT_PUBLIC_SANITY_STUDIO_URL=http://localhost:3333
SANITY_API_READ_TOKEN=your-read-token-here
SANITY_API_WRITE_TOKEN=
NEXT_PUBLIC_SANITY_USE_CDN=false
```

## 3. Getting Sanity API Tokens

1. Go to [manage.sanity.io](https://manage.sanity.io)
2. Select your project (jyrid0xg)
3. Go to API > Tokens
4. Create a token with "Editor" permissions for SANITY_API_READ_TOKEN
5. (Optional) Create a token with "Write" permissions for SANITY_API_WRITE_TOKEN

## 4. Development

Run the development server:

```bash
# Install dependencies
pnpm install

# Start development servers for both studio and web
pnpm dev
```

This will start:
- Sanity Studio at http://localhost:3333
- Next.js Web App at http://localhost:3000

## 5. Deployment

The project is configured to deploy on Netlify with the provided `netlify.toml` configuration.

### Environment Variables in Netlify

Make sure to add all environment variables from your `.env.local` files to your Netlify site settings:

1. Go to Netlify site settings
2. Navigate to Build & deploy > Environment
3. Add each variable and its value
4. Trigger a new deploy

## 6. Additional Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Turbo Repo Documentation](https://turbo.build/repo/docs)
