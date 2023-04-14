import { Json } from "sequelize/types/utils";

class UserService {

  private static instance: UserService;

  private constructor() {}

  public static generateSingleton(): void {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }
  }

  public static async saveCurrentData(currentData: Json): Promise<void> {
    console.log(currentData);
  }

}

UserService.generateSingleton();

export {
  UserService
}