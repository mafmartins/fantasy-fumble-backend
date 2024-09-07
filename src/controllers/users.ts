import asyncHandler from "express-async-handler";

import { fetchUsers } from "../services/users";

export const getUsers = asyncHandler(async (req, res) => {
  const users = await fetchUsers();
  res.status(200).json(users.map((record) => record.toJSON()));
});
