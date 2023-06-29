import { type Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frontend Mentor Challenges",
  description: "Frontend Mentor Challenges",
};

const challenges = [
  {
    title: "Newsletter",
    description: "Newsletter",
    link: "https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv",
    source: "/challenges/newsletter",
  },
  {
    title: "Age Calculator",
    description: "Age Calculator",
    link: "https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q",
    source: "/challenges/ageCalculator",
  },
];

export default function Page() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Frontend Mentor Challenges
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
            {challenges.map((challenge) => (
              <div
                className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
                key={challenge.source}
              >
                <Link href={challenge.source} target="_blank">
                  <h3 className="text-2xl font-bold">{challenge.title} →</h3>
                  <p className="text-lg">{challenge.description}</p>
                </Link>
                <Link
                  className="rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
                  href={challenge.link}
                  target="_blank"
                >
                  Source
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
