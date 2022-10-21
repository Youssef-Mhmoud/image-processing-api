"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sharp_1 = __importDefault(require("sharp"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const imgRoute = (0, express_1.Router)();
imgRoute.get("/", async (req, res) => {
    const filename = req.query.filename;
    const width = parseInt(req.query.width);
    const height = parseInt(req.query.height);
    const file = `/images/${filename}.jpg`;
    fs_extra_1.default.pathExists(file, async (err, exists) => {
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
        await (0, sharp_1.default)(`./images/${filename}.jpg`)
            .resize({
            width: width,
            height: height,
        })
            .toFile(`./resize/${filename}-(${width} x ${height}).jpg`)
            .then(() => console.log("done..."));
        const imgloc = path_1.default.resolve("./") + `/resize/${filename}-(${width} x ${height}).jpg`;
        res.sendFile(imgloc);
    });
});
exports.default = imgRoute;
