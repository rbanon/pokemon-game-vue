<template>
    <h1>Cuál es este pokémon?</h1>
    <PokemonPicture :pokemonId="7" :showPokemon="true"/>
    <PokemonOptions/>
  
  </template>
  
  <script>
import PokemonPicture from '@/components/PokemonPicture.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'
import getPokemonOptions from "@/helpers/getPokemonOptions"

console.log(getPokemonOptions())
  export default {
  components: {
    PokemonPicture,
    PokemonOptions
    },
  
  }
  </script>