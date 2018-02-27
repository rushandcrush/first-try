<template>
    <div class="conteiner-fluid">
        <div class="row">
            <div class="col-md-12">
                <div id="deadpool">
                    <div class="bg1 parallax-layer"></div>
                    <div class="bg2 parallax-layer"></div>
                </div>
                <div class="parallax" data-parallax="scroll" data-image-src="E:/Wallpaper/d16.jpg"></div>
                <div class="parallax" data-parallax="scroll" data-image-src="E:/Wallpaper/d17.jpg"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.parallax {
  min-height: 600px;
  margin: 30px
}
#deadpool {
  margin-top: 40px;
  background: url('img/ParallaxDead/2.png') no-repeat center center;
  width: 100%;
  height: 700px;
  overflow: hidden;
  position: relative;
  background-size: cover;
}
.parallax-layer {
  position: absolute;
}
.bg1 {
  background: url('img/ParallaxDead/1.png') no-repeat ;
    width:900px;
    height: 1300px;
}
.bg2 {
  background: url('img/ParallaxDead/3.png') no-repeat;
    width: 1920px;
    height: 1080px;
}
</style>
