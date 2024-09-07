import express, { Express, Request, Response } from "express";

import { API_PREFIX } from "./constants";
import { initModels } from "./models";
import { testDBConnection } from "./database/utils";

import indexRouter from "./routes/index";
import usersRouter from "./routes/users";

export async function createServer(): Promise<Express> {
  const server: Express = express();

  await testDBConnection(true);
  await initModels();

  server.use(express.json());

  server.use(`${API_PREFIX}/`, indexRouter);
  server.use(`${API_PREFIX}/users`, usersRouter);

  return server;
}
