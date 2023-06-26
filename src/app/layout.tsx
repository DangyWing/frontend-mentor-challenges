import { type Metadata } from "next";
import "~/styles/globals.css";

export const metadata: Metadata = {
  title: "Frontend Mentor Challenges",
  description: "Frontend Mentor Challenges",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
