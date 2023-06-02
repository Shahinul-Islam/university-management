import express, { Application, Request, Response, urlencoded } from "express";
export const app: Application = express();
import cors from "cors";
//useing cors
app.use(cors());

//usign parser
app.use(express.json());
app.use(urlencoded({ extended: true }));

//testing
app.get("/", (req: Request, res: Response) => {
	res.send("Hello World!");
});
