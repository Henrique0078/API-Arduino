import { prisma } from "../../../prisma";
import { ErrorResponse } from "../Error/ErrorResponse";

export default class datasetService{
	async Create(status: boolean, name_room: string){
		try {
			const dataset = await prisma.dataset.create({
				data:{
					id_ds: undefined,
					created_at_ds: undefined,
					name_room_ds: name_room,
					status_ds: status,
					weekday_ds: undefined
				}
			});
			return dataset;
		} catch (error) {
			return new ErrorResponse(500, "Erro ao inserir em Create dataset: " + error);
		}
	}

	async GetAll(){
		try {
			return await prisma.dataset.findMany({});
		} catch (error) {
			return new ErrorResponse(500, "Erro ao solicitar em GetAll dataset: " + error);
		}
	}
}