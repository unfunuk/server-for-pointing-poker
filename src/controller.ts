/* eslint-disable class-methods-use-this */
import User from "./user";

class Controller {
  async createUser(req: any, res: any) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getUsers(req: any, res: any) {
    try {
      const user = await User.find();
      res.json(user);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getUser(req: any, res: any) {
    try {
      const { id } = req.params;
      const user = await User.find({ id });
      res.json(user);
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
      const users = await User.deleteMany({});
      res.json(users);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}
export default new Controller();
