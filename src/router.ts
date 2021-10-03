import Router from "express";
import Controller from "./controller";

const router = Router();

router.post("/users", Controller.createUser);
router.get("/users/id/:id", Controller.getUserById);
router.get("/users/session/:sessionId", Controller.getUsersBySession);
router.get("/users/role/:role", Controller.getUsersByRole);
router.delete("/users/id/:id", Controller.deleteUser);
router.delete("/users/session/:sessionId", Controller.deleteUsers);
router.post("/session", Controller.createSession);
router.get("/session/session/:sessionId", Controller.getSession);
router.delete("/session/session/:sessionId", Controller.deleteSession);

export default router;
