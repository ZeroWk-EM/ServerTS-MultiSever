import express, { Request, Response } from "express";
import { getRandomUser } from "../controller/userweather.controller";
const router = express.Router();
router.use(express.json());

router.get("/", getRandomUser);

export default router;
