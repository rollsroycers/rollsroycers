# Vercel Environment Variables Setup Guide

## How to Add Environment Variables in Vercel

1. Go to your Vercel Dashboard
2. Select your project (rollsroycers)
3. Navigate to "Settings" → "Environment Variables"
4. Add the following variables:

## Required Variables

```bash
# Base URL (Will be automatically set by Vercel)
NEXT_PUBLIC_BASE_URL=https://rollsroycers.vercel.app

# Contact Information
NEXT_PUBLIC_PHONE_NUMBER=+971558164922
NEXT_PUBLIC_WHATSAPP_NUMBER=971558164922
NEXT_PUBLIC_EMAIL=info@rollsroycers.com
```

## Optional Variables (Add as needed)

### Analytics & Tracking
```bash
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID=GTM-XXXXXXX
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=XXXXXXXXXXXXXXX
```

### Social Media
```bash
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/rollsroycedubai
NEXT_PUBLIC_FACEBOOK_URL=https://facebook.com/rollsroycedubai
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/rollsroycedubai
```

### Email Service (For contact forms)
```bash
SENDGRID_API_KEY=SG.xxxxxxxxxxxxxxxxxxxx
EMAIL_FROM=noreply@rollsroycers.com
EMAIL_TO=info@rollsroycers.com
```

## Environment Scopes in Vercel

When adding variables, you can set them for different environments:
- **Production**: Live website
- **Preview**: Pull request previews
- **Development**: Local development

## Security Notes

1. Never commit `.env` files with real values to Git
2. Use `.env.local` for local development
3. Variables starting with `NEXT_PUBLIC_` are exposed to the browser
4. Keep sensitive keys (API_SECRET_KEY, database passwords) without `NEXT_PUBLIC_` prefix

## Local Development

1. Copy `.env.example` to `.env.local`
2. Fill in your values
3. Restart your development server

```bash
cp .env.example .env.local
npm run dev
```

## Vercel Auto-Generated Variables

Vercel automatically provides these variables:
- `VERCEL_URL`: The domain of your deployment
- `VERCEL_ENV`: The environment (production, preview, development)
- `VERCEL_REGION`: The region of deployment

## Testing Your Deployment

After setting up environment variables:
1. Trigger a new deployment
2. Check the build logs for any errors
3. Verify variables are loaded correctly in your application