import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const { userId } = req.query;

  const rating = await prisma.rating.findFirst({
    where: {
      user_id: userId as string,
    },
    orderBy: {
      created_at: "desc",
    },
    include: {
      book: true,
    },
  });

  return res.json(rating);
}
