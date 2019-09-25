<template>
  <transition name="fade-in">
     <div class="card__container" v-show="isLoaded">
        <CharacterCard
           v-for="character in allCharacters"
           :key="character.id"
           :character="character"
           @popup="togglePopup">
        </CharacterCard>
        <PopupCard
           v-if="isPopupOpened"
           :id="charPopupId"
           @close="togglePopup">
        </PopupCard>
     </div>
  </transition>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import CharacterCard from "@/components/CharacterCard"
  import PopupCard from '../components/PopupCard'

  export default {
     name: 'CardContainer',
     components:{
         CharacterCard,
         PopupCard,
     },
     data () {
        return {
            bottom: false,
            isPopupOpened: false,
            charPopupId: '',
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
        togglePopup() {
           this.isPopupOpened = !this.isPopupOpened;
           const charId = event.currentTarget.id;
           if(charId){
              this.charPopupId = charId;
               console.log(this.charPopupId);
           }
        },
     },
     async mounted(){
        await this.getCharacters(this.nextPage);
        window.addEventListener('scroll', () => {
           this.bottom = this.bottomVisible();
        })
     },
  }
</script>

<style>
  .card__container {
     position: relative;
     width: 100vw;
     max-width: 520px;
     margin: 0 auto;
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     align-items: center;
     box-sizing: border-box;
     padding-bottom: 95px;
     opacity: 1;
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
}
</style>