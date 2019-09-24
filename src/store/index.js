import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
     characters: [],
     isLoaded: false,
     nextPage: 'https://swapi.co/api/people/?page=1',
     fetchError: false,
  },
  actions: {
     async getCharacters({commit, state}, page ) {
        try {
           commit('clearFetchError');
            console.log(state.fetchError);
           const response = await fetch(page);
           const isLoaded = true;
           commit('updateIsLoaded', isLoaded);
            console.log(response.ok);
               if (!response.ok) {
                   const fetchError = true;
                   commit('updateFetchError', fetchError);
                   console.log(state.fetchError);
               }

           const result = await response.json();
           const nextPage = result.next;
           commit('updateNextPage', nextPage);
           return getSpecies(result.results);
        } catch (e) {
            console.log(e);
        }

        async function getSpecies (charArray){
           try {
              const characters = [];
              for (const char of charArray) {
                  if (char.species[0]) {
                      const response = await fetch(char.species[0]);

                      const result = await response.json();
                      char.species[0] = result.name;
                      characters.push(char);
                  } else {
                      char.species[0] = 'Force only knows';
                      characters.push(char);
                  }
              }
              commit('updateCharacters', characters);
           } catch (e) {
               console.log(e);
           }
        }
     }
  },
  mutations: {
     updateCharacters(state, characters){
         state.characters = [...state.characters, ...characters];
     },
     updateIsLoaded(state, isLoaded){
         state.isLoaded = isLoaded;
     },
     updateNextPage(state, nextPage){
         state.nextPage = nextPage;
     },
     updateFetchError(state, fetchError){
        state.fetchError = fetchError;
     },
     clearFetchError(state){
        state.fetchError = false;
     }
  },
  getters: {
     allCharacters (state){
        return state.characters;
     },
     isLoaded (state){
        return state.isLoaded;
     },
     nextPage (state) {
        return state.nextPage;
     },
     gotFetchError (state){
         return state.fetchError;
     }
  },
})