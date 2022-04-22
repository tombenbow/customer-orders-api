import { expect } from "chai";
import { validateAddNewItemRequestBody } from "../controllers/validation.js";

describe("validateAddNewItemRequestBody", () => {
    it("returns false if incorrect body provided", async () => {
        const body = {};
        const result = await validateAddNewItemRequestBody(body);
        expect(result).to.equal(false);
    });
    it("returns true if correct body provided", async () => {
        const body = {
            name: "pencil sharpener",
            cost: 1,
            supplier: {
                name: "paperchase"
            }
        };
        const result = await validateAddNewItemRequestBody(body);
        expect(result).to.equal(true);
    });
});