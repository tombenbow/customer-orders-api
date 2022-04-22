//Models
import { viewItemsModel } from "../models/viewItemsModel.js";


export const viewItemsController = async (
  req,
  res,
  next,
) => {
  try {
    const items = await viewItemsModel();

    res.status(200).send(items);
  } catch (err) {
    next(err);
  }
};