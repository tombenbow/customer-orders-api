//Helpers
import * as yup from "yup";

export const validateAddNewItemRequestBody = async (paramsObject) => {
  let schema = yup.object().shape({
    name: yup.string().required(),
    cost: yup.number().required().positive().integer(),
    supplier: yup.object().shape({
      name: yup.string().required()
    })
  });

  return await schema.isValid(paramsObject);
};