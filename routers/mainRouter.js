//Express
import { Router } from "express";
//Routers
import { viewItemsRouter } from "./viewItemsRouter.js";
import { addNewItemRouter } from "./addNewItemRouter.js";
//Errors
import { send405Error } from "../errors/index.js";

export const mainRouter = Router();

mainRouter.use("/view-items", viewItemsRouter);
mainRouter.use("/add-new-item", addNewItemRouter);
mainRouter.route("/").all(send405Error);