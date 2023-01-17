import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";
import { getHeroeById } from "../../src/base-pruebas/08-imp-exp";
describe('pruebas en 09-promesas', () => {
    test('getHeroeByIdAsync debe retornar un heroe', (done) => {//done es un argumento que jest usa para esperar hasta que la prueba pase
        const id = 1;
        const heroe=getHeroeById( id );
        getHeroeByIdAsync(id)
            .then(hero => {
                expect( hero ).toEqual(heroe)
                done();
            })
    })

    test('getHeroeByIdAsync debe retornar un error', (done) => {
        const id = 100;
        const heroe=getHeroeById( id );
        getHeroeByIdAsync(id)
        .then(hero => {
            expect( hero ).toByFalsy()
            done();
        })    
        .catch(error => {
                expect(error).toBe(`No se pudo encontrar el héroe con id =${id}`)
                done();
            })
    })
})