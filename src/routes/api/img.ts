import { Router } from "express";
import fs from "fs-extra";
import path from "path";
import resizingImg from "./imgResizing";

const imgRoute = Router();

imgRoute.get("/", async (req, res) => {
  const filename = req.query.filename as string;
  const width = +(req.query.width as string);
  const height = +(req.query.height as string);

  const file = `./images/${filename}.jpg`;
  fs.pathExists(file, async (_err, exists) => {
    if (!exists) {
      return res.status(404).send("Please Enter The (Filename) Correct");
    }

    if (isNaN(width) || width  <= 0) {
      return res
        .status(404)
        .send("Please Enter The (Width) As A Correct Number");
    }

    if (isNaN(height) || height <= 0) {
      return res
        .status(404)
        .send("Please Enter The (Height) As A Correct Number");
    }

    const fileExist = "./resize";
    fs.pathExists(fileExist, async (_err, exists: unknown) => {
      if (!exists) {
        return fs.mkdirSync(fileExist);
      }
    });

  await resizingImg(filename, width,  height);
  
  const imgloc =
    path.resolve("./") + `/resize/${filename}-(${width} x ${height}).jpg`;
    res.sendFile(imgloc);
});

});

export default imgRoute;
