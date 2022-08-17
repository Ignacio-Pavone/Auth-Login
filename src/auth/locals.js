import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import User from "../database/User.js";
import { Strategy as JWTStrategy } from "passport-jwt";
import { ExtractJwt as ExtractJwt } from "passport-jwt";
import bcrypt from "bcrypt";

passport.serializeUser((user, done) => {
    done(null, user.username)
})

passport.deserializeUser(async (username, done) => {
    const user = await User.getOneUserByUsername(username)
    done(null, user)
})

const generateHash = (password) => {
    const hash = bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
    return hash
}

const validatePassword = function (password, userpass) {
    return bcrypt.compareSync(password, userpass)
}


passport.use('local-register', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
},
    async (req, username, password, done) => {
        const thereIsUser = await User.getOneUserByUsername(username)
        if (thereIsUser) {
            return done(null, false, {})
        } else {
            const newUser = {
                username: username,
                password: generateHash(password)
            }

            await User.createUser(newUser)
            done(null, newUser)
        }
    }))

passport.use('local-login', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, username, password, done) => {
    const user = await User.getOneUserByUsername(username)
    if (!user) {
        return done(null, false, {})
    }
    const chek = validatePassword(password, user.password)
    console.log(chek)
    if (!chek) {
        return done(null, false, {})
    }
    done(null, user)
}))

passport.use(new JWTStrategy({
    secretOrKey: process.env.SECRET,
    jwtFromRequest: ExtractJwt.fromUrlQueryParameter('secret_token')
}, async (token, done) => {
    try {
        return done(null, token)
    } catch (err) {
        return done(err)
    }
}))


export default passport