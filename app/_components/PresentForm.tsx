"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { submitPresent } from "@/actions/submit";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PresentSchema } from "@/descriptions/zod";

import PopupDialog from "./PopupDialog";

const PresentForm = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const form = useForm<z.infer<typeof PresentSchema>>({
    resolver: zodResolver(PresentSchema),
    defaultValues: {
      name: "",
      note: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof PresentSchema>) => {
    const response = await submitPresent(data);
    if (response.success) {
      toast.success(response.message);
      form.reset();
      setIsDialogOpen(true);
    } else {
      toast.error(response.message);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="relative isolate z-50 mt-8 space-y-2"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel className="w-full min-w-60 max-w-60 text-2xl text-[#7C7C7C] md:text-right">
                Nome Completo
              </FormLabel>
              <FormControl>
                <Input
                  placeholder=""
                  {...field}
                  className="bg-white md:text-lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="note"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel className="w-full min-w-60 max-w-60 text-2xl text-[#7C7C7C] md:text-right">
                Recado
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder=""
                  {...field}
                  rows={4}
                  className=" bg-white md:text-lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          variant="ringHover"
          className="mx-auto mt-8 block w-full max-w-md bg-[#555353] text-white lg:!mt-8"
          type="submit"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? "..." : "Enviar Recado"}
        </Button>
      </form>
      <PopupDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </Form>
  );
};

export default PresentForm;
