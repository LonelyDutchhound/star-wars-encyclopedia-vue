<template>
  <div class="error" v-show="gotFetchError">
     <p class="error__message">
         Fear is the path to the dark side.<br>
         Fear leads to anger; anger leads to hate; hate leads to suffering.<br>
         Renew the page with no fear.
     </p>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
     name: 'ErrorPage',
     data() {
        return {
            bottom: false
        }
     },
     computed: mapGetters(['gotFetchError']),
  }
</script>

<style>
  .error {
     position: relative;
     display: flex;
     justify-content: center;
     align-items: center;
     margin: auto;
     width: 100vw;
     height: 66.6vh;
     background: #333333;
     opacity: 1;
  }
  .error__message {
     font-family: Roboto, sans-serif;
     font-style: normal;
     text-align: center;
     padding: 8px;
     font-size: 18px;
     line-height: 21px;
     color: #FFFFFF;
  }
  .fade-out-leave-active {
     transition: opacity 2s ease-out;
  }
  .fade-out-leave-to  {
     opacity: 0;
  }
</style>