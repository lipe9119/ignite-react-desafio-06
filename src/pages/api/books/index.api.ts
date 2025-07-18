import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  let { category, search, userId } = req.query;

  category = Array.isArray(category) ? category[0] : category === "" ? undefined : category;
  search = Array.isArray(search) ? search[0] : search === "" ? undefined : search;
  userId = Array.isArray(userId) ? userId[0] : userId === "" ? undefined : userId;

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
      categories: {
        select: {
          category: true,
        },
      },
      ratings: {
        select: {
          rate: true,
        },
      },
    },
  });

  let formattedBooks = books.map((book) => {
    return {
      ...book,
      categories: book.categories.map((category) => category.category),
      lido: false,
    };
  });

  if (userId) {
    const ratings = await prisma.rating.findMany({
      where: {
        user_id: userId,
      },
      select: {
        book: {
          select: {
            name: true,
          },
        },
      },
    });

    formattedBooks = formattedBooks.map((book) => {
      const rating = ratings.find((rating) => rating.book.name === book.name);
      if (rating) {
        book.lido = true;
      }
      return book;
    });
  }

  return res.json(formattedBooks);
}
