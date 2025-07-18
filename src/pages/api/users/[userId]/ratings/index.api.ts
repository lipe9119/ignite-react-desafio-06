import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const { userId } = req.query;
  let search = req.query.search;

  search = Array.isArray(search) ? search[0] : search === "" ? undefined : search;

  const ratings = await prisma.rating.findMany({
    where: {
      user_id: userId as string,
      ...(search && {
        book: {
          name: {
            contains: search,
          },
        },
      }),
    },
    orderBy: {
      created_at: "desc",
    },
    include: {
      book: true,
    },
  });

  return res.json(ratings);
}
