<template>
  <div class="header__container">
     <img class="header__logo" src="../assets/star.svg" alt="star">
     <p class="header__text">CHARACTER encyclopedia</p>
     <img class="header-title__img" src="../assets/title-mob.svg" alt="character encyclopedia">
     <img class="header__logo" src="../assets/wars.svg" alt="wars">
  </div>
</template>

<style>
  .header__container {
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     width: 100vw;
     min-width: 320px;
     height: 240px;
     background: url('../assets/header.png') no-repeat ;
     background-size: cover;
  }
  .header__logo {
      width: 212px;
      height: 50px;
  }
  .header-title__img {
      display: flex;
      width: 210px;
      height: 9px;
      margin: 2.2% auto;
  }
  .header__text {
      display: none;
  }

@media screen and (min-width: 769px){
  .header__container {
     min-height: 309px;
  }
  .header__text {
     display: flex;
     justify-content: center;
     align-items: center;
     height: 2vh;
     margin: 0.9% auto;
     font-family: Roboto, sans-serif;
     font-style: normal;
     font-weight: bold;
     font-size: 24px;
     line-height: 28px;
     text-align: center;
     text-transform: uppercase;
     letter-spacing: 0.14em;
     color: #FFFFFF;
     font-feature-settings: 'cpsp' on;
  }
  .header-title__img {
     display: none;
  }
  .header__logo {
     width: 406px;
     height: 97px;
  }
}
</style>