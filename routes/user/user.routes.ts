import { Router } from "express";

import { UserController } from "../../controllers";

const currentDataRouter: Router = Router();

currentDataRouter.get("/", UserController.addCurrentData);

export {currentDataRouter};