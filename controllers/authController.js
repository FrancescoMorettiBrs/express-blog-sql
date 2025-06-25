// import connection from "../db.js";

// const login = (req, res) => {
//   const { username, password } = req.body;
//   // Prelevare dalla richiesta username e password
//   // Controllare se username e password esistono nel database
//   // Se esistono ---> sei loggato
//   // Altrimenti: username o password sbagliati
//   const sql = `SELECT * FROM users WHERE username = ? AND password = ?`;

//   connection.query(sql, [username, password], (err, results) => {
//     if (results.length === 0) {
//       res.status(401).json({
//         data: "Errore di autenticazione",
//       });
//     } else {
//       res.json({
//         data: "Sei loggato",
//       });
//     }
//   });
// };

// export default { login };