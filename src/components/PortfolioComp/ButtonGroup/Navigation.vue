<template>
  <div class="container" >
      <div class="row" >
          <div class="col-md-12" style="padding: 0;
                                        margin-top: 80px">
              <div class="row">
                  <div class="col-md-12" style="text-align: center">
                      <h1>
                          Our Latest Projects.
                      </h1>
                      <p>
                          Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. 
                          Claritas est etiam<br> processus dynamicus, qui sequitur mutationem consuetudium.
                      </p>
                  </div>
              </div>
              <div class="row">
                  <div class="col-md-12">
                      <div class="row">
                          <div class="col-md-12 text-center">
                                <ul class="nav nav-pills center-pills">
                                    <li class="nav-item">
                                        <a class="nav-link active" data-toggle="pill" href="#all">All</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" data-toggle="pill" href="#design">Web Design</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" data-toggle="pill" href="#app">Mobile App</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" data-toggle="pill" href="#illustration">Illustration</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" data-toggle="pill" href="#photo">Photography</a>
                                    </li>
                                </ul>
                          </div>                            
                      </div>

                                <!-- Tab panes -->
                                <div class="tab-content">
                                    <div class="tab-pane active container" style="padding:0;
                                                                                    margin-top: 30px" id="all">
                                                                                     
                                        <div class="row">
                                            <div class="animated col-md">
                                                <ul class="list">
                                                    <li class="list_items" style="position: relative" v-for="photo in photos" :key="photo">
                                                        <span class="descr">
                                                            <div class="col-sm-6 col-md">
                                                                <a href="https://www.youtube.com/" target="_blank"><img src="../PortfolioImg/Navigation/link.png" style="height: 30px; width: 30px; position: absolute; left:35%; margin-top:35%" alt=""></a>
                                                                <img src="../PortfolioImg/Navigation/lupa.png" style="height: 30px; width: 30px; position: absolute; left:50%; margin-top:35%" alt="">
                                                            </div>
                                                            
                                                            </span>
                                                        <img :src="photo" alt="Alt">
                                                        
                                                    </li>
                                                </ul>
                                                    
                                                <!-- <ul class="list" v-show = "show" style="margin-top: 40px">
                                                    <li class="list_items" style="position: relative" v-for="photo in photos" :key="photo">
                                                        <span class="descr">
                                                            <div class="col-sm-6 col-md">
                                                                <a href="https://www.youtube.com/" target="_blank">
                                                                    <img src="../PortfolioImg/Navigation/link.png" style="height: 30px; width: 30px; position: absolute; left:35%; margin-top:35%" alt="">
                                                                </a>
                                                                <img src="../PortfolioImg/Navigation/lupa.png" style="height: 30px; width: 30px; position: absolute; left:50%; margin-top:35%" alt="">
                                                            </div>
                                                            
                                                            </span>
                                                        <img :src="photo" alt="Alt">
                                                        
                                                    </li>
                                                </ul> -->
                                                <div class="form-row text-center">
                                                        <div class="col-md-12">
                                                            <button class="btn" @click="change">{{button.text}}</button>
                                                            
                                                        </div>
                                                                                                                
                                                    </div>                                                    
                                                    
                                            </div>
                                            
                                            
                                        </div>
                                        
                                    </div>
                                    <div class="tab-pane container" id="design">
                                        Subway
                                    </div>
                                    <div class="tab-pane container" id="app">
                                        Blah blah blah
                                    </div>
                                    <div class="tab-pane container" id="illustration">
                                        ...
                                    </div>
                                    <div class="tab-pane container" id="photo">
                                        ...
                                    </div>
                                </div>

                        
                  </div>
              </div>                
          </div>
      </div>    
  </div>
</template>

<script>
import Picture1 from '../PortfolioImg/Navigation/Picture1.png';
import Picture2 from '../PortfolioImg/Navigation/Picture2.png';
import Picture3 from '../PortfolioImg/Navigation/Picture3.png';
import Picture4 from '../PortfolioImg/Navigation/Picture4.png';
import Picture5 from '../PortfolioImg/Navigation/Picture5.png';
import Picture6 from '../PortfolioImg/Navigation/Picture6.png';
export default {
  data() {
      return {
          photos: {
              Picture1,
              Picture2,
              Picture3,
              Picture4,
              Picture5,
              Picture6
            
          },
          show: false,
          button: {
              text: 'load more'
          }     
      }      
  },
    methods: {
        change: function() {            
            this.show = !this.show
            this.button.text = this.show ? 'hide' : 'load more';
            
        }
      }
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat');
@import url('https://fonts.googleapis.com/css?family=Raleway');
@import url('https://fonts.googleapis.com/css?family=Raleway');
li a{
    border-radius: 3px;
    border: 1px solid #998675;
    background-color: rgba(11,11,11,0);
    color: #8c8c8c;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 300;
    line-height: 21px;
    
}
.nav>li>a.active,
.nav>li>a:hover,
.nav>li>a:focus {
   background-color: #998675;
   color: white;
}
.center-pills {
    display: inline-block;
}
h1 {
    color: #555555;
    font-family: 'Raleway', sans-serif;
    font-size: 30px;
    font-weight: 600;
}
p {
    color: #8c8c8c;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 300;
    line-height: 28px;
}
img {
    margin-top: 30px;
    margin: 10px;
    height: 327px;
}
.descr {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    opacity: 0;
    -webkit-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
}
.animated li:hover .descr {
    opacity: 1;
}
.btn {
    margin-top: 40px;
    width: 170px;
    height: 50px;
    box-shadow: inset 0 -3px 0 #736357;
    border-radius: 3px;
    background-color: #998675;
    color: #ffffff;
    font-family: 'Raleway', sans-serif;
    font-size: 14px;
    font-weight: 600;
    line-height: 23px;
    text-transform: uppercase;
}

</style>
