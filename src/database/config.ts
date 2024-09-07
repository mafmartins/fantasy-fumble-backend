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
const database_port =
  process.env.NODE_ENV === "test" ? 5433 : process.env.DB_PORT;
const database_name =
  process.env.NODE_ENV === "test" ? "ff-db-test" : process.env.DB_NAME;

const connection: DbConnection = {
  host: process.env.DB_HOST || "ff-db",
  port: Number(database_port) || 5432,
  user: process.env.DB_USER || "ff-db-user",
  password: process.env.DB_PASSWORD || "ff-db-password",
  database: database_name || "ff-db",
};

export default connection;
