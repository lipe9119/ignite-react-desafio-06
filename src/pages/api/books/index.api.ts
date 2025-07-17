import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const { category } = req.query;

  const books = await prisma.book.findMany({
    where: {
      categories: {
        some: {
          category: {
            id: Array.isArray(category) ? category[0] : category === "" ? undefined : category,
          },
        },
      },
    },
    include: {
      categories: true,
      ratings: {
        select: {
          rate: true,
        },
      },
    },
  });

  return res.json(books);
}
