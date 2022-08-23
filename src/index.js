import express from 'express'
import morgan from 'morgan'
import passport from 'passport'
import session from 'express-session'
import flash from 'connect-flash'
import dotenv from 'dotenv'
import cors from 'cors'
import path from 'path'
import cookieParser from 'cookie-parser'
import "./auth/locals.js"
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import v1UsersRoutes from './v1/routes/users.js'
import v1ProfilesRoutes from './v1/routes/profiles.js'
import v1PostsRoutes from './v1/routes/posts.js'
import v1FetchRoutes from './v1/routes/fetch.js'
import {checkTokenlogin, checkTokenprofile} from './middleware/checktoken.js'
import https from 'https'
import fs from 'fs'
import { createClient } from 'redis'

//Variables
dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const client = createClient({
    host: 'localhost',
    port: 6379
})

const options = {
    key: fs.readFileSync(path.join(__dirname, '..', 'key.key')),
    cert: fs.readFileSync(path.join(__dirname, '..', 'certificate.cer'))
}

//Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use(cookieParser())
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
app.use("/api/v1/fetch", v1FetchRoutes)
app.use(express.static('src'))
app.use('/public', express.static(__dirname+'/src'))

//Routes
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/register.html'))
})

app.get('/profile', checkTokenprofile, (req, res) => {
    res.sendFile(path.join(__dirname, '/public/profile.html'))
})

app.get('/login', checkTokenlogin, (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})



async function main() {
    await client.connect()
    https.createServer(options, app).listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    })
}

main()

export default client