<template>
    <div>
        <carousel>
            <carousel-slide>       
                <img :src='carouselStash.carousel1'>
            </carousel-slide>
            <carousel-slide>          
                <img :src='carouselStash.carousel2'>
            </carousel-slide>
            <carousel-slide>      
                <img :src='carouselStash.carousel3'>
            </carousel-slide>
            <carousel-slide>
                <img :src='carouselStash.carousel4'>
            </carousel-slide>
          </carousel>
    </div>
</template>

<script>
    import Carousel from './Carousel.vue';
    import CarouselSlide from './CarouselSlide.vue';

    export default {
        data() {
          return {
            carouselStash: {
              carousel1: 'https://images.pexels.com/photos/640781/pexels-photo-640781.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
              carousel2: 'https://images.pexels.com/photos/629167/pexels-photo-629167.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
              carousel3: 'https://images.pexels.com/photos/8633/nature-tree-green-pine.jpg?w=940&h=650&auto=compress&cs=tinysrgb',
              carousel4: 'https://images.pexels.com/photos/454880/pexels-photo-454880.jpeg?w=940&h=650&auto=compress&cs=tinysrgb'
            }
          }
        },
        components: {
        Carousel,
        CarouselSlide,
    },
}
</script>

<style scoped>
img {
  width: 100%; 
  height:462px
}  
</style>

