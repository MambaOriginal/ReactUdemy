import { getHeroeById,getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes"

describe('pruebas en 08-imp-exp', () => {
    test('getHeroById debe retornar un heroe por ID', () => {
        const id = 1;
        const hero = getHeroeById(id);
        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })
    })

    test('getHeroById debe retornar undefiend si no existe el heroe por ID', () => {
        const id = 100;
        const hero = getHeroeById(id);
        expect(hero).toBeFalsy();
    })

    // Tarea:
    // Debe de retornar un arreglo con los héroes de DC
    // Length === 3

    test('Debe de retornar un arreglo con los héroes de DC', () => {
        const owner = 'DC';
        const hero = getHeroesByOwner(owner);
        expect(hero.length).toBe(3);
    })

    // toEqual al arreglo filtrado
    // debe de retornar un arreglo con los héroes de Marvel
    // length === 2
    test('Debe de retornar un arreglo con los héroes de DC', () => {
        const owner = 'Marvel';
        const hero = getHeroesByOwner(owner);
        expect(hero.length).toBe(2);
    })

})


