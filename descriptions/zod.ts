import { z } from "zod";

export const ConfirmationSchema = z.object({
  name: z
    .string({ required_error: "Nome é obrigatório" })
    .min(1, "Nome é obrigatório")
    .trim(),
  coming: z.string({ required_error: "Você irá ao evento?" }),
  adults: z.coerce.number({
    required_error: "Quantidade de adultos é obrigatório",
  }),
  children: z.coerce.number({
    required_error: "Quantidade de crianças é obrigatório",
  }),
  email: z
    .string({ required_error: "Email é obrigatório" })
    .email({
      message: "Email é obrigatório",
    })
    .trim(),
  phone: z
    .string({ required_error: "Telefone é obrigatório" })
    .min(1, "Telefone é obrigatório")
    .trim(),
  note: z.string().optional(),
});

export const PresentSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório").trim().toLowerCase(),
  note: z.string().optional(),
});
