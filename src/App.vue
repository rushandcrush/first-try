<template>
    <div>        
        <div class="container-fluid">   
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

body {
    
    max-width: 100%;
    overflow-x: hidden;
    background-color: #dadfeb;
}  
</style>
