import sharp from "sharp";

const resizingImg = async (filename: string, width: number, height: number) => {
  await sharp(`./images/${filename}.jpg`)
  .resize({
    width: width,
    height: height,
  })
  .toFile(`./resize/${filename}-(${width} x ${height}).jpg`)
  .then(() => console.log("done..."));
};

export default resizingImg;