
import express from 'express'
import passport from 'passport'

const router = express.Router()
import userController from "../../controllers/userController.js"
import jwt from 'jsonwebtoken'

router
    .get("/", userController.getAllUsers)
    .get("/id/:id", userController.getOneUserById)
    .get("/username/:username", userController.getOneUserByUsername)
    .post("/", userController.createUser)
    //.put("/:id", userController.updateUser)
    .delete("/:id", userController.deleteUser)



router
    .post('/auth/login', function (req, res, next) {
        passport.authenticate('local-login', function (err, user, info) {
            if (err) {
                return next(err);
            }
            if (!user) {
                return res.redirect('/login');
            }
            req.login(user, { session: false }, async (err) => {
                if (err) { return next(err); }
                const body = { id: user.id, username: user.username };
                const token = jwt.sign({ user: body }, process.env.SECRET, { expiresIn: '1h' });
                res.cookie("token", token, { httpOnly: false })
                return res.redirect('/profile');
            })
        })(req, res, next);
    })

    .post("/auth/register", passport.authenticate("local-register", {
        successRedirect: "/profile",
        failureRedirect: "/auth/register",
        passReqToCallback: true
    }))

    /*.get("/auth/logout", (req, res, next) => {
        req.logout()
        res.redirect("/auth/login")
    })
*/
    .post('/auth/logout', function (req, res) {
        req.logout(function (err) {
            if (err) { 
                return next(err); 
            }
            res.clearCookie('token')
            res.redirect('/login')
        })
    })

    .get("/profile", passport.authenticate("jwt", { session: false }), (req, res) => {
        res.json({
            message: "You are logged in",
            user: req.user,
            token: req.query.SECRET
        })
    }),


    router.use((req, res, next) => {
        isLoggedIn(req, res, next)
        next()
    })

const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next()
    }
    res.redirect("/auth/login")
}


export default router