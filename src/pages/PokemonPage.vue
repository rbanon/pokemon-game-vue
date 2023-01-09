<template>
  <h1 v-if="!pokemon"> Espere por favor...</h1>
  <div v-else>
    <h1>Cuál es este pokémon?</h1>
    <PokemonPicture
      :pokemonId="pokemon.id"
      :showPokemon="showPokemon"/>
    <PokemonOptions
      :class="{disabled: btnDisabled}"
      :pokemons="pokemonArr"
      @selection="checkAnswer"
      />
    <template v-if="showAnswer" class="fade-in">
      <h2>{{message}}</h2>
      <button @click="newGame">Nuevo juego</button>
    </template>
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
        showPokemon: false,
        showAnswer: false,
        message: "",
        btnDisabled: false        
      }
    },

    methods: {
      async mixPokemonArray() {
        this.pokemonArr = await getPokemonOptions()
        //console.log(this.pokemonArr)

        const rndInt = Math.floor(Math.random()*4)
        // console.log(rndInt)
        this.pokemon = this.pokemonArr[rndInt]
      },

      checkAnswer(selectedId) {
        this.showPokemon = true
        this.showAnswer = true
        this.btnDisabled = true // Custom disable buttons
        let correctAnswer = this.pokemon.name.charAt(0).toUpperCase() + this.pokemon.name.slice(1);
        if (selectedId == this.pokemon.id) {
          this.message = `Correcto, es ${correctAnswer}`
        } else {
          this.message = `Oops, era ${correctAnswer}`
        }

      },

      newGame(){
        this.showPokemon = false,
        this.showAnswer = false,
        this.btnDisabled = false,
        this.pokemonArr = []
        this.message = ""
        this.pokemon = null
        this.mixPokemonArray()
      }
      
    },

    mounted(){
      this.mixPokemonArray()
    }
    
  }
  </script>