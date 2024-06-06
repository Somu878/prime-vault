"use server";
import prisma from "@/_db";
import { handleError } from "../utils";

export async function createUser(user: CreateUserParams) {
  try {
    const newUser = await prisma.user.create({ data: user });
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
}
