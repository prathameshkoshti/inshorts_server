import express from "express";
import { setNews } from "../controller/news-controller.js";
const route = express.Router();

route.get("/", (req, res) => res.send("Home Page Route"));
route.get("/news", setNews);

export default route;
