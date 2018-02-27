<template>
    <footer>
        <div class="container">
            <div class="footerD row">
                <div 
                      class="col-md col-sm-6"
                      >
                      
                    <ul class="Fst-bott" style="padding:0">
                       <router-link to="/" tag="li" active-class="active"><a>Home</a></router-link>
                        <li class="nav-item">
                          <a class="nav-link" href="/fun">Fun</a>
                        </li>
                      <router-link to="/portfolio" tag="li" active-class="active"><a>Portfolio</a></router-link>
                      <router-link to="/test" tag="li" active-class="active"><a>Testimonial</a></router-link>
                      <router-link to="/blog" tag="li" active-class="active"><a>Blog</a></router-link>
                      <router-link to="/contact" tag="li" active-class="active"><a>Contact Us</a></router-link>
                    </ul>
                    <div class="col-md-12" style="padding:0">
                        <ul class="Snd-bott">
                          <li>&copy; 2010 WebCorp LLC |</li>
                          <li>Terms of service |</li>
                          <li>Privacy policy</li>
                        </ul>            
                    </div>
                    <div 
                          class="col-md-12" 
                          style="padding:0"
                          >
                      <p class="Thrd-bott">
                        icons courtesy  <a 
                                            href="IconFinder.com" 
                                            style="text-decoration: underline;
                                                  color: #dadfeb;"
                                                  >IconFinder.com
                                        </a>
                      </p>
                    </div>
                  
                </div>
                <div 
                      class="col-md text-right"
                              >
                    <div 
                          style="color: #dadfeb;"
                          >Connect with us: <a  :href="socialWeb.twitT"><img :src="imgs.tw"></a>
                                            <a  :href="socialWeb.faceB"><img :src="imgs.fb"></a>
                                            <a  :href="socialWeb.instaG"><img :src="imgs.inq"></a>
                                            <a  :href="socialWeb.googL"><img :src="imgs.ms"> </a>
                    </div>                      
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
                imgs: {
                  tw: tw,
                  fb: fb,
                  inq: inq,
                  ms: ms,                  
                },
                socialWeb: {
                  twitT: 'https://twitter.com/',
                  faceB: 'https://www.facebook.com/',
                  instaG: 'https://www.instagram.com/?hl=ru',
                  googL: 'https://www.google.com.ua'
                }
            }
        }
    }
</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Quicksand');
footer {
  background-color: #565f81;
  position:absolute;
  width: 100%;
}
.Snd-bott {
  margin-left:5px;
  margin-top: 5px;
  color: #9fa8bd;
  font-size: 15px;
}
.Thrd-bott {
  margin-left: 5px;
  margin-top:5px;
  color: #9fa8bd;
  margin-bottom: 30px;
}
img {
  margin-left: 10px;
  margin-right: 10px
}
ul {
  margin: 0;
  padding: 0;
}
li {
  color: #dadfeb;
  display: inline-block;
}
li>a {
  color: #dadfeb;
  margin-right: 5px;
  margin-left: 5px;
  font-family: 'Quicksand', sans-serif;
}
li>a:hover {
  color: #a69d9d
}
.footerD {
  margin-top: 25px;
  margin-bottom: 34px
}

</style>

