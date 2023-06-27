import { type Metadata } from "next";
import "~/styles/globals.css";
import { Roboto } from "next/font/google";
import { cn } from "~/lib/utils";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FMC - Newsletter",
  description: "Frontend Mentor Challenges: Newsletter Sign Up",
};

export default function NewsletterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      className={cn(
        "align-center flex h-screen justify-center bg-slate-800 antialiased",
        roboto.className
      )}
    >
      {children}
    </main>
  );
}
