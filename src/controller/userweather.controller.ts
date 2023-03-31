import { Request, Response } from "express";
import axios from "axios";

const owAPiKEY = String(process.env.OPEN_WEATHER_API_KEY);
const openWeatherUrl = String(process.env.OPEN_WEATHER_BASE_URL);
const randomUserUrl = String(process.env.RANDOM_USER_BASE_URL);

export const getRandomUser = async (req: Request, res: Response) => {
  const { data } = await axios.get(randomUserUrl);
  const user = {
    name: data.results[0].name.first,
    surname: data.results[0].name.last,
    city: data.results[0].location.city,
    weather: "",
  };
  try {
    const response = await axios.get(
      `${openWeatherUrl}/weather?q=${user.city}&appid=${owAPiKEY}`
    );
    user.weather = response.data.weather[0].main;
  } catch (err) {
    user.weather = "Not supported....";
  }
  res.json(user);
};
