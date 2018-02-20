<template>
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <app-car-main></app-car-main>
                <div class="row">
                    <div class="col-md-7" style="margin-top:35px">
                      <h3 class="text-alli">
                        We can make your online business<br>
                        easy & usable for all walks of people
                      </h3>
                    </div>
                    <div 
                          class="col-md-5 text-right" 
                          style="padding:0;
                                margin-top:20px">                      
                              <a href="/">
                                  <button>
                                      <img src="./img/Button/butt21.png">
                                  </button>
                              </a>                        
                    </div>      
                </div>        
            <app-inline></app-inline>          
        </div> 
              <div>
                    <app-col36></app-col36>
              </div>               
    </div>    
</div>  
</template>

<script>
    import CarMain from './HomeComponents/carousel/CarMain.vue'
    import Inline from './HomeComponents/Inline.vue'
    import Col36 from './HomeComponents/Col36.vue'
    export default {        
    data() {
        return {
          
          }
    },
    components: {
        appCarMain: CarMain,
        appInline: Inline,
        appCol36: Col36
    }
}
</script>

<style scoped>
  body {
    width: 100%;
    overflow: hidden;  
  }
  .text-alli {  
    color: #132445;
    font-family: Arial MT;
    font-size: 36px;
    font-weight: 400;
    line-height: 34px;
    top: 24px;
    margin: 0;
  }
</style>
