"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { MobileForm } from "./mobileForm";
import { DesktopForm } from "./desktopForm";

export const FormSchema = z.object({
  emailAddress: z
    .string()
    .nonempty({
      message: "Email address is required",
    })
    .email({
      message: "Valid email required",
    }),
});

export function NewsletterForm() {
  const [submittedEmailAddress, setSubmittedEmailAddress] = useState<
    string | undefined
  >(undefined);
  const [width, setWidth] = useState<number>(0);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      emailAddress: "",
    },
  });

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const handleDismissClick = () => {
    setSubmittedEmailAddress(undefined);
    form.reset();
  };

  return (
    <div>
      {width > 375 ? (
        <DesktopForm
          form={form}
          handleDismissClick={handleDismissClick}
          setSubmittedEmailAddress={setSubmittedEmailAddress}
          submittedEmailAddress={submittedEmailAddress}
        />
      ) : (
        <MobileForm
          form={form}
          handleDismissClick={handleDismissClick}
          setSubmittedEmailAddress={setSubmittedEmailAddress}
          submittedEmailAddress={submittedEmailAddress}
        />
      )}
    </div>
  );
}
