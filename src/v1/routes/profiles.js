import express from 'express'
const router = express.Router()
import profileController from "../../controllers/profileController.js"


router
    .get("/", profileController.getAllProfiles)
    .get("/id/:id", profileController.getOneProfileById)
    .get("/username/:username", profileController.getOneProfileByUsername)
    .post("/", profileController.createProfile)
    //.put("/:id", profileController.updateUser)
    .delete("/:id", profileController.deleteProfile)

    export default router