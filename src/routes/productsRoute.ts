import express, { Request, Response } from "express";

const router = express.Router();

router.get("/products", (req: Request, res: Response) => {
  res.status(200).send("Get request to the products page");
});

router.post("/products", (req: Request, res: Response) => {
  res.status(200).send("Post request to the products page");
});

router.put("/products/:id", (req: Request, res: Response) => {
  console.log(req.body, req.query);
  res.status(200).send("Put request to the products page");
});

router.delete("/products/:id", (req: Request, res: Response) => {
  console.log(req.params);
  res.status(200).send("Delete request to the products page");
});

export default router;
