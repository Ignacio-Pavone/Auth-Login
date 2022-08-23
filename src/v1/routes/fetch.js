import express from 'express'
const router = express.Router()
import  fetchController  from '../../controllers/fetchController.js'


router.get("/id/:id", fetchController.fetchFromWebpage)

export default router