import { Router, json } from "express";

import { UserController } from "../../controllers";

const currentDataRouter: Router = Router();

currentDataRouter.post("/", json(),  UserController.addCurrentData);

export {currentDataRouter};