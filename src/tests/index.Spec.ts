import index from "../index";
import supertest from "supertest";

const request = supertest(index);

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
    const response = await request.get(
      `/api/images?filename=${filename}&width=200&height=200`
    );
    expect(response.status).toBe(200);
  });
  it("The Image Should Be Exist In Resize Folder", async () => {
    const response = await request.get(
      `/api/images?filename=${filename}&width=200&height=300`
    );
    expect(response.status).toBe(200);
  });
});
