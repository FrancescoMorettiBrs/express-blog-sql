// utile per fare debug
function loggingMiddleware(req, res, next) {
  const url = req.originalUrl;
  const time = new Date().toLocaleString("IT")
  console.log(`${url} in ${time}`);
  // invoco la funzione che manda la richiesta alla funzione successiva
  next();
}

export { loggingMiddleware };
