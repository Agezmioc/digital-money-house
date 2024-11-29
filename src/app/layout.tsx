import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>
          <Header/>
        </div>
        {children}
        <div>
        © 2022 Digital Money House
        </div>
      </body>
    </html>
  );
}
