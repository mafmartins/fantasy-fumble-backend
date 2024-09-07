import { User } from "./user";

export const initModels = async () => {
  await User.sync({ alter: true });
};
