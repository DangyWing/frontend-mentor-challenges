import { type Metadata } from "next";
import { AgeCalculator } from "./components/ageCalculator";

export const metadata: Metadata = {
  title: "Age Calculator",
  description: "Age Calculator",
};

export default function Page() {
  return <AgeCalculator />;
}
