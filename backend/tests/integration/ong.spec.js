const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");
/* Se quisermos acresentar um params header precisamos usar a função: .set('Authorization', 'asd')  */

describe("ONG", () => {
  /* Antes de cada um dos testes */
  beforeEach(async () => {
    /* Devemos executar o rollback para defazer todas as migrations e o banco sempre ficar limpo */
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });
  it("should be able to create a new ong", async () => {
    const response = await request(app)
      .post("/ongs")
      .send({
        name: "APAD",
        email: "contato@apad.com.br",
        whatsapp: "4700000000",
        city: "Bahia",
        uf: "BA"
      });
    /* Espero que eu tenha uma propriedade ID no corpo da requisição */
    expect(response.body).toHaveProperty("id");
    /* Espero que esse ID tenha 8 caracteres */
    expect(response.body.id).toHaveLength(8);
  });
});
