<template>
<div class="wrapper">
  <transition name="fade-in">
     <div
        class="card__container"
        v-if="isLoaded">
        <SearchBar @activate="activateSearch" />
        <CharacterCard
           v-for="character in characters"
           :key="character.id"
           :character="character"
           @popup="togglePopup"
           />
        <PopupCard
           v-if="isPopupOpened"
           :id="charPopupId"
           @close="togglePopup"
           />
     </div>
  </transition>
  <PageFooter v-if="isLoaded"></PageFooter>
</div>
</template>

<script>
  import { mapActions, mapState} from 'vuex'
  import CharacterCard from "@/components/CharacterCard"
  import PopupCard from '../components/PopupCard'
  import SearchBar from "@/components/SearchBar"
  import PageFooter from '../components/PageFooter'

  export default {
     name: 'CardContainer',
     components:{
        CharacterCard,
        PopupCard,
        SearchBar,
        PageFooter
     },
     data () {
        return {
           bottom: false,
           isPopupOpened: false,
           isSearchActive: false,
           charPopupId: '',
        }
     },
     computed: {
       ...mapState(['characters', 'isLoaded','nextPage'])
     },
     watch: {
        bottom(bottom){
           if (bottom && !this.isPopupOpened && !this.isSearchActive) this.getCharacters(this.nextPage);
        }
     },
     methods: {
        ...mapActions(['getCharacters','getSpecies']),
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
           }
        },
        activateSearch(string) {
           this.isSearchActive = !!string;
        }
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
     min-height: 53vh;
     margin: 0 auto;
     padding-bottom: 95px;
     padding-top: 116px;
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     align-items: center;
     box-sizing: border-box;
     background: #333333;
     opacity: 1;
  }
  .fade-in-enter-active {
     transition: all 3s ease-out;
  }
  .fade-in-enter {
     opacity: 0;
     transform: translateY(100%);
  }


@media screen and (min-width: 769px){
  .card__container {
     margin: 0 auto;
     padding-bottom: 145px;
     padding-top: 200px;
     flex-flow: row wrap;
     justify-content: center;
     max-width: 1440px;
  }
}
</style>