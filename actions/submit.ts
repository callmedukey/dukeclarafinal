"use server";

import { z } from "zod";

import drizzleClient from "@/db";
import { confirmationsTable, presentsTable } from "@/db/schema";
import { ConfirmationSchema, PresentSchema } from "@/descriptions/zod";
import { DiscordClient } from "@/lib/discordClient";

const list: string[] = [];

[
  "Maurício Faria",
  "Helena Chaves",
  "Deraldo Faria",
  "Licia Faria",
  "Shoraya Faria",
  "Edson Garrido",
  "Márcia Faria",
  "Roberto Britto",
  "Júlia Faria",
  "Greta Faria",
  "João marcos Santiago",
  "Joao Pedro Santiago",
  "Antônio Costa",
  "Sidney Costa",
  "Francisco Leite",
  "Adriana Leite",
  "Fernando Pinto",
  "Saionara Pinto",
  "Gilberto Aguiar",
  "Silvana Aguiar",
  "Cristina Martins",
  "Gabriela Faria",
  "Flávio Faria",
  "Dirce Maria",
  "Ana Caroline Santos",
  "Gabriela Guedes",
  "Camilla Sardeiro",
  "Luma Sarra",
  "Rafael Dios",
  "Carolina muraki",
  "Beatriz muraki",
  "Samara Carvalho",
  "Manuela Martinez",
  "Fernanda Cardoso",
  "Rebeca Lopes",
  "Thaina Paiva",
  "Guilherme Andrade",
  "Vitor Costa",
  "Silvio Aguiar",
  "Joao Bagdal",
  "Wallace Eduardo",
  "Vicktoria valeska",
  "Giovana Della piazza",
  "Gabriela Cordeiro",
  "Mariana Lyrio",
  "Andy Sotnas",
  "Lorena marques",
  "Larissa Falcão",
  "Bia Goossens",
  "Juliana Feijó",
  "Jessica Theodoro",
  "Matheus Falcão",
  "Bruno Williens",
  "Eduardo Queiroz",
  "Mariana Chaves",
  "Cristina Chaves",
  "Sônia Chaves",
  "Gilka Conceição Xavier da Silveira",
  "Hiandra Pinheiro",
  "Gabriel Molina",
  "Virgínia Garrido",
].forEach((str) => {
  const lowerCased = str.toLowerCase();
  list.push(lowerCased);
});

const uniqueList = [...new Set(list)];

export async function confirmAttendance(
  data: z.infer<typeof ConfirmationSchema>
) {
  try {
    const validated = ConfirmationSchema.safeParse(data);
    if (!validated.success) throw new Error("Dados inválidos");

    const discord = new DiscordClient();

    const { name, coming, adults, children, email, phone, note } =
      validated.data;

    await drizzleClient()
      .insert(confirmationsTable)
      .values({
        name,
        coming: coming === "true",
        adults,
        children,
        email,
        phone,
        note,
      });

    await discord.sendEmbed({
      title: "Confirmation",
      color: 0x9dc4f5,
      fields: [
        {
          name: "Name",
          value: name,
        },
        {
          name: "Coming",
          value: coming === "true" ? "Yes" : "No",
        },
        {
          name: "Adults",
          value: adults.toString(),
        },
        {
          name: "Children",
          value: children.toString(),
        },
        {
          name: "Email",
          value: email,
        },
        {
          name: "Phone",
          value: phone,
        },
        {
          name: "Note",
          value: note ?? "N/A",
        },
      ],
    });

    return {
      success: true,
      message: "Presença confirmada com sucesso",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Ocorreu um erro ao confirmar a presença",
    };
  }
}

export async function submitPresent(data: z.infer<typeof PresentSchema>) {
  try {
    const validated = PresentSchema.safeParse(data);
    if (!validated.success) throw new Error("Dados inválidos");

    const { name, note } = validated.data;

    const splitName = name.toLowerCase();

    const isPresent = uniqueList.some((word) => splitName.includes(word));

    if (!isPresent) throw new Error("Nome não encontrado na lista");

    const db = await drizzleClient();
    const discord = new DiscordClient();
    await db.insert(presentsTable).values({
      name,
      note,
    });

    await discord.sendEmbed({
      title: "Present",
      color: 0x9dc4f5,
      fields: [
        {
          name: "Name",
          value: name,
        },
        {
          name: "Note",
          value: note ?? "N/A",
        },
      ],
    });

    return {
      success: true,
      message: "Recado enviado com sucesso",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Ocorreu um erro ao enviar o recado",
    };
  }
}
