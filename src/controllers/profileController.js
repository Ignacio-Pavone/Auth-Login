import profileService from "../services/profileService.js";


const getAllProfiles = async (req, res) => {
    const profiles = await profileService.getAllProfiles()
    res.status(200).json(profiles)
}

const getOneProfileById = async (req, res) => {
    const { id } = req.params
    const profile = await profileService.getOneProfileById(id)
    res.status(200).json(profile)
}

const getOneProfileByUsername = async (req, res) => {
    const { username } = req.params
    const profile = await profileService.getOneProfileByUsername(username)
    res.status(200).json(profile)
}

const createProfile = async (req, res) => {
    const {fullname,description,age,username} = req.body
    if (!fullname || !description || !age || !username) {
        res.status(400).json({
            message: 'Missing required fields'
        })
    }
    const newProfile = {
        fullname,
        description,
        age,
        username
    }
    const createdProfile = await profileService.createProfile(newProfile)
    res.status(201).json(createProfile)
}

const updateProfile = async (req, res) => {
    const { id } = req.params
    const profile = req.body
    const updatedProfile = await profileService.updateProfile(id, profile)
    res.status(200).json(updatedProfile)
}

const deleteProfile = async (req, res) => {
    const { id } = req.params
    const deletedProfile = await profileService.deleteProfile(id)
    res.status(200).json(deletedProfile)
}

export default {
    getAllProfiles,
    getOneProfileById,
    getOneProfileByUsername,
    createProfile,
    updateProfile,
    deleteProfile
}