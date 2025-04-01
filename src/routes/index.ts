import { Router } from "express";
import {scrapleRoute} from "./scrape";


const router = Router();

router.use("/scrape", scrapleRoute);

export default router;
