import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()



const getAllUsers = async () => {
    const users = await prisma.user.findMany()
    return users

}

const getOneUserById = async (id) => {
    const user = await prisma.user.findUnique({
        where: {
            id: Number.parseInt(id)
        }
    })
    return user
}

const getOneUserByUsername = async (username) => {
    const user = await prisma.user.findUnique({
        where: {
            username: username
        }
    })
    return user
}

const createUser = async (user) => {
    console.log(user)
    const newUser = await prisma.user.create({
        data: user
    })
    return newUser
}

const updateUser = async (id, user) => {
    const updatedUser = await prisma.user.update({
        where: {
            id: Number.parseInt(id)
        },
        data: user
    })
    return updatedUser
}

const deleteOneUser = async (id) => {
    const deletedUser = await prisma.user.delete({
        where: {
            id: Number.parseInt(id)
        }
    })
    return deletedUser
}

export default {
    getAllUsers,
    getOneUserById,
    getOneUserByUsername,
    createUser,
    updateUser,
    deleteOneUser
}