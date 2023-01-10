import {shallowMount, mount} from "@vue/test-utils"
import PokemonPage from "@/pages/PokemonPage"
import {pokemons} from "../api/mocks/pokemons.mock"

describe("PokemonPage Component", ()=>{

    let wrapper

    beforeEach(()=>{
        wrapper = shallowMount(PokemonPage)
    })

    test("Debe de llamar mixPokemonArray al montar",()=>{

        const mixPokemonArraySpy = jest.spyOn(PokemonPage.methods,"mixPokemonArray")
        const wrapper = shallowMount(PokemonPage)
        expect(mixPokemonArraySpy).toHaveBeenCalled()

    }),

    test("Debe de hacer match con el snapshot cuando cargan los pokemon",()=>{

        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ""      
                  }
            }
        })

        expect(wrapper.html()).toMatchSnapshot()

    })
})