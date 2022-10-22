import index from "../index";
import supertest from "supertest";
import resizingImg from "../routes/api/imgResizing";

const request = supertest(index);

const filename = "fjord";
const width = 200;
const height = 200;

describe("1- Test If Image Is Exist", () => {
  it("The Image Should Be Exist", async () => {
    return expect(await resizingImg({filename, width, height})).toBeUndefined();
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
