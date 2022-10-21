import express from "express";
import routes from "./routes";

const app = express();
const port = 3000;

app.use(routes);

app.listen(port, () => {
  console.log("This port is listning http://localhost:3000");
});

export default app;
