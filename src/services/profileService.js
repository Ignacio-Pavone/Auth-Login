import Profile from '../database/Profile.js';

const getAllProfiles = () => {
    const allProfiles = Profile.getAllProfiles()
    return allProfiles
}

const getOneProfileById = (id) => {
    const oneProfile = Profile.getOneProfileById(id)
    return oneProfile
}

const getOneProfileByUsername = (username) => {
    const oneProfile = Profile.getOneProfileByUsername(username)
    return oneProfile
}

const createProfile = (profile) => {
    const newProfile = Profile.createProfile(profile)
    return newProfile
}

const updateProfile = (id, profile) => {
    const updatedProfile = Profile.updateProfile(id, profile)
    return updatedProfile
}

const deleteProfile = (id) => {
    const deletedProfile = Profile.deleteProfile(id)
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