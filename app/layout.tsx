import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BuildLink",
  description: "Find building materials and connect with suppliers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
