//Express
import { Router } from "express";
//Controllers
import { addNewItemController } from "../controllers/addNewItemController.js";
//Errors
import { send405Error } from "../errors/index.js";

export const addNewItemRouter = Router();

addNewItemRouter.route("/").post(addNewItemController).all(send405Error);