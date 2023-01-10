import getPokemonOptions, { getPokemons,getPokemonNames } from "@/helpers/getPokemonOptions"
import {pokemons} from "../mocks/pokemons"

describe ("getPokemonOptions helpers", () =>{

    test("Debe de regresar un arreglo de números", () => {

        const pokemons = getPokemons()
        expect(pokemons.length).toBe(650)
        
        for (let pokemon in pokemons) {
            expect(typeof pokemons[pokemon])
            expect(pokemons[pokemon]).toBe(Number(pokemon)+1)
        }
    }),

    test("Debe de retornar un arreglo de 4 elementos con nombres de pokemons", async() => {
        
        const pokemons = await getPokemonNames([1,2,3,4])

        expect(pokemons[0].name).toBe("bulbasaur")
        expect(pokemons[0].id).toBe(1)

        expect(pokemons).toStrictEqual(pokemons)

    }),

    test("getPokemonOptions debe de retornar un arreglo mezclado", async() => {

        const pokemons = await getPokemonOptions()

        expect(pokemons.length).toBe(4)

        expect(pokemons).toEqual([
            {  
                name: expect.any(String),
                id: expect.any(Number)
            },
            { 
                name: expect.any(String),
                id: expect.any(Number)
            },
            { 
                name: expect.any(String),
                id: expect.any(Number)
            },
            { 
                name: expect.any(String),
                id: expect.any(Number)
            }
        ])


    })
})