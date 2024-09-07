import dBConn from "../src/database/connection";
afterAll(async () => {
  await dBConn.drop();
  await dBConn.close();
});
