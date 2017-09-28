module.exports = router => ({req, res}) => {
    try {
        router(req).call(null, ({req, res}))
    } catch (e) {
        console.log(e.message)
        res.statusCode = 500; 
        res.end("Internal server error")
    }
}