import logger from "../lib/logging";
import dBConnection from "./connection";

export const testDBConnection = async (exitApp: Boolean = false) => {
  try {
    await dBConnection.authenticate();
    await dBConnection.sync();
    logger.info("Connection has been established successfully.");
  } catch (error) {
    logger.error("Unable to connect to the database:", error);
    exitApp && process.exit();
  }
};
