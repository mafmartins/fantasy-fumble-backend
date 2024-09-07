import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

import { testDBConnection } from "./database/utils";

import indexRouter from "./routes/index";
import helloRouter from "./routes/hellos";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

testDBConnection(true);

app.use(express.json());

app.use("/", indexRouter);
app.use("/hello-world", helloRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
