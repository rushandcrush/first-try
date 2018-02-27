<template>
    <div class="container" style="padding:0">
        <div class="row">
            <div class="col-md-12" style="text-align: center; padding:0">
                <div class="top">
                        <h1>
                            Waxom is Reazlize of your ideas.
                        </h1>
                        <p>
                            Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. 
                            Claritas est etiam <br>processus dynamicus, qui sequitur mutationem consuetudium.
                        </p>
                </div>
                <div class="waxon-image col-md-12">
                    <img  :src="Wax1" alt="First Picture" class="wax1">
                    <img  :src="Wax2" alt="Second Picture" class="wax2" >
                    <img  :src="Wax3" alt="Third Picture" class="wax3">                   
                </div>                
            </div>
        </div>
        <!-- <div class="container" style="padding:0; margin-bottom: 10px">
                                                        
            </div> -->
    </div>
</template>

<script>
import Waxom1 from '../PortfolioImg/WaxomImg/Waxom1.png';
import Waxom2 from '../PortfolioImg/WaxomImg/Waxom2.png';
import Waxom3 from '../PortfolioImg/WaxomImg/Waxom3.png';
export default {
  data() {
      return {
          Wax1: Waxom1,
          Wax2: Waxom2,
          Wax3: Waxom3
      }
  },
  comonents: {

  }
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Raleway');
.waxom-image .wax1 {
    width: 770px; 
    height: 482px; 
    position:relative; 
    z-index: 1;
}
.wax2 { 
    width: 770px; 
    height: 400px; 
    position:absolute; 
    z-index:-1; 
    bottom:0; 
    right:0;
}
.wax3 {
    width: 770px; 
    height: 400px; 
    position:absolute; 
    z-index:-2; 
    bottom:0; 
    left:0; 
}
.top h1{
    margin-top: 70px;
    color: #555555;
    font-family: 'Raleway', sans-serif;
    font-size: 30px;
    font-weight: 400;
}
p{
    color: #8c8c8c;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 300;
    line-height: 28px;
}


</style>

