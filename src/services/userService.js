import User from '../database/User.js';


const getAllUsers = () =>{
    const allUsers = User.getAllUsers()
    return allUsers
}

const getOneUserById = (id) =>{
    const oneUser = User.getOneUserById(id)
    return oneUser
}

const getOneUserByUsername = (username) =>{
    const oneUser = User.getOneUserByUsername(username)
    return oneUser
}

const createUser = (user) => {
    const newUser = User.createUser(user)
    return newUser
}

const updateOneUser = (id, user) => {
    const updatedUser = User.updateOneUser(id, user)
    return updatedUser
}

const deleteOneUser = (id) => {
    const deletedUser = User.deleteOneUser(id)
    return deletedUser
}

export default {
    getAllUsers,
    getOneUserById,
    getOneUserByUsername,
    createUser,
    updateOneUser,
    deleteOneUser
}