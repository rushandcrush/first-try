<template>
    <div class="container">
        <div class="row" style="margin: 85px auto;">
            <div class="col-md-12" >
                <div class="row">
                        <div class="col-sm-6 col-md">
                            <img 
                                class="img-responsive center-block"
                                :src="pictures.pen" 
                                alt="First picture" 
                                style="width: 51px;
                                        height: 51px" 
                                    >                        
                        </div>
                        <div class="col-sm-6 col-md">
                            <img 
                                class="img-responsive center-block"
                                :src="pictures.paper" 
                                alt="Second picture" 
                                style="width: 46px;
                                        height: 42px"
                                    >
                            
                        </div>
                        <div class="col-sm-6 col-md">
                            <img
                                class="img-responsive center-block" 
                                :src="pictures.option" 
                                alt="Third picture" 
                                style="width: 46px;
                                        height: 46px"
                                >
                        </div>
                        <div class="col-sm-6 col-md">
                            <img 
                                class="img-responsive center-block"
                                :src="pictures.folder" 
                                alt="Fourth picture" 
                                style="width: 55px;
                                        height: 38px"
                                >
                        </div>
                </div>
                <div class="row" style="text-align: center">
                    <div class="col-md">
                        <h4>
                            Web & App Design
                        </h4>
                        <p>
                            Nam liber tempor cum soluta nobis eleifend option
                            congue nihil imperdiet doming id quod mazim.
                        </p>
                        <hr>
                        </div>
                    <div class="col-md">
                        <h4 style="color: #c7b299;">
                            Development
                        </h4>
                        <p>
                            Lorem ipsum dolor sit amet, adipiscingelit, 
                            sed diam nonummy nibh euismod tincidunt ut laoreet.
                        </p>
                        <hr style="background-color: #c7b299;">
                    </div>
                    <div class="col-md">
                        <h4>Customization</h4>
                        <p>
                            Nam liber tempor cum soluta nobis eleifend option
                            congue nihil imperdiet doming id quod mazim.
                        </p>
                        <hr>
                    </div>
                    <div class="col-md">
                        <h4>
                            Marketing
                        </h4>
                        <p>
                            Nam liber tempor cum soluta nobis eleifend option
                            congue nihil imperdiet doming id quod mazim.
                        </p>
                        <hr>
                    </div>
                </div>              
            </div>
        </div>
    </div>
</template>

<script>
import Folder from '../PortfolioImg/SmallImg/Folder.png';
import Option from '../PortfolioImg/SmallImg/Option.png';
import Paper from '../PortfolioImg/SmallImg/Paper.png';
import Pen from '../PortfolioImg/SmallImg/Pen.png';
export default {
    data() {
        return {
            pictures: {
                folder: Folder,
                option: Option,
                paper: Paper,
                pen: Pen
            }
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat');
@import url('https://fonts.googleapis.com/css?family=Raleway');
.center-block {		
    display: block;
    margin-left: auto;
    margin-right: auto;
}
img {
    margin-bottom: 29px
}
h4 {   
    color: #555555;
    font-family: 'Raleway', sans-serif;
    font-size: 22px;
    font-weight: 400;
}
p {
    /* padding: 0; */
    color: #8c8c8c;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 300;
    line-height: 24px;
}
hr {
    width: 70px;
    height: 3px;
    background-color: #f1eee9;
}
</style>
