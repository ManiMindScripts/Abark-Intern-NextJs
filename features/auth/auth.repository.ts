import prisma from "@/lib/prisma";
import { RegisterDTO } from "./auth.dto";

export const createUser = async (data: RegisterDTO) => {
  return prisma.user.create({ data });
};

export const findUserByEmail = async (email: string) => {
  return prisma.user.findUnique({ where: { email } });
};