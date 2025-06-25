// QUI imposto la logica delle funzioni per poi esportare nelle routes //
// Importo il mio array dal file data.js //
import { posts } from "../data.js";
import { checkPostExistMiddleware } from "../middlewares/checkPostExistMiddleware.js";
import connection from "../db.js";
// Creo una function per l'error 404 che si ripete più volte //
// const sendNotFound = (res) => {
//   res.status(404);
//   return res.json({
//     error: "Post non trovato",
//   });
// };

// INDEX: lettura di tutti i post //
const index = (req, res) => {
  const sql = "SELECT * FROM posts";
  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: "Database query failed" });

    res.status(200).json({
      data: results,
    });

    console.log(results); // facoltativo, per debug
  });
};

// SHOW: lettura di un singolo post //
const show = (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM posts WHERE id = ?";

  connection.query(sql, [id], (err, results) => {
    if (results.length === 0) {
      res.status(404).json({
        error: "Post non trovato",
      });
    } else {
      res.json({
        data: results,
      });
    }
  });
};
// STORE: creazione di un post //
const store = (req, res) => {
  const newPost = req.body;
  const lastPost = parseInt(posts[posts.length - 1].id);
  newPost.id = (lastPost + 1).toString();
  posts.push(newPost);
  console.log(newPost);

  res.status(201);
  res.json({
    data: newPost,
  });
};
// UPDATE: modifica di un post //
const update = (req, res) => {
  const updatedPostData = req.body;
  const post = posts[req.postIndex];

  post.titolo = updatedPostData.titolo;
  post.contenuto = updatedPostData.contenuto;
  post.tags = updatedPostData.tags;
  post.immagine = updatedPostData.immagine;
  console.log(post);

  res.json({
    data: post,
  });
};
// DESTROY: cancellazione di un post //
const destroy = (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM posts WHERE id = ?";

  connection.query(sql, [id], (err, results) => {
    if (err) {
      console.log("Errore");
    } else {
      console.log(results);
      res.sendStatus(204);
    }
  });
};

// creo un oggetto che comprende tutte le mie funzioni e lo esporto //
const postController = {
  index,
  show,
  store,
  update,
  destroy,
};

export { postController };
