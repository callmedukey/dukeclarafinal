"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { confirmAttendance } from "@/actions/submit";
import { Button } from "@/components/ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ConfirmationSchema } from "@/descriptions/zod";

const ConfirmationForm = () => {
  const form = useForm<z.infer<typeof ConfirmationSchema>>({
    resolver: zodResolver(ConfirmationSchema),
    defaultValues: {
      name: "",
      coming: "",
      adults: 0,
      children: 0,
      email: "",
      phone: "",
      note: "",
    },
  });

  const onSubmit = form.handleSubmit(async (data) => {
    const response = await confirmAttendance(data);
    if (response.success) {
      toast.success("Presença confirmada com sucesso");
    } else {
      toast.error("Erro ao confirmar presença");
    }
  });

  return (
    <Form {...form}>
      <form
        className="mt-8 space-y-4 rounded-3xl border-2 border-[#555353] bg-white p-8 lg:mt-16"
        onSubmit={onSubmit}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row md:items-center md:gap-4">
              <FormLabel className="w-full min-w-60 max-w-60 text-lg text-[#7C7C7C] md:text-right">
                Seu nome completo
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
          name="coming"
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row md:items-center md:gap-4">
              <FormLabel className="w-full min-w-60 max-w-60 text-lg text-[#7C7C7C] md:text-right">
                Você irá ao evento?
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex gap-4"
                >
                  <FormItem className="flex items-center gap-2">
                    <FormControl>
                      <RadioGroupItem value="true" />
                    </FormControl>
                    <FormLabel className="text-lg font-normal text-[#7C7C7C]">
                      Sim
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center gap-2">
                    <FormControl>
                      <RadioGroupItem value="false" />
                    </FormControl>
                    <FormLabel className="text-lg font-normal text-[#7C7C7C]">
                      Não
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="adults"
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row md:items-center md:gap-4 ">
              <FormLabel className="w-full min-w-60 max-w-60 text-lg font-normal text-[#7C7C7C] md:text-right">
                Quantidade de adultos <br /> incluindo você
              </FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value.toString()}
              >
                <FormControl>
                  <SelectTrigger className="w-16 text-lg ">
                    {field.value}
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Array.from({ length: 6 }, (_, index) => (
                    <SelectItem key={index} value={index.toString()}>
                      {index}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="children"
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row md:items-center md:gap-4">
              <FormLabel className="w-full min-w-60 max-w-60 text-lg font-normal text-[#7C7C7C] md:text-right">
                Quantidade de crianças
              </FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value.toString()}
              >
                <FormControl>
                  <SelectTrigger className="w-16 text-lg ">
                    {field.value}
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Array.from({ length: 4 }, (_, index) => (
                    <SelectItem key={index} value={index.toString()}>
                      {index}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row md:items-center md:gap-4">
              <FormLabel className="w-full min-w-60 max-w-60 text-lg text-[#7C7C7C] md:text-right">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  placeholder=""
                  type="email"
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
          name="phone"
          render={({ field }) => (
            <FormItem className="flex flex-col md:flex-row md:items-center md:gap-4">
              <FormLabel className="w-full min-w-60 max-w-60 text-lg text-[#7C7C7C] md:text-right">
                Telefone para <br className="hidden md:block" /> contato
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
            <FormItem className="flex flex-col md:flex-row md:items-center md:gap-4">
              <FormLabel className="w-full min-w-60 max-w-60 text-lg text-[#7C7C7C] md:text-right">
                Observações
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder=""
                  {...field}
                  className="bg-white md:text-lg"
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
          {form.formState.isSubmitting ? "Enviando..." : "Confirmar presença"}
        </Button>
      </form>
    </Form>
  );
};

export default ConfirmationForm;
