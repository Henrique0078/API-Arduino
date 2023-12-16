import { Request, Response } from "express";
import { ErrorResponse } from "../Model/Error/ErrorResponse";
import datasetService from "../Model/Service/datasetService";

export default class arduinoController{
	async PostToDataset(req: Request, res: Response){
		try {
			const { status, name_room } = req.body;
			const dataset = new datasetService();
			const result = await dataset.Create(status, name_room);
			console.log(result);
			return res.status(201).send("Requisição concluida!");
		} catch (error) {
			return new ErrorResponse(500, "Erro ao fazer post no dataset: " + error);
		}
	}
	async GetToDataset(req: Request, res: Response){
		try {
			const dataset = new datasetService();
			const allDataset = await dataset.GetAll();
			res.status(200).json(allDataset);
		} catch (error) {
			return new ErrorResponse(500, "Erro ao fazer get no dataset: " + error);
		}
	}
}