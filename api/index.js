import express from "express";
const app = express();
import { Data } from "./data.js";
import cors from "cors";

app.use(cors());

app.get("/", (req, res) => {
  // 
  const { q } = req.query;

  const keys = ["name", "city", "country"];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item.properties[key].toLowerCase().includes(q))
    );
  };

  res.json(search(Data).splice(0, 10));
});

app.listen(5000, () => console.log("API is working!"));