import Router from "express";
import Controller from "./controller";

const router = Router();

router.post("/users", Controller.createUser);
router.get("/users/id/:id", Controller.getUserById);
router.get("/users/session/:sessionId", Controller.getUsersBySession);
router.get("/users/role/:role", Controller.getUsersByRole);
router.delete("/users/id/:id", Controller.deleteUser);
router.delete("/users/session/:sessionId", Controller.deleteUsers);
router.post("/sessions", Controller.createSession);
router.get("/sessions/:sessionId", Controller.getSession);
router.delete("/sessions/:sessionId", Controller.deleteSession);

export default router;
