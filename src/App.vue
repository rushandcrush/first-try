<template>
  <div>
    <div class="container">   
    <div class="row">   
      <div class="col-xs-12 col-sm-8  col-md-12" >
        <app-header></app-header>        
        
        <router-view></router-view>  
             
      </div>
    </div>
    
  </div>
  <app-footer></app-footer>
  </div>
  
  
</template>

<script>
import Header from './Header.vue'
import Footer from './components/HomeComponents/footer/Footer.vue'

export default {
  components: {
    appHeader: Header,
    appFooter: Footer
  }
}
</script>
  
<style>
  /* .container {
    padding: 0;
    margin: 0;
    width: 100%;
    
  } */
  body {
    max-width: 100%;
    overflow-x: hidden;
    background-color: #dadfeb;
}
  .container {
    /* min-width: 900px; */
  }
  
</style>
