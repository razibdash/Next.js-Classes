This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Next.js Routing System

Next.js uses a file-based routing system. This means that the structure of your files and directories inside the `pages` or `app` directory determines the routes of your application.

## Basic Routing

Each file inside the `pages` or `app` directory will automatically become a route in your application. For example:

- `src/app/about/page.tsx` will be accessible at `/about`
- `src/app/profile/page.tsx` will be accessible at `/profile`

### Example

Here are two example components:

**`src/app/about/page.tsx`**

```tsx
import React from "react";

function About() {
  return <div>About Page</div>;
}

export default About;
```

**`src/app/profile/page.tsx`**

```tsx
function Profile() {
  return <div>Profile Page</div>;
}

export default Profile;
```
