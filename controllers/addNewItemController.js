//Models
import { addNewItemModel } from "../models/addNewItemModel.js";
//Helpers
import { validateAddNewItemRequestBody } from "./validation.js";
import pkg from 'uuid';
const { v4: uuidv4 } = pkg;

export const addNewItemController = async (
  req,
  res,
  next,
) => {
  try {
    const { body } = req;

    const validBody = await validateAddNewItemRequestBody(body);

    if (!validBody) throw new Error("Invalid Parameters");

    addUuids(body)
    await addNewItemModel(body);

    res.status(200).send({msg: '[RequestSuccessful] item added to db.'});
  } catch (err) {
    next(err);
  }
};

const addUuids = (body) => {
  body.id = uuidv4();
  body.supplier.id = uuidv4();
}