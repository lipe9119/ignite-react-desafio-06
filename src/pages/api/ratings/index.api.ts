import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { description, rate, user_id, book_id } = req.body;
    const rating = await prisma.rating.create({
      data: {
        description,
        rate,
        user_id,
        book_id,
      },
    });

    return res.status(201).json(rating);
  }

  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const ratings = await prisma.rating.findMany({
    orderBy: {
      created_at: "desc",
    },
    include: {
      user: true,
      book: true,
    },
  });

  return res.json(ratings);
}
