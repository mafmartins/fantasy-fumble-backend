import dBConn from "../src/database/connection";
afterAll(() => dBConn.close());
