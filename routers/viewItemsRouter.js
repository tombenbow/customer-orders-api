//Express
import { Router } from "express";
//Controllers
import { viewItemsController } from "../controllers/viewItemsController.js";
//Errors
import { send405Error } from "../errors/index.js";

export const viewItemsRouter = Router();

viewItemsRouter.route("/").get(viewItemsController).all(send405Error);