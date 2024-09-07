import request from "supertest";
import { Express } from "express-serve-static-core";

import { createServer } from "../../server";

let server: Express;

beforeAll(async () => {
  server = await createServer();
});

describe("GET /hello", () => {
  it("should return 200 & valid response if request param list is empty", (done) => {
    request(server)
      .get(`/hello-world`)
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toMatchObject({ message: "Hello, World!" });
        done();
      });
  });
});
