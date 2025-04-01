import { Router, Request, Response } from "express";
import { db } from "../lib/db";

const notebookRoute = Router();

notebookRoute.get("/", async (_req, res) => {
 const laptops =  await db.laptop.findMany({
    orderBy: {
        price: "asc",
    }
 })
 const parsed = laptops.map((laptop) => ({
    ...laptop,
    options: JSON.parse(laptop.options),
 }))
 res.status(200).json(parsed);
});

export { notebookRoute };
