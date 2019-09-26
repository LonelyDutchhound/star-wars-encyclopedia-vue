<template>
  <div id="app">
   <PageHeader></PageHeader>
   <Preloader></Preloader>
   <ErrorPage></ErrorPage>
   <CardContainer></CardContainer>
  </div>
</template>

<script>
import PageHeader from '../components/PageHeader'
import CardContainer from '../components/CardContainer'
import Preloader from '../components/Preloader'
import ErrorPage from "../components/ErrorPage";

export default {
  name: 'app',
  components: {
     PageHeader,
     ErrorPage,
     Preloader,
     CardContainer,
  },
}
</script>

<style>
  #app {
     width: 100vw;
     height: 100vh;
  }
</style>
