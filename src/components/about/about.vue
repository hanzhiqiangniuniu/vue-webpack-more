<template>
   <div class="aboutUs">
     <v-nav></v-nav>
     <div class="aboutBg" id="aboutUs">
       <div class="auto">
         <div class="title">
           <h2>Meet the Career China Team</h2>
           <p class="titleWorld">
             Our international team is ready to help you along your new journey.
          </p>
         </div>
       </div>
       <!--<div class="out"></div>
       <div class="inner">
         <i class="down"></i>
       </div>-->
     </div>
     <div class="doing" id="doing">
       <div class="doAuto">
         <h2>What We Do</h2>
         <p>
           We help transform the lives of international professionals who wish to work in China, giving
           them the opportunity to earn a comfortable living, travel and immerse  themselves in a new
           culture, and gain transferable skills through global experience.
         </p>
         <img src="./careerchina-team-2.jpg" alt="">
       </div>
     </div>
     <div class="why">
       <div class="whyAuto">
         <h2>Why Career China</h2>
         <p>
           Career China  makes it easy  for  international professionals  by  providing a  full-service experience for
           our candidates.  There’s no need to worry about getting scammed.  Our trusted online platform allows
           overseas talent  to find quality jobs  in China with reputable companies, and conveniently apply online. 
           Our team is there for you from start to finish. 
         </p>
         <!--<img src="./CareerChina.png" alt="">-->
       </div>
     </div>
     <div class="sponsor">
       <div class="spAuto">
         <h2>Stability You Can Trust</h2>
         <div class="float clear">
           <div class="sLeft">
             <!--<img src="./logo1.png" alt="">-->
             <p>
               Career China is a business unit of TAL Education Group (NYSE, TAL), which was recently named a top education brand in China and is one of the top 100 most valuable brands in China.
             <br/>
             <br/>
With the support of the government, Career China only partners with reputable companies to ensure compliance with employment policies and procedures.
             </p>
           </div>
           <!--<div class="sRight">
             <img src="./logo2.png" alt="">
             <p>
               Career China  makes it easy  for  international professionals  by
               providing a  full-service experience for our candidates.  There’s
               no need to  worry  about getting scammed.  Our trusted online
               platform allows. 
             </p>
           </div>-->
         </div>
       </div>
     </div>
     <div class="who">
       <div class="whoAuto">
         <h2>Who We Are</h2>
         <p>
           Career China’s is based in Beijing, but has international marketing and recruiting staff in countries around the world such as the USA and the UK.  With years of experience in placing talented international with companies in China, it is our goal to match the right candidate with the right opportunity. 
         </p>
         <!--<ul class="picTab clear">
           <li class="picList"></li>
           <li class="picList"></li>
           <li class="picList"></li>
           <li class="picList"></li>
           <li class="picList"></li>
           <li class="picList"></li>
           <li class="picList"></li>
           <li class="picList"></li>
           <li class="picList"></li>
           <li class="picList noMar"></li>

           <li class="picList"></li>
           <li class="picList"></li>
           <li class="picList"></li>
           <li class="picList"></li>
           <li class="picList"></li>
           <li class="picList"></li>
           <li class="picList"></li>
           <li class="picList"></li>
           <li class="picList"></li>
           <li class="picList noMar"></li>

           <li class="picList"></li>
           <li class="picList"></li>
           <li class="picList"></li>
           <li class="picList"></li>
           <li class="picList"></li>
           <li class="picList"></li>
           <li class="picList"></li>
           <li class="picList"></li>
           <li class="picList"></li>
           <li class="picList noMar"></li>
         </ul>-->
         <img src="./careerchina-team-3.jpg" alt="">
       </div>
     </div>
     <div class="vis">
       <div class="visAuto">
         <h2>Vision</h2>
         <p>
           We support Chinese companies in their quest to be competitive in a globalized world, and transform
           the  lives  of  international  professionals  who  wish to earn  a comfortable  living, travel and immerse
           themselves in a new culture, and gain transferable skills through global experience. 
           <br><br>
           Working with reputable companies in China  and with the support of the government, we make conn
           ections based on careful consideration of the company's culture,  environment,  and goals along with
           the skills, experience levels, salary and lifestyle goals of international  candidates.   We further ensure
           a successful match by  providing premium  support services to  candidates to facilitate a  comfortable
           and easy transition into their new life in China. 
         </p>
       </div>
     </div>
     <div class="joir">
       <div class="joAuto">
         <h2>Join Us</h2>
         <p>
           We welcome new team members!  If you are interested in being a part of our growing Career China team, please browse open positions with Career China online or contact us directly. Please send your resume and cover letter to: <a href="mailto:jobs@careerchina.com" class="link">jobs@careerchina.com</a>  
         </p>
         <!--<ul class="joTab">
           <li class="joList">
             <i class="irIcon"></i>
             Marketing
           </li>
         </ul>
         <div class="joContent">
           <ul class="conTab">
             <li class="conList">
               <span class="columnOne"></span>
               <span class="columnTwo"></span>
               <i class="goIcon"></i>
             </li>
           </ul>
         </div>-->
       </div>
     </div>
     <v-goTop></v-goTop>
     <v-footer></v-footer>
   </div>
