# DocumentContext undefined in Fastly Next.js

## How to reproduce
1. Clone the repo
1. Install dependencies: `npm install`
1. Run in dev mode: `npm run dev`
1. Notice that it works
1. Run in production mode: `npm run build && npm run start`
1. Still works
1. Run with Fastly: `npm run fastly-serve`
1. Now the `DocumentContext` is undefined.
1. If you comment out the `getServerSideProps` from `index.tsx`, it will work as expected.

## Why this is an issue
There are properties on the `DocumentContext` like `locale` that are quite useful in situations where you need it to only render on the server.