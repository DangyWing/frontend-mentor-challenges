"use client";

import { type useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import Image from "next/image";
import iconArrow from "../assets/images/icon-arrow.svg";
import { validateDate } from "../validateDate";
import { useState } from "react";
import { calculateAge } from "../calculateAge";
import type { FormSchemaType } from "./ageCalculator";
import { StaggerDisplay } from "./staggerDisplay";

const inputStyle = "mb-2 uppercase text-ageCalculator-smokeyGrey w-24";
const errorStyle =
  "background border-red-500 bg-red-100 text-lg font-bold text-ageCalculator-offBlack placeholder:text-red-600";

export const DesktopForm = ({
  form,
}: {
  form: ReturnType<typeof useForm<FormSchemaType>>;
}) => {
  const [age, setAge] = useState<{
    years: string | number;
    months: string | number;
    days: string | number;
  }>({
    years: "- -",
    months: "- -",
    days: "- -",
  });

  const {
    formState: { errors },
  } = form;

  function bulkSetErrors({
    data,
    customErrorMessage,
  }: {
    data: FormSchemaType;
    customErrorMessage: string;
  }) {
    form.setError("customError", {
      message: customErrorMessage,
    });

    let key: keyof typeof data;

    for (key in data) {
      form.setError(key, {
        message: "",
      });
    }
  }

  return (
    <div className="mt-32 flex w-96 flex-col justify-center rounded-3xl rounded-br-[120px] bg-white p-12">
      <Form {...form}>
        <form
          onChange={() => {
            form.clearErrors();
          }}
          onSubmit={(event) =>
            void form.handleSubmit((data) => {
              const { day, month, year } = data;
              if (day === "" || month === "" || year === "") return;

              if (!validateDate({ day, month, year })) {
                bulkSetErrors({
                  customErrorMessage: "Must be a valid date",
                  data,
                });
                return;
              }

              const age = calculateAge({ day, month, year });
              if (age.days < 0 || age.months < 0 || age.years < 0) {
                bulkSetErrors({
                  customErrorMessage: "Please submit a date in the past",
                  data,
                });
                return;
              }

              setAge(age);
            })(event)
          }
        >
          <div className="flex space-x-8">
            <FormField
              control={form.control}
              name="day"
              render={({ field }) => (
                <FormItem className={inputStyle}>
                  <FormLabel
                    htmlFor="day"
                    className="text-xs font-bold tracking-widest"
                  >
                    Day
                    <FormMessage />
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="DD"
                      {...field}
                      className={
                        errors.day ? errorStyle : "placeholder-red-600"
                      }
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="month"
              render={({ field }) => (
                <FormItem className={inputStyle}>
                  <FormLabel htmlFor="month" className="font-bold">
                    Month
                    <FormMessage />
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="MM"
                      {...field}
                      className={
                        errors.day ? errorStyle : "placeholder-red-600"
                      }
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="year"
              render={({ field }) => (
                <FormItem className={inputStyle}>
                  <FormLabel htmlFor="year" className="font-bold">
                    Year
                    <FormMessage />
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="YYYY"
                      {...field}
                      className={
                        errors.day ? errorStyle : "placeholder-red-600"
                      }
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          {errors.customError && (
            <div className={"text-sm font-medium italic text-destructive"}>
              {errors.customError.message}
            </div>
          )}

          <div className="relative my-8">
            <hr className="w-full border border-ageCalculator-lightGrey" />
            <Button className="background absolute -top-6 right-0 flex h-14 w-14 items-center justify-center rounded-full bg-ageCalculator-purple">
              <Image
                src={iconArrow as string}
                alt="Arrow"
                className="h-8 w-8 "
              />
            </Button>
          </div>
        </form>
      </Form>
      <div className="flex flex-col">
        <div className="flex text-6xl font-extrabold italic">
          <span className="text-ageCalculator-purple">
            <StaggerDisplay words={age.years.toString()} />
          </span>
          years
        </div>
        <div className="flex text-6xl font-extrabold italic">
          <span className="text-ageCalculator-purple">
            <StaggerDisplay words={age.months.toString()} />
          </span>
          months
        </div>
        <div className="flex text-6xl font-extrabold italic">
          <span className="text-ageCalculator-purple">
            <StaggerDisplay words={age.days.toString()} />
          </span>
          days
        </div>
      </div>
    </div>
  );
};
