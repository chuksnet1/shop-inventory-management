import { PrismaClient } from "@prisma/client";
import { create } from "domain";
import productData from "./prisma/seedData/products.json"
import Users from "./prisma/seedData/users.json"
import Expenses from "./prisma/seedData/expenses.json"
import Purchase from "./prisma/seedData/purchases.json"
import Salesdata from "./prisma/seedData/sales.json"
import expenseByCatgory from "./prisma/seedData/expenseByCategory.json"
import expenseSummary from "./prisma/seedData/expenseSummary.json"
import salesSummary from "./prisma/seedData/salesSummary.json"
import purchaseSummary from "./prisma/seedData/purchaseSummary.json"




const prisma = new PrismaClient();

async function main() {
    await prisma.expenseByCategory.deleteMany()
    const result1 = await prisma.expenseByCategory.createMany({
        data:  expenseByCatgory
    })
    console.log(result1)
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
