import { User } from "../models/user";

export const fetchUsers = async () => {
  return await User.findAll();
};
