import { Router } from "express";
import imgRoute from "./api/img";

const routes = Router();

routes.get("/", (req, res) => {
  res.send("welcome");
});

routes.use("/api/images", imgRoute);

export default routes;
