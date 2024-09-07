import asyncHandler from "express-async-handler";

export const helloWorld = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Hello, World!" });
});
