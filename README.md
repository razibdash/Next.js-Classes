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

**`http://localhost:3000/about/`**

```tsx
import React from "react";

function About() {
  return <div>About Page</div>;
}

export default About;
```

**`http://localhost:3000/profile/`**

```tsx
function Profile() {
  return <div>Profile Page</div>;
}

export default Profile;
```

# Next.js Nested Routing System

Next.js uses a file-based routing system, which allows you to create nested routes by organizing your files and directories in a hierarchical structure. This makes it easy to manage complex routing scenarios in your application.

## Basic Nested Routing

To create nested routes, you simply create nested directories inside the `pages` or `app` directory. Each directory and file will correspond to a route in your application.

### Example Directory Structure

Consider the following directory structure for a blog:

### Example Components

Here are the example components for the above directory structure:

**`http://localhost:3000/blog/`**

```tsx
import React from "react";

function Myblog() {
  return <div>Myblog</div>;
}

export default Myblog;
```

**`http://localhost:3000/blog/first`**

```tsx
import React from "react";

function First() {
  return <div>First</div>;
}

export default First;
```

**`http://localhost:3000/blog/second`**

```tsx
import React from "react";

function Second() {
  return <div>Second</div>;
}

export default Second;
```

### Routes

<p>With the above directory structure, the following routes will be available in your application:</p>
<ul>
 <li>/blog will render the Myblog component from page.tsx</li>
 <li>/blog/first will render the First component from page.tsx</li>
 <li>/blog/second will render the Second component from page.tsx</li>
</ul>

# Next.js Dynamic Routes and Nested Dynamic Routes

Next.js uses a file-based routing system that allows you to create dynamic routes by using square brackets in the file or directory names. This feature is useful for creating routes that depend on dynamic parameters, such as product IDs or user IDs.

## Dynamic Routes

Dynamic routes can be created by using square brackets in the file name. For example, to create a route for a product with a dynamic `productId`, you can create a file named `[productId].tsx` inside the `pages` or `app` directory.

### Example Directory Structure

### Example Component

**`src/app/products/[productId]/page.tsx`**

```tsx
import React from "react";

async function ProductId({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  return <h1>Details about product Id: {productId}</h1>;
}

export default ProductId;
```

### Nested Dynamic Routes

<p>Nested dynamic routes can be created by nesting directories with square brackets. For example, to create a route for a product review with dynamic productId and reviewId, you can create nested directories [productId] and [reviewId].</p>

### Example Directory Structure

<pre>
  src/
  app/
    products/
      [productId]/
        reviews/
          [reviewId]/
            page.tsx
        page.tsx
      page.tsx
</pre>

```tsx
import React from "react";

async function ReviewId({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;

  return (
    <h1>
      Review {reviewId} for product Id {productId}
    </h1>
  );
}

export default ReviewId;
```

# Catch-All Segments

<p>Catch-all segments can be created using three dots inside square brackets. This allows you to match multiple segments in a single route. For example, to create a route that matches any number of segments under /docs, you can create a file named [[...slug]].tsx.</p>

### Example Directory Structure

<pre>
src/
  app/
    docs/
      [[...slug]]/
        page.tsx
</pre>

# Next.js Group Routes

Next.js allows you to group related routes together by organizing your files and directories in a hierarchical structure. This makes it easy to manage and maintain related routes in your application.

## Group Routes

To create group routes, you simply create a directory to group related routes together inside the `pages` or `app` directory. Each file inside the group directory will correspond to a route in your application.

### Example Directory Structure

Consider the following directory structure for authentication-related routes:
src/ app/ (auth)/ forget-password/ page.tsx login/ page.tsx register/ page.tsx
