<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <nav class="navbar navbar-default">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <router-link to='/' class="navbar-brand" style="cursor: pointer">Corporatix<br>
                                <span 
                                    style="font-size:15px;
                                    letter-spacing: -0.9px;
                                    text-align: center"
                                        >Corporate business PSD Template
                                </span>
                            </router-link>
                        </div>

                        <div class="collapse navbar-collapse">
                            <ul class="nav navbar-nav navbar-right">
                                <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
                                <router-link to="/fun" tag="li" active-class="active"><a>Fun</a></router-link>
                                <router-link to="/portfolio" tag="li" active-class="active"><a>Portfolio</a></router-link>
                                <router-link to="/test" tag="li" active-class="active"><a>Testimonial</a></router-link>
                                <router-link to="/blog" tag="li" active-class="active"><a>Blog</a></router-link>
                                <router-link to="/contact" tag="li" active-class="active"><a>Contact Us</a></router-link>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>            
        </div>
    </div>        
</template>

<script>
    export default {  
    
    }
</script>

<style scoped>
.navbar-default {
    background-color: #dadfeb;
    /* width: 80%; */
    /* height: 80px; */
    border-width: 0 0 0px;
    padding: 0;
    margin: 0;
}
.navbar-default .navbar-brand {      
    text-shadow: 1px 1px 2px #ffffff;
    color: #6168aa;
    font-size: 45px;
    font-weight: 400;
}
.navbar ul {
    margin-top: 39px;
    margin-bottom: 37px;
}
.navbar-default .navbar-nav > .active > a, 
.navbar-default .navbar-nav > .active > a:hover, 
.navbar-default .navbar-nav > .active > a:focus {
    color: black;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.35);
    border-radius: 20px;
    background-image: linear-gradient(to top, #c7c7c7 0%, #ffffff 100%);
    height: 3vw;
}
.navbar-default .navbar-nav > li > a:hover, 
.navbar-default .navbar-nav > li > a:focus {
    color: black;
}
.navbar-default .navbar-nav > li > a {
    color: blue;
}
br {
    content: " ";
}
    
</style>
