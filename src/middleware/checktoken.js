export function checkTokenprofile(req, res, next) {
    const token = req.cookies.token
    if (!token) {
        return res.status(307).redirect("/login")
    }
    next()
}

export function checkTokenlogin(req, res, next) {
    const token = req.cookies.token
    if (token) {
        return res.status(307).redirect("/profile")
    }
    next()
}