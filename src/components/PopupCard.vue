<template>
<div class="popup-wrapper">
  <div class="popup">
     <div class="popup__header">
        <img class="popup__button" src="../assets/close_btn.svg" @click="$emit('close')">
        <div class="popup__header-avatar">A</div>
        <div class="popup__header-name">
           <p class="header-name__field">{{popupCharacter['name']}}</p>
        </div>
     </div>
     <div class="popup__info-block">
        <div class="popup__info-field">
            <img class="info-field__icon" src="../assets/by.svg">
            <p class="info-field__fieldname">Birth year</p>
            <p class="info-field__data">{{popupCharacter['birth_year']}}</p>
        </div>
        <div class="popup__info-field">
            <img class="info-field__icon" src="../assets/species.svg">
            <p class="info-field__fieldname">Species</p>
            <p class="info-field__data">{{popupCharacter['species']}}</p>
        </div>
        <div class="popup__info-field">
            <img class="info-field__icon" src="../assets/gender.svg">
            <p class="info-field__fieldname">Gender</p>
            <p class="info-field__data">{{popupCharacter['gender']}}</p>
        </div>
        <div class="popup__info-field">
           <img class="info-field__icon" src="../assets/homeworld.svg">
           <p class="info-field__fieldname">Homeworld</p>
           <p class="info-field__data">{{popupCharacter['homeworld']}}</p>
        </div>
        <div class="popup__info-field" id="filmlist">
           <img class="info-field__icon" src="../assets/films.svg">
           <p class="info-field__fieldname">Films</p>
           <ul class="info-field__data" >
              <li class="info-field__data-element" v-for="film in popupCharacter['films']" >{{film}}</li>
           </ul>
        </div>
     </div>
  </div>
</div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
     name: 'PopupCard',
     props: ['id'],
     computed: {
         ...mapState(['popupCharacter']),
     },
     methods:{
         ...mapActions(['getFullInfo'])
     },
     async created() {
         await this.getFullInfo(this.id);
     }
  }
</script>

<style>
  .popup-wrapper {
     position: fixed;
     left: 0;
     top: 0;
     width: 100vw;
     height: 100vh;
     display: flex;
     justify-content: center;
     align-items: center;
     background: #1A1A1A;
     z-index: 2;
  }
  .popup {
     width: 320px;
     margin: 0 auto;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     font-family: Roboto, sans-serif;
     font-style: normal;
     background: #1A1A1A;
  }
  .popup__header {
     position: relative;
     width: 272px;
     height: 156px;
     display: flex;
     padding-bottom: 20px;
     flex-flow: row nowrap;
     justify-content: center;
     align-items: center;
     border-collapse: collapse;
     border-bottom: 2px solid #808080;
  }
  .popup__button {
     position: absolute;
     right: 6px;
     top: 2px;
     width: 12px;
     height: 12px;
  }
  .popup__header-avatar {
     width: 80px;
     height: 80px;
     display: flex;
     justify-content: center;
     align-items: center;
     text-align: center;
     border-radius: 50%;
     font-weight: 500;
     font-size: 48px;
     line-height: 56px;
     font-feature-settings: 'liga' off;
     background: #BB86FC;
     color: #FFFFFF;
  }
  .popup__header-name {
     position: relative;
     display: flex;
     align-items: center;
     width: 70%;
  }
  .header-name__field{
     width: 80%;
     margin-left: 8%;
     font-weight: bold;
     font-size: 22px;
     line-height: 26px;
     color: #FFFFFF;
  }
  .popup__info-block {
     width: 100%;
     height: 390px;
     padding-top: 12%;
     display: flex;
     flex-direction: column;
     justify-content: flex-start;
  }
  .popup__info-field {
     width: 100%;
     height: 11.65%;
     display: flex;
     flex-flow: row nowrap;
     justify-content: center;
     align-items: center;
     font-size: 16px;
     line-height: 19px;
  }
  .info-field__icon {
     display: flex;
     justify-items: center;
     align-items: center;
     width: 24px;
     height: 24px;
     margin-left: 8%;
     margin-right: 3.5%;
  }
  .info-field__fieldname {
     width: 40%;
     font-weight: normal;
     color: #808080;
  }
  .info-field__data {
     width: 60%;
     font-weight: bold;
     color: #FFFFFF;
  }
  #filmlist {
     margin-top: 1%;
     justify-content:flex-start;
     align-items: baseline;
  }
  #filmlist ul{
      padding-left: 10%;
  }

@media screen and (min-width: 769px){
  .popup-wrapper {
     background: rgba(128, 128, 128, 0.01);
     backdrop-filter: blur(30px);
  }
  .popup {
     width: 800px;
     height: 492px;
  }
  .popup__header {
     width: 640px;
     height: 452px;
     padding-bottom: 0;
     justify-content: flex-start;
  }
  .popup__button {
     right: -58px;
     top: 20px;
  }
  .header-name__field{
     margin-left: 4%;
     letter-spacing: 0.05rem;
  }
  .popup__info-block {
     height: 360px;
     padding-top: 7.5%;
     padding-bottom: 8%;
     padding-left: 7.5%;
     flex-flow: column wrap;
     justify-content: flex-start;
     align-content: flex-start;
  }
  .popup__info-field {
     width: 39%;
     height: 33%;
     justify-content: flex-start;
     align-items: center;
  }
  .info-field__icon {
     width: 22px;
     height: 22px;
  }
  .info-field__fieldname {
      width: 35%;
  }
  .info-field__data {
      width: 45%;
  }
  #filmlist ul{
     padding-left: 0;
  }
}
</style>