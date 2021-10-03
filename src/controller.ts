/* eslint-disable class-methods-use-this */
import User from "./user";
import Session from "./session";

class Controller {
  async createUser(req: any, res: any) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getUserById(req: any, res: any) {
    try {
      const { id } = req.params;
      const user = await User.find({ id });
      res.json(user);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getUsersByRole(req: any, res: any) {
    try {
      const { role } = req.params;
      const user = await User.find({ role });
      res.json(user);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getUsersBySession(req: any, res: any) {
    try {
      const { sessionId } = req.params;
      const users = await User.find({ sessionId });
      res.json(users);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async deleteUser(req: any, res: any) {
    try {
      const { id } = req.params;
      const user = await User.findOneAndRemove({ id });
      res.json(user);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async deleteUsers(req: any, res: any) {
    try {
      const { sessionId } = req.params;
      const users = await User.deleteMany({ sessionId });
      res.json(users);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async createSession(req: any, res: any) {
    try {
      const session = await Session.create(req.body);
      res.json(session);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getSession(req: any, res: any) {
    try {
      const { sessionId } = req.params;
      const session = await Session.find({ sessionId });
      res.json(session);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async deleteSession(req: any, res: any) {
    try {
      const { sessionId } = req.params;
      const session = await Session.findOneAndRemove({ sessionId });
      res.json(session);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}
export default new Controller();
