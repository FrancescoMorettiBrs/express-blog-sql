// IMPORTAZIONI //
import express from "express";
import router from "./routers/post.js";
import { routeNotFound } from "./middlewares/routeNotFound.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { loggingMiddleware } from "./middlewares/loggingMiddleware.js";

// Creo l'applicazione web con express //
const app = express();

// Definisco la porta //
const port = 3000;

// Rendo pubblici i contenuti della cartella "public" //
app.use(express.static("public"));
app.use(express.json())
// registrato a livello globale
app.use(loggingMiddleware)

app.get("/", (req, res) => {
  const resData = {
    data: "Benvenuto nel mio blog, qui parliamo solo ed esclusivamente di Calcio!",
  };
  res.json(resData);
});

app.use("/post", router);
// Registro un errore se la rotta non esiste
app.use(routeNotFound)
// Registrazione errore interno del server 
app.use(errorHandler);

// Invoco la funzione di ascolto //
app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`);
});
   