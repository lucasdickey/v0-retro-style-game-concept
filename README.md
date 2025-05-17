# Retro style game concept

*Automatically synced with your [v0.dev](https://v0.dev) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/lucasdickeys-projects/v0-retro-style-game-concept)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/KrX7mNiKuVN)

## Overview

This repository will stay in sync with your deployed chats on [v0.dev](https://v0.dev).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.dev](https://v0.dev).

## Deployment

Your project is live at:

**[https://vercel.com/lucasdickeys-projects/v0-retro-style-game-concept](https://vercel.com/lucasdickeys-projects/v0-retro-style-game-concept)**

## Build your app

Continue building your app on:

**[https://v0.dev/chat/projects/KrX7mNiKuVN](https://v0.dev/chat/projects/KrX7mNiKuVN)**

## How It Works

1. Create and modify your project using [v0.dev](https://v0.dev)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository

## Embedding in another Next.js app

This repository exposes the `ChaosMonkey` React component so it can be
embedded in any other Next.js project. Install it directly from the git
repository and import the component:

```bash
npm install <path-or-git-url-to-this-repo>
```

```tsx
import { ChaosMonkey } from 'chaos-monkey-game'

export default function Example() {
  return <ChaosMonkey />
}
```

The widget renders the game canvas on the client. Make sure that the
component is used inside a client component when using the Next.js `app`
router.
