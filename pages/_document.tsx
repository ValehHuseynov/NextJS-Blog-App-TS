import Document, { Html, Head, Main, NextScript } from "next/document";
import { ReactElement } from "react";

class MyDocument extends Document {
  render(): ReactElement {
    return (
      <Html lang="en">
        <Head />
        <body>
          <div id="notification"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
