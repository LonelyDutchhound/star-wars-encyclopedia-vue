import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
     characters: [],
     isLoaded: false,
  },
  actions: {
     async getCharacters(ctx){
        try {
           const response = await fetch('https://swapi.co/api/people');
           const result = await response.json();
           return getSpecies(result.results);
        } catch (e) {
           console.log(e)
        }

        function getSpecies(charArray) {
           const characters = [];
           const isLoaded = true;
           charArray.forEach( char => {
              fetch(char.species[0])
                 .then(response => response.json())
                    .then(species => {
                       char.species[0] = species.name;
                       characters.push(char);

                    })
                       .catch(e => console.log(e));
           });
            console.log(isLoaded);
           ctx.commit('updateCharacters', characters);
           ctx.commit('updateIsLoaded', isLoaded);
        }
     },
  },
  mutations: {
     updateCharacters(state, characters){
        state.characters = characters;
     },
     updateIsLoaded(state, isLoaded){
         state.isLoaded = isLoaded;
     }
  },
  getters: {
     allCharacters (state){
        return state.characters;
     },
     isLoaded (state){
        return state.isLoaded;
     }
  },
})