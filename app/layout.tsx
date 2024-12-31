import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";



export const metadata: Metadata = {
  title: "Wikandika's Portfolio",
  description: "This is Wikandika's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
      {/* <ThemeProvider attribute="class">{children}</ThemeProvider> */}
        {children}
      </body>
    </html>
  );
}
