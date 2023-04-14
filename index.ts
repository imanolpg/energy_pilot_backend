import express, {Express, Request, Response} from "express";
import {router} from "./src/routes";

const port = 8000;
const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Server alive!");
});

app.use("/api", router);

app.listen(port, () => {
  console.log("listening on port " + port);
});