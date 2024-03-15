import "./globals.css";
export const metadata = {
  title: "Portfolio||Foysal ",
  description: " Showcasing projects",
  opengraph: {
    title: "Portfolio||Foysal ",
    description: " Showcasing projects",
    images:["/poortfolio.png"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
