This is a [Next.js Classes](https://nextjs.org) with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

# Next.js Layouts and Nested Layouts

Next.js provides a powerful layout system that allows you to define consistent layouts for your application. You can create both global layouts and nested layouts to manage different sections of your application.

## Global Layout

A global layout is a layout that wraps your entire application. It is typically defined in the `src/app/layout.tsx` file. This layout will be applied to all pages in your application.

### Example Global Layout

**`src/app/layout.tsx`**

```tsx
export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <h1 className="bg-sky-600 text-white py-5 px-5">Header</h1>
        {children}
        <h1 className="bg-green-500 text-stone-200 px-5">Footer</h1>
      </body>
    </html>
  );
}
```

### Nested Layouts

<p>Nested layouts allow you to define layouts for specific sections of your application. This is useful when you want to apply different layouts to different parts of your application.</p>

### Example Directory Structure

<p>Consider the following directory structure for a product review section:</p>
<pre>
 src/
  app/
    products/
      [productId]/
        reviews/
          [reviewId]/
            layout.tsx
            page.tsx
        page.tsx
      page.tsx
</pre>

# Next.js Routing Metadata and Title Metadata

Next.js provides a powerful way to manage metadata for your routes, including setting dynamic titles and descriptions for each page. This helps improve SEO and provides a better user experience.

## Setting Metadata for Routes

You can set metadata for your routes by exporting a `metadata` object from your page components. This metadata can include the title, description, and other meta tags.

### Example Directory Structure

Consider the following directory structure:
**`src/ app/ layout.tsx page.tsx blog/ page.tsx`**

### Example Global Layout

**`src/app/layout.tsx`**

```tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Next.js Classes",
    template: "%s | Next.js Classes",
    absolute: "",
  },
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <h1 className="bg-sky-600 text-white py-5 px-5">Header</h1>
        {children}
        <h1 className="bg-green-500 text-stone-200 px-5">Footer</h1>
      </body>
    </html>
  );
}
```

# Next.js Params and Search Params

Next.js provides a powerful way to handle dynamic routes and query parameters using `params` and `searchParams`. This allows you to create dynamic and flexible routes that can handle various parameters and query strings.

## Dynamic Routes with Params

Dynamic routes in Next.js can be created by using square brackets in the file or directory names. The `params` object contains the dynamic parameters for the route.

### Example Component

**`src/app/articles/[articleId]/page.tsx`**

```tsx
"use client";
import Link from "next/link";
import React from "react";
import { use } from "react";

const NewsArticles = ({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "bn" | "sp" }>;
}) => {
  const { articleId } = use(params);
  const { lang } = use(searchParams);

  return (
    <div>
      <h1>New Articles Id {articleId}</h1>
      <p>Reading in language lang {lang}</p>
      <div>
        <Link href={`/articles/${articleId}?lang=en`}>english</Link>
        <Link href={`/articles/${articleId}?lang=bn`}>bangla</Link>
        <Link href={`/articles/${articleId}?lang=sp`}>spanish</Link>
      </div>
    </div>
  );
};

export default NewsArticles;
```
