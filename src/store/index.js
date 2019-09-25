import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
     characters: [],
     keygen: 1,
     isLoaded: false,
     nextPage: 'https://swapi.co/api/people/?page=1',
     fetchError: false,
     popupCharacter: {}
  },
  actions: {
     async getCharacters({commit, state}, page ) {
        try {
           commit('clearFetchError');
           if (page) {
              const response = await fetch(page);
              if (!response.ok) {
                 commit('updateFetchError', true);
              }
               const result = await response.json();
               const nextPage = result.next;
               commit('updateNextPage', nextPage);
               getSpecies(result.results);
           }
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
                     char.species = result.name;
                     characters.push(char);
                 } else {
                     char.species = 'Force only knows';
                     characters.push(char);
                 }
              }
              for (const char of characters){
                  char.id = state.keygen++;
              }
              commit('updateCharacters', characters);
              const isLoaded = true;
              commit('updateIsLoaded', isLoaded);
           } catch (e) {
               console.log(e);
           }
        }
     },

     async getFullInfo({commit, state}, id){
         commit('updateCharInfo', {});
        try {
           const fullCharInfo = Object.assign({}, state.characters[id-1]);
           const homeworldInfo = await fetch(fullCharInfo.homeworld);
           const homeworld = await homeworldInfo.json();
           fullCharInfo.homeworld=homeworld.name;

           const filmList = [];
           for (const url of fullCharInfo.films) {
              const filmInfo = await fetch(url);
              const film = await filmInfo.json();
              filmList.push(film.title);
           }
           fullCharInfo.films = filmList;
            console.log(fullCharInfo);
            commit('updateCharInfo', fullCharInfo)
           } catch (e) {
              console.log(e);
           }
     }
  },
  mutations: {
     updateCharacters(state, characters){
         state.characters = [...state.characters, ...characters];
     },
     updateCharInfo(state, character){
         state.popupCharacter = character;
     },
     updateFilms(state, film) {
         state.films.push(film);
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
     popupCharacter (state){
         return state.popupCharacter;
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