import Post from '../database/Post.js'

const getAllPosts = () => {
    const allPosts = Post.getAllPosts()
    return allPosts
}

const getOnePostById = (id) => {
    const onePost = Post.getOnePostById(id)
    return onePost
}

const getOnePostByUsername = (username) => {
    const onePost = Post.getOnePostByUsername(username)
    return onePost
}

const createPost = (post) => {
    const newPost = Post.createPost(post)
    return newPost
}

const updatePost = (id, post) => {
    const updatedPost = Post.updatePost(id, post)
    return updatedPost
}

const deletePost = (id) => {
    const deletedPost = Post.deletePost(id)
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

