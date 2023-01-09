<template>
    <h1>Cuál es este pokémon?</h1>
    <PokemonPicture :pokemonId="7" :showPokemon="true"/>
    <PokemonOptions :pokemons="pokemonArr"/>
  
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
        pokemonArr: []
      }
    },

    methods: {
      async mixPokemonArray() {
        this.pokemonArr = await getPokemonOptions()
        console.log(this.pokemonArr)
      }
      
    },

    mounted(){
      this.mixPokemonArray()
    }
    
  }
  </script>