<template>
  <div class="card__block" :id="character.id" @click="$emit('popup')">
     <div class="card__info-block">
        <div class="card__avatar-img" :style="{ background: this.bgColor}">
            <p class="first-letter">{{character.name[0]}}</p>
        </div>
        <div class="card__info-block">
            <p class="info-block__name">{{character.name}}</p>
            <p class="info-block__species">{{character.species}}</p>
        </div>
     </div>
  </div>
</template>

<script>
  export default {
     name: 'CharacterCard',
     props: ['character'],
     computed: {
        bgColor: function () {
           return '#'+Math.random().toString(16).substr(-6);
        }
     }
  }
</script>

<style>
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
  .card__info-block {
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     font-family: Roboto, sans-serif;
     font-style: normal;
     text-align: center;
  }
  .card__avatar-img {
     display: flex;
     justify-content: center;
     align-items: center;
     width: 80px;
     height: 80px;
     border-radius: 50%;
  }
  .first-letter {
     font-weight: 500;
     font-size: 48px;
     line-height: 56px;
     text-transform: uppercase;
     color: #FFFFFF;
  }
  .card__info-block {
     width: 70%;
  }
  .info-block__name {
     width: 100%;
     margin-top: 10px;
     margin-bottom: 9px;
     font-weight: bold;
     font-size: 18px;
     line-height: 21px;
     text-align: center;
     color: #FFFFFF;
  }
  .info-block__species {
     width: 100%;
     font-weight: normal;
     font-size: 13px;
     line-height: 15px;
     color: #808080;
  }

@media screen and (min-width: 769px){
  .card__block {
     width: 41vw;
     max-width: 592px;
     min-height: 320px;
     margin: 1.7vh 1.2vw;
  }
}
</style>