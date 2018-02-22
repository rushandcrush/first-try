<template>
    <div class="container">
        <div class="row">
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
                                        class="btn btn-secondary"
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
    </div>
</template>

<script>
import Mountb from '../PortfolioImg/Carousel/CarouselPicture/Mountb.png'
import Mountx from '../PortfolioImg/Carousel/CarouselPicture/Mountx.png'
import Mounty from '../PortfolioImg/Carousel/CarouselPicture/Mounty.png'
import Mountz from '../PortfolioImg/Carousel/CarouselPicture/Mountz.png'
import Mountp from '../PortfolioImg/Carousel/CarouselPicture/Mountp.png'
export default {
  data() {
      return {
          Mountb: Mountb,
          Mountx: Mountx,
          Mounty: Mounty,
          Mountz: Mountz,
          Mountp: Mountp
      }
  }
}
</script>



<style scoped>
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
    background-image: url('../PortfolioImg/Carousel/arrow/leftr.png')
}
.carousel-control-next-icon {
    background-image: url('../PortfolioImg/Carousel/arrow/right.png');
}
.carousel-indicators li{
    width: 11px;
    height: 11px;
    background-color: #ffffff;
    opacity: 0.5;
    border-radius: 50%;
    cursor: pointer;
    /* background-image: url('../PortfolioImg/Carousel/points/02.png') */
}
.carousel-indicators .active {

border: 2px solid rgba(211,193,173,0.7);
background-color: rgba(255,255,255,0)
    /* background-image: url('../PortfolioImg/Carousel/points/04.png') */
}
.btn {
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
p {
    
    color: #ffffff;
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 300;
    /* line-height: 24px; */
}
.carousel-caption {
    top: 25%;
    bottom: auto;
}
    


</style>