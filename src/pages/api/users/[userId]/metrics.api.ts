import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

interface Book {
  id: string;
  created_at: Date;
  name: string;
  author: string;
  summary: string;
  cover_url: string;
  total_pages: number;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const { userId } = req.query;

  const ratings = await prisma.rating.findMany({
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

  if (!ratings.length) {
    return res.json({
      readedPages: 0,
      booksRated: 0,
      authorsReaded: 0,
      mostCategoryReaded: 0,
    });
  }

  const categoriesPromise = await Promise.all(
    ratings.map(async (rate) => {
      const categories = await prisma.categoriesOnBooks.findMany({
        where: {
          book_id: rate.book_id,
        },
        include: {
          category: true,
        },
      });

      return categories.map((category) => {
        return category.category.name;
      });
    })
  );
  const categories = categoriesPromise.reduce((acc, category) => {
    return [...acc, ...category];
  }, [] as string[]);

  const books = ratings.reduce((acc, rating) => {
    if (!acc.some((book) => book.id === rating.book.id)) return [...acc, rating.book];

    return acc;
  }, [] as Book[]);

  const booksReaded = books.reduce((acc, book) => {
    return acc + book.total_pages;
  }, 0);

  const authorsReaded = ratings.reduce((acc, rating) => {
    if (!acc.includes(rating.book.author)) {
      return [...acc, rating.book.author];
    }
    return acc;
  }, [] as string[]);

  const { category: mostCategoryReaded } = categories.reduce(
    (acc, category) => {
      const count = categories.filter((c) => c === category).length;
      if (count > acc.count) {
        return { count: count, category };
      }
      return acc;
    },
    { category: "", count: 0 }
  );

  return res.json({
    readedPages: booksReaded,
    booksRated: books.length,
    authorsReaded: authorsReaded.length,
    mostCategoryReaded: mostCategoryReaded,
  });
}
