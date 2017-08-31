<template>
   <div class="our" id="ourImg">
     <v-nav></v-nav>
     <ul class="tab">
       <li>
         <a href="javascript:;" class="active" title="how to move to china">Our Service</a>
       </li>
       <li>
         <a href="job-placement-china.html" title="job placement China">Career Advice</a>
       </li>
       <li>
         <a href="china-work-visa.html" title="china work visa">Visa</a>
       </li>
       <li>
         <a href="moving-to-china.html" title="moving to china">Ground Service</a>
       </li>
     </ul>
     <div class="banner">
       <div class="auto">
         <div class="title">
           <h2>We're Here for Your Success</h2>
           <p class="titleWorld">
             Our team will help you every step of the way, providing support services to help you find the best job, <br/>and ensure a comfortable and smooth transition.
           </p>
         </div>
       </div>
     </div>
     <ul class="ourTab">
       <li class="tab_list clear">
         <div class="listLeft">
           <div class="titleBox">
             <i class="ad_icon"></i>
             <h4>Career Advice</h4>
           </div>
           <p class="adExplain">
             Our career consultants are available to advise you on job opportunities in China that are a right fit for you, based on your skills and qualifications, desired salary, and lifestyle interests.
           </p>
           <span class="line"></span>
           <a class="btn" href="job-placement-china.html" title="job placement China">Learn More</a>
         </div>
         <img src="./img3.png" class="listRight" alt="">
       </li>
       <li class="tab_list clear">
         <img src="./img2.png" class="listRight2" alt="">
         <div class="listLeft" style="margin-left: 178px">
           <div class="titleBox">
             <i class="Vi_icon"></i>
             <h4>Work Visa</h4>
           </div>
           <p class="adExplain">
             Obtaining a proper work visa in China can seem daunting, but that’s why we are here to help.  The Career China visa team is happy to walk you through the process, as well as providing you with checklists and sample documents, to ease your visa worries.
           </p>
           <span class="line"></span>
           <a class="btn" href="china-work-visa.html" title="china work visa">Learn More</a>
         </div>
       </li>
       <li class="tab_list clear">
         <div class="listLeft">
           <div class="titleBox">
             <i class="G_icon"></i>
             <h4>Ground Service</h4>
           </div>
           <p class="adExplain">
             We understand moving to China is exciting, but also a little nerve-wracking!  Our team can assist with making arrangements that will help with your transition into China.  Things like arranging for airport pick-up, and providing assistance with apartment rentals, bank accounts and setting up your phone.
           </p>
           <span class="line"></span>
           <a class="btn" href="moving-to-china.html" title="moving to china">Learn More</a>
         </div>
         <img src="./img1.png" class="listRight3" alt="">
       </li>
     </ul>
     <!--<div class="carousel">
       <div class="swiper-container">
         <div class="swiper-wrapper">
           <div class="swiper-slide">
             <img src="./person1.png" alt="">
             <div class="slideRight">
               <span class="til">Meet our professional team</span>
               <p class="speak">
                 Talking about some  Talking about some Talking about someTalking
                 about someTalking  about  someTalking  about  someTalking  about
                 someTalking   about  someTalking  about someTalking  about some
                 Talking about someTalking about someTalking about some
               </p>
               <div class="nameBox">
                 <strong>Tracy</strong>
                 <span class="brief">Visa Group Manager</span>
               </div>
               <i class="Quotes1"></i>
               <i class="Quotes2"></i>
             </div>
           </div>
           <div class="swiper-slide">slider2</div>
           <div class="swiper-slide">slider3</div>
         </div>
         <div class="swiper-pagination"></div>
       </div>
     </div>-->
     <v-goTop></v-goTop>
     <v-footer></v-footer>

   </div>
</template>

<script type="text/ecmascript-6">
  import $ from 'jquery'
  import Swiper from '../../common/js/swiper.min.js';
  import '../../common/css/swiper.min.css';
  import '../../common/css/reset.min.css'
  import '../../common/css/service.css'
  import nav from '../public/nav/nav'
  import footer from '../public/footer/footer'
  import gotop from '../public/goTop/serviceGotop'

  export default{
    name:'move',
    components:{
      'v-footer':footer,
      'v-nav':nav,
      'v-goTop':gotop,
    },
    mounted(){
      var mySwiper = new Swiper('.swiper-container', {
        autoplay: 9000,//可选选项，自动滑动
        pagination : '.swiper-pagination',
        paginationClickable :true
      });
    },
  }
</script>

