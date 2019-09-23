<template>
  <div id="app">
   <PageHeader></PageHeader>
   <Preloader></Preloader>
   <SearchBar></SearchBar>
   <CardContainer></CardContainer>
   <PageFooter></PageFooter>-->
  </div>
</template>

<script>
import PageHeader from '../components/PageHeader'
import PageFooter from '../components/PageFooter'
import CardContainer from '../components/CardContainer'
import SearchBar from '../components/SearchBar'
import Preloader from '../components/Preloader'

export default {
  name: 'app',
  components: {
     PageHeader,
     SearchBar,
     Preloader,
     CardContainer,
     PageFooter,
  },
}
</script>

<style>
  #app {
    display: flex;
    flex-direction: column;
    width: 100vw;
    background: #333333;
  }
</style>
