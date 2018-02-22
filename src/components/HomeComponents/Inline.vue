<template>
    <div class="container">
        <div class="row">
            <div class = "col-sm-8 col-md-12 ">
                <div class = "row">
                    <div class="group-line">
                        <hr>
                        <p class="horline"></p>           
                    </div >
                    <div class = "conttext col-sm-6 col-md ">
                        <img 
                                class="card-img-top" 
                                src='../img/NormalIcon/pic1.png' 
                                alt="Card image cap"
                                >
                            <h4>
                                Business Heading
                            </h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Aliquam tincidunt mi id libero egestas ut interdum nibh cursus. 
                                </p>
                                    <button class="btn">
                                        <a href="">
                                            Read more >
                                        </a>
                                    </button>
                    </div>
                    <div class = "conttext col-sm-6 col-md">
                        <img 
                                class="card-img-top" 
                                src='../img/NormalIcon/pic2.png' 
                                alt="Card image cap"
                                >
                            <h4>
                                Business Heading
                            </h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Aliquam tincidunt mi id libero egestas ut interdum nibh cursus. 
                                </p>
                                    <button class="btn">
                                        <a href="">
                                            Read more >
                                        </a>
                                    </button>
                    </div>
                    <div class = "conttext col-sm-6 col-md">
                        <img  
                                src='../img/NormalIcon/pic3.png' 
                                alt="Card image cap"
                                >
                            <h4>
                                Business Heading
                            </h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Aliquam tincidunt mi id libero egestas ut interdum nibh cursus. 
                                </p>
                                    <button class="btn">
                                        <a href="">
                                            Read more >
                                        </a>
                                    </button>
                    </div>
                    <div class = "conttext col-sm-6 col-md">
                        <img 
                                class="card-img-top" 
                                src='../img/NormalIcon/pic4.png' 
                                alt="Card image cap"
                                >
                            <h4>
                                Business Heading
                            </h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Aliquam tincidunt mi id libero egestas ut interdum nibh cursus. 
                                </p>
                                    <button class="btn">
                                        <a href="">
                                            Read more >
                                        </a>
                                    </button>   
                    </div>
                                  
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    data: function() {
        return {

        }
    },
        components: {
           
        }
    }
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Mukta+Malar');
.conttext {
    padding: 20px;
    background: #ffffff;
    margin-right: 15px;
    margin-left: 10px
}
.conttext h4 {

    margin-left:10px;
    margin-top: 10px;
    color: #132445;
    font-family: 'Mukta Malar', sans-serif;
    font-size: 20px;
    font-weight: 700;
}
.conttext p {
    margin-left:10px;
    margin-top: 10px;
    margin-right:10px;
    color: #545668;
    font-family: 'Mukta Malar', sans-serif;
    font-size: 15px;
    font-weight: 400;
}
.conttext .btn {
    margin-top: 10px;
    border-radius: 20px;
    box-shadow: 0 2px 2px rgba(60, 71, 98, 0.75);
    border: 1px solid #c6ccdc;
    background-image: linear-gradient(to top, #ccd0d9 0%, #ffffff 100%);
}
.group-line {
    width: 100%;
    margin-top:0;
    padding: 0;
    margin-bottom: 0;
}
.horline {
    width: 100%;
    height: 29px;
    background-image: linear-gradient(to top, #dadfeb 0%, #a9b9df 100%);
    opacity: 0.35;
}
img {
    width: 185px;
    height: 111px;        
}
hr {
    margin-bottom: 0;
    border: 0;
    height: 2px;
    background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0));
}
</style>


