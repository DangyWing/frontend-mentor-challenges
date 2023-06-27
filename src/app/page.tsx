import { type Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frontend Mentor Challenges",
  description: "Frontend Mentor Challenges",
};

export default function Page() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Frontend Mentor Challenges
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <div className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20">
              <Link href="/challenges/newsletter" target="_blank">
                <h3 className="text-2xl font-bold">Newsletter →</h3>
                <div className="text-lg">
                  Newsletter Frontend Mentor Challenge
                </div>
              </Link>
              <Link
                className="rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
                href="https://create.t3.gg/en/usage/first-steps"
                target="_blank"
              >
                Source
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