</template>

<script type="text/ecmascript-6">
  import $ from 'jquery';
  import '../../common/css/reset.min.css'
  import nav from '../public/nav/nav'
  import footer from '../public/footer/footer'
  import gotop from '../public/goTop/goTop'
  export default{
    components:{
      'v-footer':footer,
      'v-nav':nav,
      'v-goTop':gotop,
    },
  }
</script>

<style scoped>
  .aboutUs{
    width: 100%;
    height: 100%;
  }
  .aboutUs h2{
    margin-bottom: 40px;
    font-size: 40px;
    color: #262626;
    text-align: center;
    font-weight: 100;
  }
  .aboutUs p{
    margin: auto;
    font-size: 14px;
    color: #aeaeae;
    line-height: 25px;
    width: 592px;
  }
  .aboutBg{
    position: relative;
    width: 100%;
    height: 314px;
    background: url("careerchina-team-1.jpg")no-repeat center;
    background-size: cover;
    padding-top: 186px;
  }
  .aboutBg .auto{
    width: 1200px;
    height: 100%;
    margin: auto;
  }
  .aboutBg .auto .title h2{
    font-size: 40px;
    color: #fff;
    text-align: center;
    margin-bottom: 30px;
    font-weight: 600;
  }
  .aboutBg .auto .title .titleWorld{
    font-size: 16px;
    color: #fff;
    text-align: center;
    line-height: 26px;
  }
  .aboutBg .out{
    width: 82px;
    height: 82px;
    position: absolute;
    bottom: -41px;
    left: 50%;
    margin-left: -41px;
    border-radius: 50%;
    background: #fff;
    opacity: .18;
    filter: alpha(opacity=18);
    box-shadow: 0 10px 21px rgba(37,50,58,.81);
    z-index: 2;
  }
  .aboutBg .inner{
    width: 60px;
    height: 60px;
    position: absolute;
    bottom:-30px;
    left: 50%;
    margin-left: -30px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 5px 8px rgba(37,50,58,.14);
    z-index: 10;
  }
  .aboutBg .inner .down{
    display: block;
    background: url("down.png")no-repeat;
    width: 25px;
    height: 15px;
    margin: 22.5px 0 0 17.5px;
  }
  .doing{
    width: 100%;
    background: #fff;
  }
  .doing .doAuto{
    width: 900px;
    padding: 140px 150px;
    margin: auto;
  }
  .doing .doAuto p{
    width: 592px;
  }
  .doing .doAuto img{
    display: block;
    margin-top: 46px;
    width: 100%;
    height: 313px;
  }
  .why{
    width: 100%;
    background: #f5f5f5;
  }
  .why .whyAuto{
    padding: 60px 168px 93px 168px;
    width: 864px;
    margin: auto;
  }
  .why .whyAuto p{
    width: 664px;
  }
  .why .whyAuto img{
    display: block;
    margin-top: 50px;
    width: 100%;
    height: 115px;
  }
  .sponsor{
    position: relative;
    width: 100%;
    z-index: 2;
    background: url("gird.png")no-repeat;
    background-size: cover;
  }
  .sponsor .spAuto{
    padding: 85px 124px 85px 124px ;
    width: 952px;
    margin: auto;
  }
  .sponsor .spAuto .float .sLeft{
    width: 100%;
  }
  .sponsor .spAuto .float .sRight{
    float: right;
    width: 409px;
  }
  .sponsor .spAuto .float .sLeft img,.sRight img{
    display: block;
    margin:  0 0 59px 29px;
  }
  .sponsor .spAuto .float .sLeft img{
    margin-top: 28px;
  }
  .who{
    position: relative;
    width: 100%;
    background: #f6f0e8;
    z-index: 1;
  }
  .who .whoAuto{
    padding: 126px 183px 122px 183px;
    width: 834px;
    margin: auto;
  }
  .who .whoAuto p{
    width: 657px;
  }
  .who .whoAuto .picTab{
    width: 100%;
    margin-top: 68px;
  }
  .who .whoAuto .picTab .picList{
    float: left;
    width: 60px;
    height: 60px;
    margin:0 26px 16px 0;
    background: url("people.png")no-repeat;
  }
  .who .whoAuto .picTab .noMar{
    margin-right: 0;
  }
  .who .whoAuto img{
    width: 100%;
    display: block;
    margin-top: 30px;
    border-radius: 8px;
  }

  .vis{
    width: 100%;
    background: url("visBg.png")no-repeat;
    background-size: cover;
  }
  .vis .visAuto{
    padding: 73px 272px 98px 272px;
    width: 656px;
    margin: auto;
  }
  .vis .visAuto h2{
    color: #fff;
  }
  .vis .visAuto p{
    color: #fff;
  }
  .joir{
    width: 100%;
    background: #f5f5f5;
  }
  .joir .joAuto{
    width: 680px;
    padding: 86px 260px 150px 260px;
    margin: auto;
  }
  .joir .joAuto p .link{
    font-size: 14px;
    color: #3183e7;
  }
  .joir .joAuto p .link:hover{
    text-decoration: underline;
  }
</style>
