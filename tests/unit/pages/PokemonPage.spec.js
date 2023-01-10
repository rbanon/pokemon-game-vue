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

    test("Debe de mostrar los componentes de PokemonPicture y PokemonOption", ()=>{
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

        const picture = wrapper.find('pokemon-picture-stub')
        const options = wrapper.find('pokemon-options-stub')

        //PokemonPicture debe de existir 
        expect(picture.exists()).toBeTruthy()

        //PokemonOption debe de existir
        expect(options.exists()).toBeTruthy()

        //PokemonPicture tenga el attb pokemonId === 1
        expect(picture.attributes("pokemonid")).toBe("1")

        //PokemonOptions attb pokemons toBe true
        expect(options.attributes("pokemons")).toBeTruthy()
    })

    test("Pruebas con checkAnswer",async()=>{

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

        await wrapper.vm.checkAnswer(1)

        const nombrePokemon = pokemons[0].name.charAt(0).toUpperCase() + pokemons[0].name.slice(1)
        expect(wrapper.find("h2").exists()).toBeTruthy()

        expect(wrapper.vm.showPokemon).toBeTruthy()

        expect(wrapper.find("h2").text()).toBe(`Correcto, es ${nombrePokemon}`)


        await wrapper.vm.checkAnswer(2)
        expect(wrapper.vm.message).toBe(`Oops, era ${nombrePokemon}`)


    })
})