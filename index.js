import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
//components
import Connection from "./connection/db.js";
import DefaultData from "./default.js";
import Route from "./routes/routes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use("/", Route);

const PORT = process.env.PORT || 8000;
Connection();

app.listen(PORT, () => {
  console.log(`Server is running successfully on port ${PORT}`);
});
DefaultData();
