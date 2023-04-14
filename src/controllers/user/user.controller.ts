import { EPLogger } from "../../utils";
import {Request, Response} from "express";

class UserController {

  private static instance: UserController;

  private constructor() {}

  public static generateSingleton(): void {
    if (!UserController.instance) {
      UserController.instance = new UserController();
    }
  }

  public static addCurrentData(req: Request, res: Response): void {
    EPLogger.info("llegado!!");
    res.send("holaa");
  }

}

UserController.generateSingleton();

export {UserController}