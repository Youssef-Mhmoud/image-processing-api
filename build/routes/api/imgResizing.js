"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
const resizingImg = async (re) => {
    return await (0, sharp_1.default)(`./images/${re.filename}.jpg`)
        .resize({
        width: re.width,
        height: re.height,
    })
        .toFile(`./resize/${re.filename}-(${re.width} x ${re.height}).jpg`)
        .then(() => console.log("done..."));
};
exports.default = resizingImg;
