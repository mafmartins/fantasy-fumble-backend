import { Dialect, Sequelize } from "sequelize";
import connection from "./config";

const { database, user, password, host, port } = connection;

const sequelizeConnection = new Sequelize(database, user, password, {
  host,
  port: port,
  dialect: "postgres" as Dialect,
});

export default sequelizeConnection;
