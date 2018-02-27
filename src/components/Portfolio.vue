<template>
  <div class="container-fluid" style="padding:0">
    <div class="row">
      <div class="col-md-12" style="padding: 0; ">
            
              <div class="row" style="padding: 0">
                  <div class="col-md-12">
                      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                          <ol class="carousel-indicators">
                              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                              <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                              <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                          </ol>
                          <div class="carousel-inner">
                              <div class="carousel-item active">
                                  <img 
                                      class="d-block w-100" 
                                      :src="Mountb" 
                                      alt="First slide">
                                  <div class="carousel-caption d-none d-md-block">
                                      <h5>
                                          Unique and Modern Design
                                      </h5>
                                      <h3>
                                          Portfolio PSD Template
                                      </h3>
                                      <p>
                                          Nam liber tempor cum soluta nobis eleifend 
                                          option congue nihil imper-<br>diet doming 
                                          id quod mazim placerat facer possim assum.
                                      </p>
                                      <button type="button" 
                                              class="mainbutt btn"
                                              >
                                          <span class="sometext">
                                              Get Started
                                          </span>
                                      </button>
                                  </div>
                              </div>
                              <div class="carousel-item">
                                  <img class="d-block w-100" :src="Mountx" alt="Second slide">
                              </div>
                              <div class="carousel-item">
                                  <img class="d-block w-100" :src="Mounty" alt="Third slide">
                              </div>
                              <div class="carousel-item">
                                  <img class="d-block w-100" :src="Mountz" alt="Fourth slide">
                              </div>
                              <div class="carousel-item">
                                  <img class="d-block w-100" :src="Mountp" alt="Fifth slide">
                              </div>
                          </div>
                          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span class="sr-only">Previous</span>
                          </a>
                          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                              <span class="carousel-control-next-icon" aria-hidden="true"></span>
                              <span class="sr-only">Next</span>
                          </a>
                      </div>
                       
              </div>
        </div>
        <app-design-line></app-design-line>       
        <app-waxom-idea></app-waxom-idea>
        <div class="brown-line row d-flex align-items-center">
            <div class="container">
                <div class="row">
                    <div class="col-md">
                        <h1 class="text-in-line">
                            <span style="color: #c7b299;">Waxom</span> Multipurpose WordPress Theme
                        </h1>
                        <p class="waxxp">
                            <span >Don't Forget to Rate the Template. Thanks so much!</span>
                        </p>
                    </div>
                    <div class="col-md-6 text-right" >
                        <button type="button" 
                                class="btn waxbutt"
                                >
                                    <span class="sometext">
                                        Purchase now
                                    </span>
                        </button>
                    </div>
                </div>                    
            </div>  
        </div>        
        <app-navigation></app-navigation>
            <div class="row">
                <div class="somephoto col-md-12" style="">                  
                <div class="parallflex" data-parallax="scroll" data-image-src="src/components/PortfolioComp/PortfolioImg/BackGr/photo.png" alt="photo"></div>
                </div>
            </div>       
        
        <div class="container" style="margin-top:79px">
            <div class="row">
                <div class="iphone col-md-4">
                    <img src="./PortfolioComp/PortfolioImg/Iphone/iphone.png" alt="iphone">
                </div>
                <div class="col-md" style="margin-top:100px; margin-left:30px">
                    <h1>Excellent for Mobile Devices.</h1>
                    <br>
                    <p class="iphonep">Qisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
                        Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius claritas. 
                        Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.
                    </p>
                    <ol style="margin-top:45px" class="backarrow">
                        <li>Nam liber tempor cum soluta nobis eleifend option;</li>
                        <li>Option congue nihil imperdiet doming id quod mazim placerat facer;</li>
                        <li>Eodem modo typi, qui nunc nobis videntur parum futurum;</li>
                        <li>Investigationes demonstraverunt lectores</li>
                    </ol>
                </div>
            </div>
        </div>
        <div class="brown-line2 row d-flex align-items-center">
        <div class="container">
            <div class="row">
                <div class="cupstext col-md">
                    <img src="./PortfolioComp/PortfolioImg/icon/icon.png" class="rounded mx-auto d-block" alt="" style="margin:0 auto;">
                    <h3 class="text-center numbers">3587</h3>
                    <p class="text-center underwords">Satisfied clients</p>
                    <hr>
                </div>
                <div class="cupstext col-md">
                    <img src="./PortfolioComp/PortfolioImg/icon/icon (1).png" class="rounded mx-auto d-block" alt="">
                    <h3 class="text-center numbers">200</h3>
                    <p class="text-center underwords">cups of coffe</p>
                    <hr>
                </div>
                <div class="cupstext col-md">
                    <img src="./PortfolioComp/PortfolioImg/icon/icon (2).png" class="rounded mx-auto d-block" alt="">
                    <h3 class="text-center numbers">2500</h3>
                    <p class="text-center underwords">blog posts</p>
                    <hr>
                </div>
                <div class="cupstext col-md">
                    <img src="./PortfolioComp/PortfolioImg/icon/icon (3).png" class="rounded mx-auto d-block" alt="">
                    <h3 class="text-center numbers">873</h3>
                    <p class="text-center underwords">likes</p>
                    <hr>
                </div>
                <div class="cupstext col-md">
                    <img src="./PortfolioComp/PortfolioImg/icon/icon (4).png" class="rounded mx-auto d-block" alt="">
                    <h3 class="text-center numbers">900</h3>
                    <p class="text-center underwords">we launched</p>
                    <hr>
                </div>
            </div>
        </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <app-awesome></app-awesome>
                </div>
            </div>
        </div>
        
      </div>     
    </div>
  </div>
