import express, { Express, Request, Response } from "express";

import { testDBConnection } from "./database/utils";

import indexRouter from "./routes/index";
import helloRouter from "./routes/hellos";

export async function createServer(): Promise<Express> {
  const server: Express = express();

  await testDBConnection(true);

  server.use(express.json());

  server.use("/", indexRouter);
  server.use("/hello-world", helloRouter);

  return server;
}
