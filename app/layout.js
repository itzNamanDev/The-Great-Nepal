// app/layout.js
export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <head>
          <title>My Next.js App</title>
        </head>
        <body>
          <header>
            <h1>Welcome to My Next.js App</h1>
          </header>
          <main>{children}</main> {/* This will render the page content */}
          <footer>
            <p>Footer Content Here</p>
          </footer>
        </body>
      </html>
    );
  }  