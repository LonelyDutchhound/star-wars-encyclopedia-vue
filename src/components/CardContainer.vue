<template>
  <transition name="fade-in">
     <div class="card__container" v-show="isLoaded">
        <div class="error__container" v-show="gotFetchError">
           <p class="error__message">
              Fear is the path to the dark side.<br>
              Fear leads to anger; anger leads to hate; hate leads to suffering.<br>
              Renew the page with no fear.
            </p>
        </div>
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
     data () {
        return {
            bottom: false
        }
     },
     computed: mapGetters(['allCharacters','isLoaded','nextPage','gotFetchError']),
     watch: {
        bottom(bottom){
            if (bottom) this.getCharacters(this.nextPage);
        }
     },
     methods: {
        ...mapActions(['getCharacters']),
        bottomVisible() {
           const scrollY = window.scrollY;
           const visible = document.documentElement.clientHeight;
           const pageHeight = document.documentElement.scrollHeight;
           const bottomOfPage = visible + scrollY >= pageHeight;
           return bottomOfPage || pageHeight < visible
         },
     },
     created() {
        window.addEventListener('scroll', () => {
           this.bottom = this.bottomVisible();
        })
     },
     async mounted(){
        await this.getCharacters(this.nextPage);
     },
  }
</script>

<style>
    .card__container {
        position: relative;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        padding-bottom: 95px;
        opacity: 1;
    }
    .error__container{
        position: relative;
        width: 100vw;
        height: 38vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        opacity: 1;
    }
    .error__message {
        font-family: Roboto, sans-serif;
        font-style: normal;
        text-align: center;
        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF;
    }
    .card__block {
        display: flex;
        justify-content: center;
        width: 80%;
        min-width: 272px;
        height: 40%;
        min-height: 200px;
        margin-bottom: 2.75vh;
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
        transition: opacity 4s ease-out;
    }
    .fade-in-enter {
        opacity: 0;
    }


@media screen and (min-width: 769px){
  .card__container {
      margin: 0 auto;
      flex-flow: row wrap;
      justify-content: center;
      padding-bottom: 145px;
      max-width: 1440px;
    }
  .error__container{
      position: relative;
      width: 100vw;
      height: 38vh;
      display: flex;
      flex-direction: column;
     justify-content: center;
      align-items: center;
      box-sizing: border-box;
      opacity: 1;
    }
  .card__block {
      width: 41vw;
      max-width: 592px;
      min-height: 320px;
      margin: 1.7vh 1.2vw;
    }
}
</style>