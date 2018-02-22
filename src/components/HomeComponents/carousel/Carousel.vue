<template>
      <div class="carousel col-md-12">
          <slot></slot>
            <button 
                    class="arrow left" 
                    @click.prevent="prev"
                    >
                <svg  
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="60px" 
                        height="80px" 
                        viewBox="0 0 50 80" 
                        xml:space="preserve"
                        >
                    <polyline
                                fill="none" 
                                stroke="#000" 
                                stroke-width="1" 
                                stroke-linecap="round" 
                                stroke-linejoin="round" 
                                points="45.63,75.8 0.375,38.087 45.63,0.375 "
                                />
                </svg>  
            </button>
            <button 
                    class="arrow right" 
                    @click.prevent="next"
                    >
                <svg    
                        xmlns="http://www.w3.org/2000/svg" 
                        width="60px" 
                        height="80px" 
                        viewBox="0 0 50 80" 
                        xml:space="preserve"
                        >
                    <polyline
                                fill="none" 
                                stroke="#000" 
                                stroke-width="1" 
                                stroke-linecap="round" 
                                stroke-linejoin="round" 
                                points="0.375,0.375 45.63,38.087 0.375,75.8 "
                                />
                </svg>
            </button> 
            <div class="points">
                <button v-for="n in slidesCount" 
                        @click="goto(n-1)" 
                        :class="{active: n-1 == index}"
                        ></button>
            </div>
                     
      </div>
</template>

<script>
export default {
    data() {
        return {
            index: 0,
            slides: [],
            direction: null
        }
    },
    mounted() {
        this.slides = this.$children;
        this.slides.forEach((slide, i) => {
            slide.index = i
        })
    },
    computed: {
        slidesCount() {
            return this.slides.length
        }
    },
    methods: {
        next() {
            this.index++
            this.direction = 'right'
            if (this.index >= this.slidesCount) {
                this.index = 0
            }
        },        
        prev() {
            this.index--
            this.direction = 'left'
            if (this.index < 0) {
                this.index = this.slidesCount - 1
            }
        },
        goto(index) {
            this.direction = index > this.index ? 'right' : 'left';
            this.index = index
        }
    }
}
</script>

<style>
.carousel {
    margin: 0;
    padding: 0;
    position: relative;
    overflow: hidden;
}
button {
    -webkit-appearance: none;
    background: transparent;
    border: 0;
    outline:0;
}

svg {
    padding: 5px;
}

.arrow {
    cursor: pointer;
    position: absolute;
    top: 50%;
    margin-top: -45px;
    margin-left: -35px;
    width: 70px;
    height: 90px;
}

.left {
    left: 35px;
}

.right {
    right: -10px;
}

.left:hover polyline,
.left:focus polyline {
    stroke-width: 3;
}

.left:active polyline {
    stroke-width: 6;
    transition: all 100ms ease-in-out;
}

.right:hover polyline,
.right:focus polyline {
    stroke-width: 3;
}

.right:active polyline {
    stroke-width: 6;
    transition: all 100ms ease-in-out;
}

polyline {
    transition: all 250ms ease-in-out;
}
.points {
    position: absolute;
    bottom: 22px;
    left: 0;
    right: 0;
    text-align: center;
}
.points button {
    display: inline-block;
    width: 16px;
    height: 16px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.35);
    background-image: linear-gradient(to top, #c7c7c7 0%, #ffffff 100%);
    border-radius: 50%;
    margin: 0 13px
}
.points button.active {        
    box-shadow: 0 2px 0 #ffffff, inset 1px 2px 2px rgba(0, 0, 0, 0.75);
    background-image: linear-gradient(to top, #a0b0e6 0%, #4e63aa 51%, #5574b0 100%);
    opacity: 0.6;
}       
</style>
