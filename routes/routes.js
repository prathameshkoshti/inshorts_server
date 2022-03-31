import express from "express";
import { setNews } from "../controller/news-controller.js";
const route = express.Router();

route.get("/news", setNews);
route.get("/", (req, res) => res.send("Home Page Route"));

export default route;
