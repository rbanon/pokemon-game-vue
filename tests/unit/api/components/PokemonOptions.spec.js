import { shallowMount } from "@vue/test-utils"
import PokemonOptions from "@/components/PokemonOptions"
import { pokemons } from "../mocks/pokemons.mock"


describe("PokemonOptions Component", ()=> {
    
    let wrapper

    beforeEach(()=>{
        wrapper = shallowMount(PokemonOptions, {
            props:{
                pokemons
            }
        })
    })

    test("Debe de hacer match con el snapshot", () => {
        
        expect(wrapper.html()).toMatchSnapshot()
        
    }),

    test("Debe de mostrar las 4 opciones correctamente",()=>{
        // exists 4 li
        // cada li tener nombre
        const liTags = wrapper.findAll("li")
        expect(liTags.length).toBe(4)

        const pokeNames = ["Bulbasaur","Ivysaur","Venusaur","Charmander"]
        for(let name in pokeNames) {
            //console.log(liTags[name].text() + " -> "+pokeNames[name])
            expect(liTags[name].text()).toBe(pokeNames[name])
        }


    }),

    test("Debe de emitir 'selection' con sus respectivos parámetros al hacer click",()=>{

        const liTags = wrapper.findAll("li")
        for (let i in liTags){
            liTags[i].trigger("click")
        }
        
        let clicks = wrapper.emitted("selection").length
        expect(clicks).toBe(4)

        for (let i in clicks){
            expect(wrapper.emitted("selection")[i]).toEqual([i+1])
        }
        
    })
})