function errorHandler (err, req, res, next) {
    // Imposto lo status 500 che è l'errore interno al server
    res.status(500);
    res.json({
        error: "errore interno del server"
    })
}
export {errorHandler}