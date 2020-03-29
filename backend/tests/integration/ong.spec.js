const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach( async () => {
        await connection.migrate.rollback(); //da rollbak no banco (zera o banco)
        await connection.migrate.latest(); //executa as migrations
    });

    afterAll( async() =>{
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            //.set('Authorization', 'id') // mandar por header
            .send(
                {
                    name: "ONG Teste 3",
                    email: "teste@teste.com",
                    whatsapp: "1110000000",
                    city: "Quebec",
                    uf: "QC"
                }
            );

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);

    });
});