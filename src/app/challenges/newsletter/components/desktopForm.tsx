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
import desktopSignUp from "../images/illustration-sign-up-desktop.svg";
import iconSuccess from "../images/icon-success.svg";
import { ListItem } from "./ListItem";
import { type FormSchema } from "./form";

export const DesktopForm = ({
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
        <div className="align-center flex w-1/2 justify-center rounded-3xl bg-white">
          <div className="mx-32 my-8">
            <Image src={iconSuccess as string} alt="successIcon" />
            <h1 className="my-8 text-7xl font-bold">Thanks for subscribing!</h1>
            <p className="">
              A confirmation email has been sent to{" "}
              <span className="font-bold">{submittedEmailAddress}.</span> Please
              open it and click the button inside to confirm your subscription.
            </p>
            <div className="my-8">
              <Button
                className="duration-800 w-full bg-slate-800 from-pink-500 to-orange-400 font-bold transition-all hover:bg-gradient-to-r hover:drop-shadow-2xl"
                onClick={handleDismissClick}
              >
                Dismiss message
              </Button>
            </div>
          </div>
        </div>
      ) : (
        // </div>
        <div className="rounded-3xl bg-white p-2">
          <div className="flex">
            <div className="mx-12">
              <h1 className="my-8 text-7xl font-bold">Stay updated!</h1>
              <p className="my-4">
                Join 60,000+ product managers receiving monthly updates on:
              </p>
              <ul>
                <ListItem itemText="Product discovery and building what matters" />
                <ListItem itemText="Measuring to ensure updates are a success" />
                <ListItem itemText="And much more!" />
              </ul>
              <div className="mt-8">
                <Form {...form}>
                  <form
                    onSubmit={(event) =>
                      void form.handleSubmit((data) => {
                        setSubmittedEmailAddress(data.emailAddress);
                      })(event)
                    }
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="emailAddress"
                      render={({ field }) => (
                        <FormItem>
                          <div className="mb-4">
                            <FormLabel
                              htmlFor="emailAddress"
                              className="flex justify-between font-bold text-slate-800"
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
                    <Button
                      type="submit"
                      className="w-full bg-slate-800 font-bold"
                    >
                      Subscribe to monthly newsletter
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
            <Image
              src={desktopSignUp as string}
              alt="Sign Up Illustration"
              className="m-6"
            />
          </div>
        </div>
      )}
    </div>
  );
};
