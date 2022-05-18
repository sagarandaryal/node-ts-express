import express from "express";

const app = express();
const hostname = "localhost";
const port = 8000;

app.get("/", (req, res) => {
  res.status(200).send("Server is running in the backend.");
});

app.listen(port, () => {
  console.log(`Server has started at http://${hostname}:${port}.`);
});
