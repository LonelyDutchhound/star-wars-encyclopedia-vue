<template>
  <transition name="fade-in">
     <div class="search-bar" v-show="isLoaded && !fetchError">
        <form class="search-bar__form" @submit.prevent>
           <input
              v-model="string"
              @input="debouncedSearch"
              class="search-bar__input"
              type="text"
              :emptyness="string"
              name="search-bar"
              id="search-bar"
              autocomplete="off">
           <label
              class="search-bar__tip"
              for="search-bar">
               Search by name
           </label>
           <div
              class="search-bar__button"
              @click="debouncedSearch">
           </div>
        </form>
     </div>
  </transition>
</template>

<script>
  import { mapActions, mapState} from 'vuex'
  import debounce from 'lodash/debounce';

  export default {
     name: 'SearchBar',
     computed: {
        ...mapState(['searchString', 'isLoaded', 'fetchError']),
        string: {
           get() {
              return this.searchString;
           },
           set(value) {
              return this.setSearchString(value);
           }
        }
     },
     methods: {
        ...mapActions(['setSearchString','search']),
        debouncedSearch: debounce(function () {
           this.$emit('activate', this.searchString);
           this.search();
        }, 2000)
     }
  }
</script>

<style>
  .search-bar {
     position: absolute;
     top: 0;
     display: flex;
     justify-content: center;
     align-items: center;
     width: 100vw;
     height: 116px;
     background-color: #333333;
     opacity: 1;
  }
  .search-bar__form {
     position: relative;
     margin-top: 13px;
     margin-bottom: 47px;
     width: 55.5vw;
     min-width: 272px;
     height: 56px;
     display: flex;
     flex-flow: row nowrap;
     background-color: #333333;
  }
  .search-bar__tip {
     position: absolute;
     width: 130px;
     height: 21px;
     left: 0;
     font-family: Roboto, sans-serif;
     font-style: normal;
     font-weight: 500;
     line-height: 19px;
     color: #808080;
     background-color: #333333;
     top: 32px;
     font-size: 16px;
  }
  .search-bar__input:focus~label,
  .search-bar__input:not([emptyness=""])~label
  {
      top: 11px;
      font-size: 12px;
  }
  .search-bar__input {
     position: relative;
     width: 55.5vw;
     min-width: 272px;
     height: 25px;
     margin-top: 32px;
     border-collapse: collapse;
     border: none;
     border-bottom: 1px solid #808080;
     background-color: #333333;
     font-family: Roboto, sans-serif;
     font-style: normal;
     font-weight: 500;
     font-size: 16px;
     line-height: 21px;
     color: #FFFFFF;
  }
  .search-bar__input:focus {
      outline: none;
  }
  .search-bar__button {
     position: absolute;
     width: 19px;
     height: 19px;
     top: 34px;
     right: 0;
     display: flex;
     justify-content: center;
     align-items: center;
     background: url('../assets/magnifier.svg');
     background-size: cover;
  }

@media screen and (min-width: 769px){
  .search-bar {
     height: 200px;
   }
  .search-bar__form {
     margin-top: 10px;
     width: 55.5vw;
     max-width: 800px;
     height: 56px;
    }
  .search-bar__tip {
     width: 130px;
     height: 21px;
     top: 31px;
     font-size: 18px;
     line-height: 23px;
  }
  .search-bar__input {
     height: 25px;
     margin-top: 31px;
     font-size: 16px;
     line-height: 21px;
  }
  .search-bar__input:focus~label,
  .search-bar__input:not([emptyness=""])~label
  {
     left: 0;
     top: 11px;
     font-size: 13px;
  }
  .search-bar__button {
     position: absolute;
     width: 24px;
     height: 24px;
     top: 27px;
     right: 3px;
  }
}
</style>