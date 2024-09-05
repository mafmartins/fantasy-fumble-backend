import { Dialect, Sequelize } from "sequelize";
import connection from "./config";

const { database, user, password, host } = connection;

const sequelizeConnection = new Sequelize(database, user, password, {
  host,
  dialect: "postgres" as Dialect,
});

export default sequelizeConnection;
