import sharp from "sharp";

type resizeFunc = {
  filename: string,
  width: number,
  height: number
}

const resizingImg = async (re: resizeFunc) => {
  await sharp(`./images/${re.filename}.jpg`)
    .resize({
      width: re.width,
      height: re.height,
    })
    .toFile(`./resize/${re.filename}-(${re.width} x ${re.height}).jpg`)
    .then(() => console.log("done..."));
};

export default resizingImg;
