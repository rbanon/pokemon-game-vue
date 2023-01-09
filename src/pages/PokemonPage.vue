<template>
  <h1 v-if="!pokemon"> Espere por favor...</h1>
  <div v-else>
    <h1>Cuál es este pokémon?</h1>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon"/>
    <PokemonOptions :pokemons="pokemonArr"/>
  </div>
  </template>
  
  <script>
import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'

import getPokemonOptions from "@/helpers/getPokemonOptions"

//console.log(getPokemonOptions())
  export default {
    components: {
      PokemonPicture,
      PokemonOptions
      },

    data(){
      return {
        pokemonArr: [],
        pokemon: null,
        showPokemon: false
      }
    },

    methods: {
      async mixPokemonArray() {
        this.pokemonArr = await getPokemonOptions()
        //console.log(this.pokemonArr)

        const rndInt = Math.floor(Math.random()*4)
        // console.log(rndInt)
        this.pokemon = this.pokemonArr[rndInt]
      }
      
    },

    mounted(){
      this.mixPokemonArray()
    }
    
  }
  </script>