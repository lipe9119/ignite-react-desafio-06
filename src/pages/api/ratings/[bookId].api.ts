import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const { bookId } = req.query;

  const ratings = await prisma.rating.findMany({
    where: {
      book_id: bookId as string,
    },
    orderBy: {
      created_at: "desc",
    },
    include: {
      user: true,
    },
  });

  return res.json(ratings);
}
