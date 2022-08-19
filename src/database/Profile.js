import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


const getAllProfiles = async () => {
    const profiles = await prisma.profile.findMany({
        include: {
            user:{
                select: { id: true, username: true, password: false }
            },
        },
    })
    return profiles
}

const getOneProfileById = async (id) => {
    const profile = await prisma.profile.findUnique({
        where: {
            id: Number.parseInt(id)
        },
        include: {
            user:{
                select: { id: true, username: true, password: false }
            },
           
        },
    })
    return profile
}

const getOneProfileByUsername = async (username) => {
    const profile = await prisma.profile.findUnique({
        where: {
            username: username
        },
        include: {
            user:{
                select: { id: true, username: true, password: false }
            },
            Post:{
                select: { title: true, content: true, author: true, username: true}
            }
        },
    })
    return profile
}

const createProfile = async (profile) => {
    console.log(profile)
    const newProfile = await prisma.profile.create({
        data: profile
    })
    return newProfile
}

const updateProfile = async (id, profile) => {
    const updatedProfile = await prisma.profile.update({
        where: {
            id: Number.parseInt(id)
        },
        data: profile
    })
    return updatedProfile
}

const deleteProfile = async (id) => {
    const deletedProfile = await prisma.profile.delete({
        where: {
            id: Number.parseInt(id)
        }
    })
    return deletedProfile
}

export default {
    getAllProfiles,
    getOneProfileById,
    getOneProfileByUsername,
    createProfile,
    updateProfile,
    deleteProfile
}