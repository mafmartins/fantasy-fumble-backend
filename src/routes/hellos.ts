import express from "express";

import { helloWorld } from "../controllers/hello-world";

const router = express.Router();

router.get("/", helloWorld);

export default router;
