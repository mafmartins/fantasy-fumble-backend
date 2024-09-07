import exp from "constants";
import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.redirect("/hello-world");
});

export default router;
