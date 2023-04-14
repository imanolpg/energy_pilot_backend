
class UserService {

  private static instance: UserService;

  private constructor() {}

  public static generateSingleton(): void {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }
  }

}

UserService.generateSingleton();

export {
  UserService
}