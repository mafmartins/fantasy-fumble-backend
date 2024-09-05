import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

import { testDBConnection } from "./database/utils";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

testDBConnection(true);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
