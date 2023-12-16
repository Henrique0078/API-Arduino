import cors from "cors";
import Express from "express";
import { router } from "./routes";

const app = Express();

app.use(Express.json());
app.use(cors());
app.use(router);

const PORT = 8000;
app.get("/", (request, response) => {
	return response.send({message: "Hello World!"});
});

app.listen(PORT, () => {
	console.log("Server is running in port " + PORT);
});
