import type { ReactNode } from "react";

export const metadata = {
  title: "BuildLink",
  description: "Find, post, and request construction materials.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
