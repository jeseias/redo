import Document, { Head, Html, Main, NextScript } from 'next/document';
// Import styled components ServerStyleSheet

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <body>
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link
              href="https://fonts.googleapis.com/css2?family=Electrolize&display=swap"
              rel="stylesheet"
            />
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width,initial-scale=1.0" />
            <meta name="robots" content="index, follow" />
            <meta name="description" content="Awesome todo list build with NextJS and Redux" />
            <title>Redo - Keep all your tasks organized</title>
          </Head>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
