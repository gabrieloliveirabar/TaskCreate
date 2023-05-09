import { prisma } from "../lib/prisma"


export const listUserService = async () => {
    const users = await prisma.user.findMany()

    return users
}