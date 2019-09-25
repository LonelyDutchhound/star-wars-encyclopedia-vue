<template>
  <div class="footer__container">
      <p class="footer__text">STAR WARS CHARACTER Encyclopedia, 2019</p>
  </div>
</template>

<script>

</script>

<style>
  .footer__container {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 100vw;
      height: 104px;
      left: 0;
      top: 0;
      background-color: #1A1A1A;
  }
  .footer__text{
      width: 202px;
      height: 32px;
      text-align: center;
      font-family: Roboto, sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #FFFFFF;
  }

@media screen and (min-width: 769px) {
  .footer__container {
     height: 120px;
  }
  .footer__text{
      width: 490px;
      height: 21px;
      padding-top: 18px;
      font-size: 18px;
      line-height: 21px;
  }
}
</style>