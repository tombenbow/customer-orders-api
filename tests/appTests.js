import { expect } from "chai";
import request from "supertest";
import { app } from "../app.js";

describe("api", () => {
  it("GET 404 : route not found", async () => {
    return request(app)
      .get("/NotARoute")
      .expect(404)
      .then(({ body }) => {
        expect(body.msg).to.eql("Route Not Found");
      });
  });

  it("GET 405 : method not allowed", async () => {
    return request(app)
      .get("/api")
      .expect(405)
      .then(({ body }) => {
        expect(body.msg).to.eql("Method Not Allowed");
      });
  });

  describe("/view-items", () => {
    it("GET 200 : /view-items returns array", async () => {
      return request(app)
        .get("/api/view-items")
        .expect(200)
        .then((response) => {
          expect(response.body).to.be.a("array");
        });
    });

    it("GET 404 : route not found", async () => {
      return request(app)
        .get("/api/view-items/NotARoute")
        .expect(404)
        .then(({ body }) => {
          expect(body.msg).to.eql("Route Not Found");
        });
    });
  
    it("POST 405 : method not allowed", async () => {
      return request(app)
        .post("/api/view-items")
        .send({ itemId: "randomItemId" })
        .expect(405)
        .then(({ body }) => {
          expect(body.msg).to.eql("Method Not Allowed");
        });
    });
  
    it("PATCH 405 : method not allowed", async () => {
      return request(app)
        .patch("/api/view-items")
        .send({ itemId: "randomItemId" })
        .expect(405)
        .then(({ body }) => {
          expect(body.msg).to.eql("Method Not Allowed");
        });
    });
  
    it("DELETE 405 : method not allowed", async () => {
      return request(app)
        .delete("/api/view-items")
        .send({ itemId: "randomItemId" })
        .expect(405)
        .then(({ body }) => {
          expect(body.msg).to.eql("Method Not Allowed");
        });
    });
  });


  describe("/add-new-item", () => {
    it("POST 400: returns error when invalid body provided", async () => {
      return request(app)
        .post("/api/add-new-item")
        .send({ itemId: "randomItemId" })
        .expect(400)
        .then(({ body }) => {
          expect(body.msg).to.eql("Bad Request");
        });
    });

    it("POST 200: returns success message when valid request provided", async () => {
      return request(app)
        .post("/api/add-new-item")
        .send({
          "name": "biro",
          "cost": 9,
          "supplier": {
              "name": "asda"
          }
        })
        .expect(200)
        .then(({ body }) => {
          expect(body.msg).to.eql("[RequestSuccessful] item added to db.");
        });
    });
  });
});

