import express from "express";
import dotenv from "dotenv";

const app = express();
// initialize configuration
dotenv.config();

// port is now available to the Node.js runtime as if it were an environment variable
const hostname = process.env.SERVER_HOSTNAME;
const port = process.env.SERVER_PORT;

app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      "Server is running in the backend after folder setup with env config."
    );
});

app.listen(port, () => {
  console.log(`Server has started at http://${hostname}:${port}.`);
});
