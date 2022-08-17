
export function checkToken (req,res,next){
    const token = req.cookies.token
    if (!token){
        return res.status(307).redirect("/login")
    }
    next()
}