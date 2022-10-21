import { Router } from "express";
import sharp from "sharp";
import fs from "fs-extra";
import path from "path";

const imgRoute = Router();

imgRoute.get("/", async (req, res) => {
  const filename = req.query.filename as string;
  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);

  const file = `/images/${filename}.jpg`;
  fs.pathExists(file, async (err, exists) => {
    if (!exists) {
      return res.status(404).send("Please Enter The (Filename) Correct");
    }

    if (isNaN(width) || width <= 0) {
      return res
        .status(404)
        .send("Please Enter The (Width) As A Correct Number");
    }

    if (isNaN(height) || height <= 0) {
      return res
        .status(404)
        .send("Please Enter The (Height) As A Correct Number");
    }

    await sharp(`./images/${filename}.jpg`)
      .resize({
        width: width,
        height: height,
      })
      .toFile(`./resize/${filename}-(${width} x ${height}).jpg`)
      .then(() => console.log("done..."));

    const imgloc =
      path.resolve("./") + `/resize/${filename}-(${width} x ${height}).jpg`;
    res.sendFile(imgloc);
  });
});

export default imgRoute;
