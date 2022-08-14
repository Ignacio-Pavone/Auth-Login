import express from 'express'
import morgan from 'morgan'
import passport from 'passport'
import session from 'express-session'
import flash from 'connect-flash'
import dotenv from 'dotenv'
import cors from 'cors'
import path from 'path'
import "./auth/locals.js"
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import v1UsersRoutes from './v1/routes/users.js'
import v1ProfilesRoutes from './v1/routes/profiles.js'
import v1PostsRoutes from './v1/routes/posts.js'

import register from './html-routes/indexRoutes.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use(flash())
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use("/api/v1/users", v1UsersRoutes)
app.use("/api/v1/profiles", v1ProfilesRoutes)
app.use("/api/v1/posts", v1PostsRoutes)
app.use('/register', register)


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/css/style.css'))
})

app.get('/cssprofile', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/css/profile.css'))
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/register.html'))
})

app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/profile.html'))
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})