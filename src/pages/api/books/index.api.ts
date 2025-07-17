import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  let { category, search } = req.query;

  category = Array.isArray(category) ? category[0] : category === "" ? undefined : category;
  search = Array.isArray(search) ? search[0] : search === "" ? undefined : search;

  const books = await prisma.book.findMany({
    where: {
      ...(category && {
        categories: {
          some: {
            category: {
              id: category,
            },
          },
        },
      }),
      ...(search && {
        OR: [
          {
            name: {
              contains: search,
            },
          },
          {
            author: {
              contains: search,
            },
          },
        ],
      }),
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
