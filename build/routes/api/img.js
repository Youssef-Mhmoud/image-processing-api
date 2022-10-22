"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const imgResizing_1 = __importDefault(require("./imgResizing"));
const imgRoute = (0, express_1.Router)();
imgRoute.get("/", async (req, res) => {
    const filename = req.query.filename;
    const width = +req.query.width;
    const height = +req.query.height;
    const file = `./images/${filename}.jpg`;
    fs_extra_1.default.pathExists(file, async (_err, exists) => {
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
        const fileExist = "./resize";
        fs_extra_1.default.pathExists(fileExist, async (_err, exists) => {
            if (!exists) {
                return fs_extra_1.default.mkdirSync(fileExist);
            }
        });
        const imgloc = path_1.default.resolve("./") + `/resize/${filename}-(${width} x ${height}).jpg`;
        fs_extra_1.default.pathExists(imgloc, async (_err, exists) => {
            if (exists) {
                return res.sendFile(imgloc);
            }
            else {
                await (0, imgResizing_1.default)({ filename, width, height });
                res.sendFile(imgloc);
            }
        });
    });
});
exports.default = imgRoute;
