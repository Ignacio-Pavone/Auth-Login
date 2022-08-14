import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const getAllPosts = async () => {
    const posts = await prisma.post.findMany({
        include: {
            author: true
        },
    })
    return posts
}

const getOnePostById = async (id) => {
    const post = await prisma.post.findUnique({
        where: {
            id: Number.parseInt(id)
        },
        include: {
            author: true
        }
    })
    return post
}

const getOnePostByUsername = async (username) => {
    const post = await prisma.post.findUnique({
        where: {
            username: username
        },
        include: {
            author: true
        }
    })
    return post
}

const createPost = async (post) => {
    const newPost = await prisma.post.create({
        data: post, 
        include:{
            author: true
        }
    })
    return newPost
}

const updatePost = async (id, post) => {
    const updatedPost = await prisma.post.update({
        where: {
            id: Number.parseInt(id)
        },
        data: post
    })
    return updatedPost
}

const deletePost = async (id) => {
    const deletedPost = await prisma.post.delete({
        where: {
            id: Number.parseInt(id)
        }
    })
    return deletedPost
}

export default {
    getAllPosts,
    getOnePostById,
    getOnePostByUsername,
    createPost,
    updatePost,
    deletePost
}