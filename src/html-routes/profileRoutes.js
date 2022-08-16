
import path from 'path'
import express from 'express'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const router = express.Router()
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


router
.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname,'../public/register.html'))
})

export default router