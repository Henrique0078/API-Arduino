import { Router } from "express";
import arduinoController from "./Controller/arduinoController";

const router = Router();

router.post("/insert", new arduinoController().PostToDataset);
router.get("/get", new arduinoController().GetToDataset);

export{router};