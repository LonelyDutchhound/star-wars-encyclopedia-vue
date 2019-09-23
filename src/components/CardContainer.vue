<template>
  <transition name="fade-in">
     <div class="card__container" v-show="isLoaded">
        <div class="card__block" v-for="character in allCharacters">
           <div class="char-info__block">
              <div class="avatar__img">
                  <p class="first-letter">{{character.name[0]}}</p>
              </div>
              <div class="name-species__block">
                  <p class="name">{{character.name}}</p>
                  <p class="species">{{character.species[0]}}</p>
              </div>
           </div>
        </div>
     </div>
  </transition>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
     name: 'CardContainer',
     computed: mapGetters(['allCharacters','isLoaded']),
     methods: mapActions(['getCharacters']),
     async mounted(){
        await this.getCharacters();
     }
  }
</script>

<style>
  .card__container {
     position: relative;
     display: flex;
     flex-flow: row wrap;
     justify-content: center;
     align-items: center;
     box-sizing: border-box;
     margin: auto;
     padding-bottom: 145px;
     opacity: 1;
    }
  .card__block {
     display: flex;
     justify-content: center;
     width: 41vw;
     max-width: 592px;
     min-height: 320px;
     margin: 1.7vh 1.2vw;
     cursor: pointer;
     background: #1A1A1A;
     border-radius: 8px;
     box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
    }
  .card__block:hover {
      box-shadow: 0 10px 40px rgba(37, 136, 167, 0.38);
  }
  .char-info__block {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-family: Roboto, sans-serif;
      font-style: normal;
      text-align: center;
  }
  .avatar__img {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background: #BB86FC;
  }
  .first-letter {
      font-weight: 500;
      font-size: 48px;
      line-height: 56px;
      text-transform: uppercase;
      color: #FFFFFF;
    }
  .name {
      margin-top: 10px;
      margin-bottom: 9px;
      font-weight: bold;
      font-size: 18px;
      line-height: 21px;
      text-align: center;
      font-feature-settings: 'liga' off;
      color: #FFFFFF;
  }
  .species {
      font-weight: normal;
      font-size: 13px;
      line-height: 15px;
      color: #808080;
  }
  .fade-in-enter-active {
      transition: opacity 2s ease;
  }
  .fade-in-enter {
      opacity: 0;
  }
</style>