

import express from 'express'
import postController from '../../controllers/postController.js'
const router = express.Router()


router
    .get("/", postController.getAllPosts)
    .get("id/:id", postController.getOnePostById)
    .get("/username/:username", postController.getOnePostByUsername)
    .post("/", postController.createPost)
    //.put("/:id", postController.updateUser)
    .delete("/:id", postController.deletePost)

export default router