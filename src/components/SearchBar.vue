<template>
  <transition name="fade-in">
     <div class="search__container" v-show="isLoaded">
        <form class="search__form">
           <input class="search-bar__input" type="text" name="search-bar" id="search-bar" autocomplete="off">
              <label class="search-bar__tip" for="search-bar">Search by name</label>
              <div class="search-bar__button"><img src="../assets/magnifier.svg" alt="search"></div>
        </form>
     </div>
  </transition>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
     name: 'SearchBar',
     computed: mapGetters(['isLoaded']),
  }
</script>

<style>
  .search__container {
     position: relative;
     display: flex;
     justify-content: center;
     align-items: center;
     width: 100vw;
     height: 200px;
     background-color: #333333;
     opacity: 1;
  }
  .search__form {
     position: relative;
     margin-top: 10px;
     width: 55.5vw;
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
     top: 31px;
     z-index: 2;
     font-family: Roboto, sans-serif;
     font-style: normal;
     font-weight: 500;
     font-size: 18px;
     line-height: 23px;
     color: #808080;
     background-color: #333333;
  }
  .search-bar__input {
     position: relative;
     width: 55.5vw;
     height: 25px;
     margin-top: 31px;
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
  .search-bar__input:focus~label {
     left: 0;
     top: 11px;
     font-size: 13px;
  }
  .search-bar__button {
      position: absolute;
      width: 32px;
      height: 32px;
      top: 23px;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #333333;
  }
  .fade-in-enter-active {
      transition: opacity 5s ease;
  }
  .fade-in-enter {
      opacity: 0;
  }
</style>