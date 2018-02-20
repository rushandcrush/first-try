<template>
    <footer>
      <div class="container">
        <div class="row">
            <div class="col-md-5 col-sm-6" style="margin-left: 25px">
              <h5 class="Fst-bott">
              Home |  Services   |   Portfolio   |   Testimonial   |   Blog   |   Contact Us
            </h5>
            <div class="col-md-12" style="padding:0">
                <p class="Snd-bott" >
              &copy; 
              2010 WebCorp LLC | Terms of service | Privacy policy
            </p>
            
            </div>
            <div class="col-md-12" style="padding:0">
              <p class="Thrd-bott">
            icons courtesy <a href="IconFinder.com" style="text-decoration: underline;
                                                           color: #dadfeb;">IconFinder.com</a>
            </p>
            </div>
            
          </div>
          <div class="col-md-6 text-right" style="margin-top: 20px;
                                                  margin-left: 55px">
            <div style="color: #dadfeb;">Connect with us: <img :src="tw"><img :src="fb"><img :src="inq"><img :src="ms"> </div>
          </div>
        </div>
      </div>
        
    </footer>
</template>

<script>
import fb from '../../img/FB/fb.png';
import inq from '../../img/FB/inq.png';
import ms from '../../img/FB/ms.png';
import tw from '../../img/FB/tw.png'
export default {
  data:function() {
    return {
        fb: fb,
        inq: inq,
        ms: ms,
        tw: tw
    }
  }
}
</script>


<style>
  footer {
    background-color: #565f81;
    position:absolute;
    width: 100%;
  }
  .Fst-bott {
    margin-top: 20px;
    color: #dadfeb;
    font-family: Arial MT;
    font-size: 18px;
    line-height: 24px;
  }
  .Snd-bott {
    color: #9fa8bd;
    font-size: 13px;
  }
  .Thrd-bott {
    color: #9fa8bd;
    margin-bottom: 30px;
  }
  img {
    margin-left: 10px;
    margin-right: 10px
  }
  

</style>

