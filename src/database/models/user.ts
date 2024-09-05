import { DataTypes, Model, Optional } from "sequelize";
import dBConn from "../connection";

interface UserAttributes {
  id: number;
  username: string;
  email: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id: number = 0;
  public username: string = "";
  public email: string = "";

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    sequelize: dBConn,
    modelName: "User",
    tableName: "User",
    timestamps: true,
  }
);

export { User, UserAttributes, UserCreationAttributes };
