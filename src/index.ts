import express, { Request, Response } from "express";
import dotenv from "dotenv";
import productsRouter from "./routes/productsRoute";

const app = express();
// initialize configuration
dotenv.config();

// port is now available to the Node.js runtime as if it were an environment variable
const hostname = process.env.SERVER_HOSTNAME;
const port = process.env.SERVER_PORT;

// application middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res
    .status(200)
    .send(
      "Server is running in the backend after folder setup with env config."
    );
});

app.use("/", productsRouter);

app.listen(port, () => {
  console.log(`Server has started at http://${hostname}:${port}.`);
});
