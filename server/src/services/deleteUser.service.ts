import { prisma } from "../lib/prisma";

export const deleteUserService = async (id: string) => {
    
    const deleteUser = await prisma.user.delete({
        where: {
            id:id
        }
    })

    return deleteUser
}