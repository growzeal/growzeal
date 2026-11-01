
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GrowZeal | Practical Learning. Real Projects. Career Growth.",
  description:
    "GrowZeal helps students develop practical skills through structured learning, hands-on projects, and career-focused programs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-inter">
        {children}
      </body>
    </html>
  );
}
