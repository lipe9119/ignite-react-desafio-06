import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const books = await prisma.book.findMany({
    orderBy: {
      ratings: {
        _count: "desc",
      },
    },
    take: 4,
    include: {
      ratings: {
        select: {
          rate: true,
        },
      },
    }
  });

  return res.json(books);
}
