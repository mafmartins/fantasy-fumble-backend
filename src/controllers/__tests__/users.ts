import request from "supertest";
import { Express } from "express-serve-static-core";

import { API_PREFIX } from "../../constants";
import { createServer } from "../../server";
import { User } from "../../models/user";

let server: Express;

beforeAll(async () => {
  server = await createServer();

  await User.create({
    username: "Alice",
    email: "alice@example",
  });
});

describe("GET /hello", () => {
  it("should return 200 & valid response if request param list is empty", (done) => {
    request(server)
      .get(`${API_PREFIX}/users`)
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toMatchObject([
          {
            createdAt: expect.any(String),
            email: "alice@example",
            id: 1,
            updatedAt: expect.any(String),
            username: "Alice",
          },
        ]);
        done();
      });
  });
});
