import path from "path";
import dotenv from "dotenv";

dotenv.config({
  path: path.join(__dirname, "../../.env"),
});

type DbConnection = {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
  dbLogging: boolean;
};

const connection: DbConnection = {
  host: process.env.DB_HOST || "ff-db",
  port: Number(process.env.DB_PORT) || 5432,
  user: process.env.DB_USER || "ff-db-user",
  password: process.env.DB_PASSWORD || "dd-db-password",
  database: process.env.DB_NAME || "ff-db",
  dbLogging:
    process.env.NODE_ENV === "development" || process.env.LOG === "true",
};

export default connection;
