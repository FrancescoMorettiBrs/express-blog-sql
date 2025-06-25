// QUI importo la logica delle funzioni dal controller //
import express from "express";
import { postController } from "../controllers/postsController.js";
import { checkPostExistMiddleware } from "../middlewares/checkPostExistMiddleware.js";

// Creo il router //
const router = express.Router();

// INDEX//
router.get("/", postController.index);
// SHOW //
router.get("/:id", checkPostExistMiddleware, postController.show);
// STORE //
router.post("/", postController.store);
// UPDATE //
router.put("/:id", checkPostExistMiddleware, postController.update);
// DESTROY //
router.delete("/:id", checkPostExistMiddleware, postController.destroy);

export default router;
