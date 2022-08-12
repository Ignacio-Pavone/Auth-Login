import userService from '../services/userService.js'

const getAllUsers = async (req, res) => {
    const users = await userService.getAllUsers()
    res.status(200).json(users)
}

const getOneUserById = async (req, res) => {
    const { id } = req.params
    const user = await userService.getOneUserById(id)
    res.status(200).json(user)
}

const getOneUserByUsername = async (req, res) => {
    const {username}  = req.params
    const user = await userService.getOneUserByUsername(username)
    res.status(200).json(user)
}

/*

const createUser = async (req, res) => {
    const {username,password,fullname,age,email,createdAt} = req.body
    if (!username || !password || !fullname || !age || !email) {
        res.status(400).json({
            message: 'Missing required fields'
        })
    }
    const newUser = {
        username,
        password,
        fullname,
        age,
        email,
        createdAt
    }
    const createdUser = await userService.createUser(newUser)
    res.status(201).json(createdUser)
    
}
*/

const createUser = async (req, res) => {
    const user = req.body
    const newUser = await userService.createUser(user)
    res.status(201).json(newUser)
}

/*
const updateUser = async (req, res) => {
    const {id} = req.params
    const {username,password,fullname,age,email,createdAt} = req.body
    if ((username || createdAt || email) || (!password && !fullname && !age)){
        res.status(400).json({
            message: 'Missing required fields or invalid fields'
        })
    }
    const newUser = {
        username,
        password,
        fullname,
        age,
        email,
        createdAt
    }
    const updatedUser = await userService.updateUser(id, newUser)
    res.status(200).json(updatedUser)
}
    
*/

const deleteUser = async (req, res) => {
    const { id } = req.params
    const user = await userService.deleteUser(id)
    res.status(200).json(user)
}

export default {
    getAllUsers,
    getOneUserById,
    getOneUserByUsername,
    createUser,
    //updateUser,
    deleteUser
}