import express from "express";
import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Brisighella1",
  database: "blog_db",
});
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL!");
});

export default connection;
