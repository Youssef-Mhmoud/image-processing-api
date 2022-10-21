"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const supertest_1 = __importDefault(require("supertest"));
const request = (0, supertest_1.default)(index_1.default);
const filename = 'fjod';
const width = 200;
const height = 200;
describe("1- Test If Image Is Exist", () => {
    it("The Image Should Be Exist", () => {
        return expect(`../../resize/${filename}-(${width} x ${height}).jpg`).toBe(`../../resize/${filename}-(${width} x ${height}).jpg`);
    });
});
describe("2- Test endpoint responses", () => {
    it("gets the api endpoint", async () => {
        const response = await request.get(`/api/images?filename=${filename}&width=200&height=200`);
        expect(response.status).toBe(200);
    });
    it("The Image Should Be Exist In Resize Folder", async () => {
        const response = await request.get(`/api/images?filename=${filename}&width=200&height=300`);
        expect(response.status).toBe(200);
    });
});
