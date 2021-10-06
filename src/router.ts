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
router.get("/session/:sessionId", Controller.getSession);
router.delete("/session/:sessionId", Controller.deleteSession);
router.put("/session/:sessionId", Controller.editSession);
router.post("/issues", Controller.createIssue);
router.get("/issues/session/:sessionId", Controller.getIssues);
router.get("/issues/id/:id", Controller.getIssue);
router.put("/issues/id/:id", Controller.editIssue);
router.delete("/issues/id/:id", Controller.deleteIssueById);
router.delete("/issues/session/:sessionId", Controller.deleteIssues);
router.post("/cards", Controller.createCard);
router.get("/cards/session/:sessionId", Controller.getCards);
router.delete("/cards/session/:sessionId", Controller.deleteCards);
router.delete("/cards/id/:id", Controller.deleteCardById);

export default router;
