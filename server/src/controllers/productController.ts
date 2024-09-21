import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { request } from "node:http";

const prisma = new PrismaClient();

export const getProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const search = req.query.search?.toString();
    const products = await prisma.products.findMany({
      where: {
        name: {
          contains: search,
        },
      },
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "No data was retrieved", error });
  }
};

export const createProducts = async (req: Request, res: Response) => {
  try {
    const { productId, name, price, rating, stockQuantity } = req.body;

    const product = await prisma.products.create({
      data: {
        productId,
        name,
        price,
        stockQuantity,
        rating,
      },
    });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "error creating product" });
  }
};
