import {Request, Response} from "express";
import { UserService } from "../../services";

class UserController {

  private static instance: UserController;

  private constructor() {}

  public static generateSingleton(): void {
    if (!UserController.instance) {
      UserController.instance = new UserController();
    }
  }

  public static addCurrentData(req: Request, res: Response): void {
    // add type check for request body

    UserService.saveCurrentData(req.body)
    .then(() => {
      res.send("Data added");
    })
    .catch(() => {
      res.status(500).send();
    });
  }

}

UserController.generateSingleton();

export {UserController}