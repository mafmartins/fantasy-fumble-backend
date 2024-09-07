import dotenv from "dotenv";

import { createServer } from "./server";

dotenv.config();

createServer()
  .then((server) => {
    const port = process.env.PORT || 3000;

    server.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error(`Error: ${err}`);
  });
