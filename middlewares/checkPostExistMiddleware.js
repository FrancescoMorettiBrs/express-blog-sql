import { posts } from "../data.js";

function checkPostExistMiddleware(req, res, next) {
  // Prelevo id del post da trovare dalla req
  const postId = req.params.id;
  // Trovo l'indice del post
  const postIndex = posts.findIndex((curPost) => postId === curPost.id);
  // Se l'indice è - 1
  if (postIndex === -1) {
    // Invio la risposta error 404 e mi fermo
    res.status(404);
    return res.json({
      error: "Post non trovato: risposta da middleware",
    });
  } else {
    // Altrimenti
    // Salvo l'indice della post nella richiesta
    req.postIndex = postIndex;
  }
  // Invoco next()
  next();
}

export { checkPostExistMiddleware };
