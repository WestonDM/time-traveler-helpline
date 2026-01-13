# Netlify Deployment Guide

## Secure Wordlist Deployment

This app uses encrypted wordlists to protect the word data. Follow these steps to deploy securely to Netlify.

## Prerequisites

-   Netlify account
-   Git repository connected to Netlify
-   Environment variable set up

## Deployment Steps

### 1. Connect Repository to Netlify

1. Go to [Netlify Dashboard](https://app.netlify.com/)
2. Click "New site from Git"
3. Connect your GitHub repository
4. Configure build settings:
    - **Build command**: `npm run build`
    - **Publish directory**: `build`

### 2. Set Environment Variable

**Option A: Via Netlify Dashboard (Recommended)**

1. Go to Site settings → Environment variables
2. Add new variable:
    - **Key**: `REACT_APP_ENCRYPTION_KEY`
    - **Value**: `TimeTraveler2025!@#`
3. Save and redeploy

**Option B: Via netlify.toml (Already configured)**
The `netlify.toml` file already contains the environment variable configuration.

### 3. Deploy

1. Push your changes to the main branch
2. Netlify will automatically build and deploy
3. The app will decrypt the wordlist using the environment variable

## Security Notes

-   ✅ The encryption key is stored as an environment variable (not in code)
-   ✅ The plain text wordlist is not in the repository
-   ✅ Only the encrypted wordlist is public
-   ✅ The encryption utilities are included but use the environment variable

## Local Development

For local development, create a `.env.local` file:

```
REACT_APP_ENCRYPTION_KEY=TimeTraveler2025!@#
```

This file is already in `.gitignore` and won't be committed.

## Troubleshooting

If the app shows no words:

1. Check that the environment variable is set correctly
2. Verify the encrypted wordlist file exists
3. Check browser console for decryption errors
4. Ensure the encryption key matches between local and production


