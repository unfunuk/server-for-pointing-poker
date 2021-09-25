import Router from "express";
import Controller from "./controller";

const router = Router();

router.post("/users", Controller.createUser);
router.get("/users", Controller.getUsers);
router.get("/users/:id", Controller.getUser);
router.delete("/users/:id", Controller.deleteUser);
router.delete("/users", Controller.deleteUsers);

export default router;
