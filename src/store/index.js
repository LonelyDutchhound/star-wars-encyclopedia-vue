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
     popupCharacter: {},
     searchString: ''
  },
  actions: {
     async getCharacters({commit, dispatch}, page) {
        try {
           commit('clearFetchError');
           if (page) {
              const response = await fetch(page);
              if (!response.ok) {
                 commit('updateFetchError', true);
              }
               const characters = await response.json();
               const nextPage = characters.next;
               commit('updateNextPage', nextPage);
               dispatch('getSpecies', characters.results);
           }
        } catch (e) {
            console.log(e);
        }
     },

     async getSpecies({dispatch}, charArray){
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
        dispatch('keyGen', characters)
     },

     keyGen({commit, state}, characters) {
        for (const char of characters) {
           char.id = Math.random().toString(36).slice(-3) + (state.keygen++).toString(10);
        }
        commit('updateCharacters', characters);
        const isLoaded = true;
        commit('updateIsLoaded', isLoaded);
     },

     async getFullInfo({commit, state}, id){
         commit('updateCharInfo', {});
        try {
           const character = state.characters.filter(char => char.id === id);
           const fullCharInfo = Object.assign({}, character[0]);
           const homeworldInfo = await fetch(fullCharInfo.homeworld);
           const homeworld = await homeworldInfo.json();
           fullCharInfo.homeworld = homeworld.name;

           const filmList = [];
           for (const url of fullCharInfo.films) {
              const filmInfo = await fetch(url);
              const film = await filmInfo.json();
              filmList.push(film.title);
           }
           fullCharInfo.films = filmList;
           commit('updateCharInfo', fullCharInfo)
           } catch (e) {
              console.log(e);
           }
     },

     async search ({commit, state, dispatch}){
         commit ('clearStateCharacters');
         commit('clearIsLoaded');
        try{
            const searched = await fetch(`https://swapi.co/api/people/?search=${state.searchString}`);
            if (!searched.ok) {
                commit('updateFetchError', true);
            }
            const result = await searched.json();
            dispatch('getSpecies', result.results);
        }  catch (e) {
           console.log(e)
        }
     },
     setSearchString({commit}, searchString) {
        commit('updateSearchString', searchString);
     },
  },
  mutations: {
     updateCharacters(state, characters){
         state.characters = [...state.characters, ...characters];
     },
     clearStateCharacters(state){
        state.characters = [];
     },
     updateCharInfo(state, character){
         state.popupCharacter = character;
     },
     updateSearchString(state, searchString){
         state.searchString = searchString;
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
     },
     clearIsLoaded(state){
         state.isLoaded = false;
     }
  }
})