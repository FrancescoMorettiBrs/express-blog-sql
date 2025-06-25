function routeNotFound (req, res, next) {
    res.status(404);
    res.json({
        error: "Not found"
    })
}
export {routeNotFound};