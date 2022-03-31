import express from "express";
import { setNews } from "../controller/news-controller.js";
const app = express();

app.get("/news", setNews);
app.get("/", (req, res) => res.send("Home Page Route"));

export default app;
