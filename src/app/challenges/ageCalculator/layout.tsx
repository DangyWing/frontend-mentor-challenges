import { type Metadata } from "next";
import "~/styles/globals.css";
import { Poppins } from "next/font/google";
import { cn } from "~/lib/utils";

const poppins = Poppins({
  weight: ["400", "700", "800"],
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
        "flex min-h-screen flex-col items-center justify-center bg-ageCalculator-offWhite antialiased",
        poppins.className
      )}
    >
      {children}
    </main>
  );
}
