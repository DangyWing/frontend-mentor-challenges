"use client";

import { type useForm } from "react-hook-form";
import { type z } from "zod";
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
import mobileSignUp from "../images/illustration-sign-up-mobile.svg";
import iconSuccess from "../images/icon-success.svg";
import { ListItem } from "./ListItem";
import { type FormSchema } from "./form";

export const MobileForm = ({
  submittedEmailAddress,
  handleDismissClick,
  form,
  setSubmittedEmailAddress,
}: {
  submittedEmailAddress: string | undefined;
  handleDismissClick: () => void;
  form: ReturnType<typeof useForm<z.infer<typeof FormSchema>>>;

  setSubmittedEmailAddress: React.Dispatch<
    React.SetStateAction<string | undefined>
  >;
}) => {
  return (
    <div className="mt-32 flex justify-center">
      {submittedEmailAddress ? (
        <div className="container flex h-screen flex-col justify-between bg-white p-8">
          <div className="mt-24">
            <Image src={iconSuccess as string} alt="successIcon" />
            <h1 className="my-6 text-3xl font-bold">Thanks for subscribing!</h1>
            <p className="my-4">
              A confirmation email has been sent to{" "}
              <span className="font-bold">{submittedEmailAddress}.</span> Please
              open it and click the button inside to confirm your subscription.
            </p>
          </div>
          <div className="pb-8">
            <Button
              className="duration-800 w-full bg-slate-800 from-pink-500 to-orange-400 font-bold transition-all hover:bg-gradient-to-r hover:drop-shadow-2xl"
              onClick={handleDismissClick}
            >
              Dismiss message
            </Button>
          </div>
        </div>
      ) : (
        <div className={"flex flex-col rounded-3xl bg-white"}>
          <Image
            src={mobileSignUp as string}
            alt="Sign Up Illustration"
            className=""
          />
          <div className="mx-6 text-lg">
            <h1 className="my-4 text-4xl font-bold">Stay updated!</h1>
            <p className="my-4">
              Join 60,000+ product managers receiving monthly updates on:{" "}
            </p>
            <ul className="list-outside ">
              <ListItem
                itemText="Product discovery and building what matters"
                width={20}
              />
              <ListItem
                itemText="Measuring to ensure updates are a success"
                width={20}
              />
              <ListItem itemText="And much more!" width={20} />
            </ul>
          </div>
          <Form {...form}>
            <form
              onSubmit={(event) =>
                void form.handleSubmit((data) => {
                  setSubmittedEmailAddress(data.emailAddress);
                })(event)
              }
              className="m-4 space-y-6"
            >
              <FormField
                control={form.control}
                name="emailAddress"
                render={({ field }) => (
                  <FormItem>
                    <div className="mb-4">
                      <FormLabel
                        htmlFor="emailAddress"
                        className="flex justify-between text-xs font-bold text-slate-800"
                      >
                        Email address
                        <FormMessage />
                      </FormLabel>
                    </div>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="email@company.com"
                        {...field}
                        className={
                          form.formState.errors.emailAddress
                            ? "background border-red-500 bg-red-100 placeholder:text-red-600"
                            : "placeholder-red-600"
                        }
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-slate-800 font-bold">
                Subscribe to monthly newsletter
              </Button>
            </form>
          </Form>
        </div>
      )}
    </div>
  );
};
