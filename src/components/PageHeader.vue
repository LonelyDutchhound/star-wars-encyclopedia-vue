<template>
  <div class="header__container">
      <img class="header__logo" src="../assets/star.png" alt="star">
      <p class="header__text">CHARACTER encyclopedia</p>
      <img class="header__logo" src="../assets/wars.png" alt="wars">
  </div>
</template>

<style>
  .header__container {
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     width: 100vw;
     height: 33.3vh;
     min-height: 309px;
     background: url('../assets/header.png') no-repeat ;
     background-size: cover;
  }
  .header__text {
      height: 28px;
      margin: 9px auto;
      left: 521px;
      top: 225px;
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
</style>