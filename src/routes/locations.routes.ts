import express, { Request, Response } from "express";
import axios from "axios";
const router = express.Router();
router.use(express.json());

const owAPiKEY = String(process.env.OPEN_WEATHER_API_KEY);
const openWeatherUrl = String(process.env.OPEN_WEATHER_BASE_URL);

router.get("/", (req:Request, res:Response)=>{
    res.status(400).json({error:"Specify a city"})
})

router.get("/:city", async ({ params }: Request, res: Response) => {
  console.log("sta chiamando qualcuno?");
  const { data } = await axios.get(
    `${openWeatherUrl}/weather?q=${params.city}&appid=${owAPiKEY}`
  );
  res.json(data);
});

export default router;
