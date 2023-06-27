import { type Metadata } from "next";
import "~/styles/globals.css";
import { fontMono } from "~/styles/fonts";
import { cn } from "~/lib/utils";

export const metadata: Metadata = {
  title: "Frontend Mentor Challenges",
  description: "Frontend Mentor Challenges",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-primary antialiased",
          fontMono.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
