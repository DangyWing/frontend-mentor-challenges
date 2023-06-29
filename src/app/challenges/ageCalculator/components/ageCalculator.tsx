"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";

import { DesktopForm } from "./desktopForm";
import { MobileForm } from "./mobileForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";

const currentYear = new Date().getFullYear();

export const FormSchema = z.object({
  day: z.coerce
    .number()
    .gte(1, { message: "Must be a valid day" })
    .lte(31, { message: "Must be a valid day" })
    .or(z.literal("")),
  month: z.coerce
    .number()
    .gte(1, {
      message: "Must be a valid month",
    })
    .lte(12, {
      message: "Must be a valid month",
    })
    .or(z.literal("")),
  year: z.coerce
    .number()
    .positive()
    .lte(currentYear, { message: "Must be in the past" })
    .or(z.literal("")),
  customError: z.string().optional(),
});

export type FormSchemaType = z.infer<typeof FormSchema>;

export function AgeCalculator() {
  const [width, setWidth] = useState<number>(376);

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

  const form = useForm<FormSchemaType>({
    mode: "onChange",
    criteriaMode: "all",
    resolver: zodResolver(FormSchema),
    defaultValues: {
      day: "",
      month: "",
      year: "",
    },
  });

  return (
    <>
      {width > 375 ? <DesktopForm form={form} /> : <MobileForm form={form} />}
    </>
  );
}
