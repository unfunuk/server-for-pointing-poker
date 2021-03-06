/* eslint-disable class-methods-use-this */
import User from "./user";
import Session from "./session";
import Issues from "./issues";
import Cards from "./cards";

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

  async editSession(req: any, res: any) {
    try {
      const { sessionId } = req.params;
      const session = await Session.findOneAndUpdate({ sessionId }, req.body);
      res.json(session);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async createIssue(req: any, res: any) {
    try {
      const issue = await Issues.create(req.body);
      res.json(issue);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async deleteIssueById(req: any, res: any) {
    try {
      const { id } = req.params;
      const issue = await Issues.findOneAndRemove({ id });
      res.json(issue);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async deleteIssues(req: any, res: any) {
    try {
      const { sessionId } = req.params;
      const issues = await Issues.deleteMany({ sessionId });
      res.json(issues);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getIssues(req: any, res: any) {
    try {
      const { sessionId } = req.params;
      const issues = await Issues.find({ sessionId });
      res.json(issues);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getIssue(req: any, res: any) {
    try {
      const { id } = req.params;
      const issue = await Issues.find({ id });
      res.json(issue);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async editIssue(req: any, res: any) {
    try {
      const { id } = req.params;
      const issue = await Issues.findOneAndUpdate({ id }, req.body, {
        new: true,
      });
      res.json(issue);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getCards(req: any, res: any) {
    try {
      const { sessionId } = req.params;
      const cards = await Cards.find({ sessionId });
      res.json(cards);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async deleteCardById(req: any, res: any) {
    try {
      const { id } = req.params;
      const card = await Cards.findOneAndRemove({ id });
      res.json(card);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async deleteCards(req: any, res: any) {
    try {
      const { sessionId } = req.params;
      const cards = await Cards.deleteMany({ sessionId });
      res.json(cards);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async createCard(req: any, res: any) {
    try {
      const card = await Cards.create(req.body);
      res.json(card);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}
export default new Controller();
