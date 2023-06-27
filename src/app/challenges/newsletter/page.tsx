import { type Metadata } from "next";
import { NewsletterForm } from "./components/form";

export const metadata: Metadata = {
  title: "Newsletter",
  description: "Newsletter sign-up form with success message",
};

export default function Page() {
  return (
    <div>
      <NewsletterForm />
    </div>
  );
}
