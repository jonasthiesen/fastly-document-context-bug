# DocumentContext undefined in Fastly Next.js

The `DocumentContext` is `undefined` in Fastly when you use `getServerSideProps`. As soon as you get rid of it, it works as expected.

## How to reproduce
1. Clone this repo
1. Install dependencies: `npm install`
1. Run in dev mode: `npm run dev`
1. Go to http://localhost:3000 and notice that the context is shown
1. Run in production mode: `npm run build && npm run start`
1. It's still working
1. Run with Fastly: `npm run fastly-serve`
1. Go to http://localhost:7676 and notice the context is missing
1. Now the context is missing
1. If you comment out the `getServerSideProps` from `index.tsx`, it will show the context.

## Why this is an issue
There are properties on the `DocumentContext` like `locale` that are quite useful in situations where you need it to only render on the server.