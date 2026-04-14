import express from "express";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT;

const app = express();

app.get("/", async (req, res) => {
  res.send("Server up n running...");
});

app.get("/health", async (req, res) => {
  res.send("Server is healthy...");
});

app.listen(port, () => {
  console.log(`server running on port ${port}...`);
});
