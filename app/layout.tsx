import "./globals.css";
export const metadata = {
  title: "Foysal - Portfolio",
  description: "Crafting dynamic web experiences through innovative design and robust development.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <head>
        <meta property="og:image" content="/portfolio.png" />
        </head>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
