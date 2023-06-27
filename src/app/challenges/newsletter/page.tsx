import { type Metadata } from "next";
import { NewsletterForm } from "./components/form";

export const metadata: Metadata = {
  title: "Newsletter",
  description: "Newsletter sign-up form with success message",
};

// todo: fix flash when page loads
// todo: change favicon

export default function Page() {
  return (
    <div>
      <NewsletterForm />
    </div>
  );
}
