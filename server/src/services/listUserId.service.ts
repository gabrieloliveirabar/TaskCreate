import { prisma } from "../lib/prisma";

export const listUserIdService = async (id: string) => {
    
    const user = await prisma.user.findUnique({
        where: {
            id: id
        }
    })

    return user
}