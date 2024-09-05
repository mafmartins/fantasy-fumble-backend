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
};

const connection: DbConnection = {
  host: process.env.DB_HOST || "ff-db",
  port: Number(process.env.DB_PORT) || 5432,
  user: process.env.DB_USER || "ff-db-user",
  password: process.env.DB_PASSWORD || "ff-db-password",
  database: process.env.DB_NAME || "ff-db",
};

export default connection;