</template>


<script>
// import PortfolioCar from './PortfolioComp/PortfolioCar/PortfolioCar.vue';
import DesignLine from './PortfolioComp/DesignBlock/DesignLine.vue';
import WaxomIdea from './PortfolioComp/WaxomIdeas/WaxomIdea';
import Navigation from './PortfolioComp/ButtonGroup/Navigation.vue';
import Mountb from './PortfolioComp/PortfolioImg/Carousel/CarouselPicture/Mountb.png'
import Mountx from './PortfolioComp/PortfolioImg/Carousel/CarouselPicture/Mountx.png'
import Mounty from './PortfolioComp/PortfolioImg/Carousel/CarouselPicture/Mounty.png'
import Mountz from './PortfolioComp/PortfolioImg/Carousel/CarouselPicture/Mountz.png'
import Mountp from './PortfolioComp/PortfolioImg/Carousel/CarouselPicture/Mountp.png'
import Awesome from './PortfolioComp/AwesomeCar/Awesome.vue'
export default {
    data() {
      return {
          Mountb: Mountb,
          Mountx: Mountx,
          Mounty: Mounty,
          Mountz: Mountz,
          Mountp: Mountp
      }
    },
    components: {
      // appPortfolioCar: PortfolioCar,
      appDesignLine: DesignLine,
      appWaxomIdea: WaxomIdea,
      appNavigation: Navigation,
      appAwesome: Awesome
    }
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Raleway');
@import url('https://fonts.googleapis.com/css?family=Montserrat');
hr {
    margin-top: 25px;
    width: 30px;
    height: 2px;
    background-color: #ffffff;
}
.underwords {
    color: #c7b299;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 300;
    line-height: 20px;
    text-transform: uppercase;  
}
.numbers {
    margin: 25px 0;
    color: #ffffff;
    font-family: "Montserrat";
    font-size: 48px;
    font-weight: 400;
    line-height: 36px;
}
.brown-line2 {
    padding: 0;    
    height: 300px;
    background-color: #f4f5f8;
    background-image: linear-gradient(to right, #211b19 0%, #4e3427 100%);
}
.somephoto {
    padding: 0; 
    margin-top:60px;
    position: relative;
    background-size: cover;
}
.backarrow>li {
    color: #8c8c8c;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 300;
    line-height: 32px;
    line-height: 2.5;
}
.backarrow>li::before {
    content: url('./PortfolioComp/PortfolioImg/Iphone/01.png');
    /* vertical-align: middle; */
    margin-right: 30px;
    
}
h1 {
    color: #555555;
    font-family: Raleway;
    font-size: 30px;
    font-weight: 400;
}
.iphonep {
    color: #8c8c8c;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 300;
    line-height: 28px;
}
.iphone {
    min-height: 500px;
    margin-left: 45px
    /* background-attachment: fixed */
}
.parallflex {
  min-height: 500px;
}
.brown-line {
    padding: 0;    
    height: 150px;
    background-color: #f4f5f8;
    background-image: linear-gradient(to right, #211b19 0%, #4e3427 100%);
}
.text-in-line {
    color: #ffffff;
    font-family: Raleway;
    font-size: 28px;
    font-weight: 400;
}
.waxbutt {
    margin-right: 15px;
    width: 170px;
    height: 53px;
    box-shadow: inset 0 -3px 0 #736357;
    border-radius: 3px;
    background-color: #998675;
}
.carousel-inner > .item > img {
    width: 100%;
    margin: auto;
}
.carousel-control-prev-icon,
.carousel-control-next-icon {    
    color: #d3c1ad;
    height: 75px;
    width: 42px;
}
.carousel-control-prev-icon {
    background-image: url('./PortfolioComp/PortfolioImg/Carousel/arrow/leftr.png')
}
.carousel-control-next-icon {
    background-image: url('./PortfolioComp/PortfolioImg/Carousel/arrow/rightr.png');
}
.carousel-indicators li{
    width: 11px;
    height: 11px;
    background-color: #ffffff;
    opacity: 0.5;
    border-radius: 50%;
    cursor: pointer;
}
.carousel-indicators .active {

border: 2px solid rgba(211,193,173,0.7);
background-color: rgba(255,255,255,0)
}
.mainbutt {
    margin-top: 52px;
    width: 170px;
    height: 53px;
    box-shadow: inset 0 -3px 0 #736357;
    border-radius: 3px;
    background-color: #998675;
}
.sometext {
    color: #ffffff;
    font-family:Raleway - Extra Bold;
    font-size: 14px;
    font-weight: 400;
    line-height: 23px;
    text-transform: uppercase;
}
h5 {
    color: #ffffff;
    font-family: Raleway;
    font-size: 36px;
    font-weight: 500;
}
h3 {
    color: #ffffff;
    font-family: Raleway - Extra Bold;
    font-size: 52px;
    font-weight: 700;
}
.waxxp {
    
    color: #ffffff;
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 300;
}
.carousel-caption {
    top: 25%;
    bottom: auto;
}
</style>

