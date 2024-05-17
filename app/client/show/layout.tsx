import { Inter } from "next/font/google";
import "./styles.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1>Header</h1>
        {children}
        </body>
    </html>
  );
}
