import { Router } from "express";
import webscraper from "../webscraper";

const scrapleRoute = Router();
scrapleRoute.post("/", async (_req, res) => {
webscraper()
res.status(200).json({
    message: "Scraping started",
});
});

export { scrapleRoute };
