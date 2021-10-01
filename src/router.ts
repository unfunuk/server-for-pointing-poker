import Router from "express";
import Controller from "./controller";

const router = Router();

router.post("/users", Controller.createUser);
router.get("/users", Controller.getUsers);
router.get("/users/id/:id", Controller.getUserById);
router.get("/users/session/:sessionId", Controller.getUsersBySession);
router.delete("/users/id/:id", Controller.deleteUser);
router.delete("/users", Controller.deleteUsers);
router.post("/session", Controller.createSession);
router.get("/session/:sessionId", Controller.getSession);
router.delete("/session/:sessionId", Controller.deleteSession);

export default router;
