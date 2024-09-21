import { Response, Request } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getExpense = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const expenseByCatRaw = await prisma.expenseByCategory.findMany({
      orderBy: {
        date: "desc",
      },
    });

    const expenseByCategorySummary = expenseByCatRaw.map((item) => ({
      ...item,
      amount: item.amount.toString(),
    }));
    console.log(expenseByCategorySummary);
    res.json(expenseByCategorySummary);
  } catch (error) {
    res.status(500).json({ message: "Error in retrieving Expense data" });
  }
};
