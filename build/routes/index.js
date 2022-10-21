"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const img_1 = __importDefault(require("./api/img"));
const routes = (0, express_1.Router)();
routes.get("/", (req, res) => {
    res.send("welcome");
});
routes.use("/api/images", img_1.default);
exports.default = routes;
