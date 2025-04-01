import { Router } from "express";
import {scrapleRoute} from "./scrape";
import { notebookRoute } from "./notebook";


const router = Router();

router.use("/scrape", scrapleRoute);
router.use("/notebook", notebookRoute);

export default router;
