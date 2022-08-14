import postService from "../services/postService.js";

const getAllPosts = async (req, res) => {
    const posts = await postService.getAllPosts()
    res.status(200).json(posts)
}

const getOnePostById = async (req, res) => {
    const { id } = req.params
    const post = await postService.getOnePostById(id)
    res.status(200).json(post)
}

const getOnePostByUsername = async (req, res) => {
    const { username } = req.params
    const post = await postService.getOnePostByUsername(username)
    res.status(200).json(post)
}

const createPost = async (req, res) => {
    const {title,content,username} = req.body
    if (!title || !content || !username) {
        res.status(400).json({
            message: 'Missing required fields'
        })
    }
    const newPost = {
        title,
        content,
        username
    }
    const createdPost = await postService.createPost(newPost)
    res.status(201).json(createdPost)
}

/*
const updatePost = async (req, res) => {
    const { id } = req.params
    const post = req.body
    const updatedPost = await postService.updatePost(id, post)
    res.status(200).json(updatedPost)
}
*/

const deletePost = async (req, res) => {
    const { id } = req.params
    const deletedPost = await postService.deletePost(id)
    res.status(200).json(deletedPost)
}

export default {
    getAllPosts,
    getOnePostById,
    getOnePostByUsername,
    createPost,
    //updatePost,
    deletePost
}
