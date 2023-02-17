import { Html, Head, Main, NextScript, DocumentContext } from "next/document";

export default function Document(ctx: DocumentContext) {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <pre>{JSON.stringify(ctx, null, 2)}</pre>
        <NextScript />
      </body>
    </Html>
  );
}
