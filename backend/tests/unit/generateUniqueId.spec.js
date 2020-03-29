const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate unique ID', () =>{
    it('should generate an unique ID', () =>{
        const id = generateUniqueId();
        expect(id).toHaveLength(8);
    });    
});


/**
 * decribe('nome do teste', () => {
 *  it('descricao do que deve ser feito', () =>{
 *      corpo do teste
 *      expect('resultado').toBe('resultado esperado');
 *  }).
 * });
 * 
 *  npm test -> executa os testes
 *  
 */