<style scoped>
   .our{
     width: 100%;
   }
   .our img{
     visibility: visible;
     animation: none;
   }
   .our .banner{
     width: 100%;
     height: 342px;
     background:url("./China-visa-service-1.jpg")no-repeat center;
     background-size: cover;
     padding-top: 250px;
   }
   .our .banner .auto{
     width: 1200px;
     height: 100%;
     margin: auto;
   }
   .our .banner .auto .title h2{
     font-size: 40px;
     color: #fff;
     text-align: center;
     margin-bottom: 30px;
   }
   .our .banner .auto .title .titleWorld{
     font-size: 16px;
     color: #fff;
     text-align: center;
     line-height: 26px;
   }

   .our .ourTab{
     margin: auto;
     width: 981px;
     padding: 50px 94px 0 125px;
   }
   .our .ourTab .tab_list{
     margin-bottom: 180px;
     width: 100%;
   }
   .our .ourTab .tab_list .listLeft{
     width: 429px;
     float: left;
     margin-top: 40px;
   }
   .ourTab .tab_list .listLeft .titleBox{
     font-size: 0;
   }
   .ourTab .tab_list .listLeft .titleBox .ad_icon,.G_icon,.Vi_icon{
     display: inline-block;
     width: 50px;
     height: 50px;
     vertical-align: middle;
   }
   .ourTab .tab_list .listLeft .titleBox .ad_icon{
     background: url("./icon-career-advice.png")no-repeat;
   }
   .ourTab .tab_list .listLeft .titleBox .Vi_icon{
     background: url("./icon-work-visa.png")no-repeat;
   }
   .ourTab .tab_list .listLeft .titleBox .G_icon{
     background: url("./icon-ground-service.png")no-repeat;
   }
   .ourTab .tab_list .listLeft .titleBox h4{
     display: inline-block;
     margin-left: 10px;
     font-size: 18px;
     color: #262626;
     vertical-align: middle;
   }
   .ourTab .tab_list .listLeft .adExplain{
     margin-top: 14px;
     font-size: 14px;
     color: #9c9c9c;
     line-height: 18px;
   }
   .ourTab .tab_list .listLeft .line{
     display: block;
     margin: 18px 0 18px 0;
     width: 258px;
     height: 1px;
     background: #e0e0e0;
   }
   .ourTab .tab_list .listLeft .btn{
     display: block;
     width: 134px;
     height: 34px;
     line-height: 34px;
     background: #0ed666;
     text-align: center;
     color: #fff;
     border-radius: 5px;
     cursor: pointer;
   }
   .ourTab .tab_list .listLeft .btn:hover{
     background: #11b85b;
   }
   .our .ourTab .tab_list .listRight{
     float: right;
     /*width: 465px;
     height: 286px;*/
   }
   .our .ourTab .tab_list .listRight2{
     float: left;
     margin-left: 50px;
     width: 308px;
     height: 283px;
   }
   .our .ourTab .tab_list .listRight3{
     float: right;
     margin-right: 30px;
     width: 384px;
     height: 282px;
   }
   .carousel{
     width: 100%;
     height: 500px;
     background: #f3f4f6;
   }
   .swiper-container{
     width: 1200px;
     height: 100%;
   }
   .swiper-wrapper .swiper-slide img{
     float: left;
     margin: 47px 0 0 134px;
     width: 373px;
     height: 406px;
   }
   .swiper-wrapper .swiper-slide .slideRight{
     position: relative;
     float: left;
     margin:110px 0 0 135px;
     width: 507px;
   }
   .swiper-slide .slideRight .til{
     display: block;
     margin-bottom: 50px;
     font-size: 18px;
     color: #dfe0e1;
     font-weight: 600;
   }
   .swiper-slide .slideRight .speak{
     font-size: 16px;
     color: #a3a3a3;
     line-height: 25px;
   }
   .swiper-slide .slideRight .nameBox{
     margin-top: 40px;
     font-size: 0;
   }
   .swiper-slide .slideRight .nameBox strong{
     display: inline-block;
     font-size: 24px;
     color: #3f4449;
   }
   .swiper-slide .slideRight .nameBox .brief{
     display: inline-block;
     margin-left: 5px;
     font-size:14px ;
     color: #c4c4c4;
   }
   .swiper-slide .slideRight .Quotes1,.Quotes2{
     display: block;
     position: absolute;
     width: 32px;
     height: 28px;
   }
   .swiper-slide .slideRight .Quotes1{
     background: url("./quates1.png")no-repeat;
     top: 53px;
     left: -55px;
   }
   .swiper-slide .slideRight .Quotes2{
     background: url("./quates2.png")no-repeat;
     right: -10px;
     bottom: 45px;
   }

   /*.our .banner .auto{
     margin: auto;
     width: 1077px;
     height: 100%;
     padding:205px 0 0 123px ;
   }
   .our .banner .auto .title{
     width: 475px;
   }
   .banner .auto .title h2{
     margin-bottom: 20px;
     font-size: 30px;
     font-weight: 600;
     color: #fff;
   }
   .banner .auto .title .titleWorld{
     font-size:14px ;
     color: #fff;
     line-height: 22px;
   }*/
</style>
