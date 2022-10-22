"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
const resizingImg = async (filename, width, height) => {
    await (0, sharp_1.default)(`./images/${filename}.jpg`)
        .resize({
        width: width,
        height: height,
    })
        .toFile(`./resize/${filename}-(${width} x ${height}).jpg`)
        .then(() => console.log("done..."));
};
exports.default = resizingImg;
