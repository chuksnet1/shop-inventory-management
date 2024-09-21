import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type userProp = {
  req: Request;
  res: Response;
};
export const getUser = async ({ req, res }: userProp): Promise<void> => {
  try {
    const users = await prisma.users.findMany();
    res.status(200).json(users)
    console.log(users);
  } catch (error) {
    res.status(500).json({message: "Error retrieving value", error})
  }
};


