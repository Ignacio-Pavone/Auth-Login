
import express from 'express'
import passport from 'passport'
const router = express.Router()
import userController from "../../controllers/userController.js"
router
    .get("/", userController.getAllUsers)
    .get("id/:id", userController.getOneUserById)
    .get("/username/:username", userController.getOneUserByUsername)
    .post("/", userController.createUser)
    //.put("/:id", userController.updateUser)
    .delete("/:id", userController.deleteUser)



router
    .post('/auth/login', function (req, res, next) {
        passport.authenticate('local-login', function (err, user, info) {
            if (err) { return next(err); 
            }
            if (!user) { 
                return res.redirect('/login'); 
            }
            return res.redirect('/profile');
        })(req, res, next);
    })

    .post("/auth/register", passport.authenticate("local-register", {
        successRedirect: "/profile",
        failureRedirect: "/auth/register",
        passReqToCallback: true
    }))

    .get("/auth/logout", (req, res, next) => {
        req.logout()
        res.redirect("/auth/login")
    })

    .get("/profile", (req, res, next) => {
        res.send("Profile page")
    })

router.use((req, res, next) => {
    isLoggedIn(req, res, next)
    next()
})

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect("/auth/login")
}


export default router