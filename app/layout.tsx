import "./globals.css";
export const metadata = {
  title: "Web Engineer Foysal ",
  description: " Showcase Web Developer MD Foysal Ahammed projects",
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
