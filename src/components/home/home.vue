<template>
  <div class="home">
    <v-nav></v-nav>
    <div class="banner">
      <!--<img src="./working-in-China-1.jpg" alt="">-->
      <div class="Title">
        <h1>Your Story in China is Just Beginning</h1>
        <p class="introduce">
          Live an exciting lifestyle, travel to exotic lands, and earn a good living by working in China.
        </p>
        <div class="linkBox">
          <a href="jobs-in-china.html" class="draw meet" title="Jobs in China">
            Explore Opportunities
          </a>
          <a href="how-to-move-to-china.html" class="draw meet" title="how to move to China">
            View Services
          </a>
        </div>
      </div>
      <div class="videoMask">
        <div class="playBox">
          <span class="maskTitle">Watch the Journey Unfold</span>
          <i class="but" @click="paly"></i>
        </div>
      </div>
    </div>
    <div class="maskblock" v-show="mask" @click="playNo"></div>
    <div class="videoBox" v-show="clickPlay">
      <video id="myVideo" src="http://careerchina-material.oss-us-west-1.aliyuncs.com/video/6c0db396-c9be-4841-8582-98a5c64c58c2.mp4" controls width="100%" height="100%" ></video>
    </div>
    <div class="programsBoard">
      <div class="auto">
        <h2>Featured Opportunities Abroad</h2>
        <ul class="pTab clear">
          <li class="pList pList1">
            <h6>First Leap China</h6>
            <span>￥13000-18000/month</span>
            <span>Nationwide</span>
            <p class="occ">Esl Teacher</p>
            <p class="describe">Teach young kids aged 2-15 years old </p>
            <a href="company/First-Leap-China.html" class="every draw meet" title="First Leap China">View Company</a>
          </li>
          <li class="pList pList2">
            <h6>Meten</h6>
            <span>￥11000-15000/month</span>
            <span>Nationwide</span>
            <p class="occ">English Teacher</p>
            <p class="describe">5-20 students for one class </p>
            <a href="company/Meten-Education-Group.html" class="every draw meet" title="Meten">View Company</a>
          </li>
          <li class="pList pList3">
            <h6>Kids R Kids</h6>
            <span>￥13000-16000/month</span>
            <span>Nanjing & Beijing</span>
            <p class="occ">Kindergarten Teacher</p>
            <p class="describe">15-18 students (age 2-3) in one class </p>
            <a href="company/Kids-R-Kids.html" class="every draw meet" title="Kids R Kids">View Company</a>
          </li>
          <li class="pList pList4">
            <h6>RDFZ Xishan</h6>
            <span>￥27000-30000/month</span>
            <span>Beijing</span>
            <p class="occ">Advanced Placement Teacher</p>
            <p class="describe">Teach AP subjects </p>
            <a href="company/RDFZ-Xishan-School.html" class="every draw meet" title="RDFZ Xishan">View Company</a>
          </li>
        </ul>
        <a href="companies-in-china.html" class="view draw meet" title="Companies in China">View All</a>
      </div>
    </div>

    <div class="travelBroad">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide swiper-slide1">
            <div class="auto">
              <div class="travelDes">
                <h2 class="traTitle">Live in China</h2>
                <p class="traCon">
                  Living in China is more exciting than many think. Cities are bustling with restaurants, bars, shopping & entertainment. Gyms, activity clubs & social groups make it easy to make friends. Beyond a busy social life, expat salaries typically allow a comfortable lifestyle, a modern apartment & money to save!
                </p>
                <a href="live-in-china.html" class="read draw meet" title="live in China">Read More</a>
              </div>
            </div>
          </div>
          <div class="swiper-slide swiper-slide2">
            <div class="auto">
              <div class="travelDes">
                <h2 class="traTitle">Travel in China</h2>
                <p class="traCon">
                  Being in the heart of Asia, it’s easy to explore more than just the countryside of this ancient culture. Low-cost airlines and a vast network of trains enable convenient & inexpensive access to nearby countries. From laying on the beaches of Thailand, skiing in Japan, trekking in Vietnam or meditating in India.
                </p>
                <a href="travel-in-china.html" class="read draw meet" title="travel in China">Read More</a>
              </div>
            </div>
          </div>
          <div class="swiper-slide swiper-slide3">
            <div class="auto">
              <div class="travelDes">
                <h2 class="traTitle">Work in China</h2>
                <p class="traCon">
                  Not only can expats earn a good living by working in China, but having international work experience is a huge benefit in today’s competitive job market. Plus, transferrable skills go beyond just working on a diverse team. Daily life such as communicating and problem- solving build lifetime character.
                </p>
                <a href="work-in-china.html" class="read draw meet" title="work in China">Read More</a>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>


    <div class="videoBox" v-show="video1">
      <video id="myVideo1" src="http://careerchina-material.oss-us-west-1.aliyuncs.com/video/92d5c4a7-5894-439e-9150-f6d270bcc96e.mp4" width="100%" height="100%" controls></video>
    </div>
    <div class="videoBox" v-show="video2">
      <video id="myVideo2" src="http://careerchina-material.oss-us-west-1.aliyuncs.com/video/48ec01e1-499a-42a7-a80d-4ba0701e9f7a.mp4" width="100%" height="100%" controls></video>
    </div>
    <div class="videoBox" v-show="video3">
      <video id="myVideo3" src="http://careerchina-material.oss-us-west-1.aliyuncs.com/video/43aba01b-3fb3-413e-b89c-5eb0a04a4074.mp4" width="100%" height="100%" controls></video>
    </div>
    <div class="peopleBroad">
      <div class="auto" id="auto">
        <div class="switchCon">
          <i class="peoPic peo1"></i>
          <span class="peoTitle">Josh from Atlanta, Georgia USA</span>
          <b></b>
          <p class="peoDes">
            As soon as we landed, it was reassuring that this was the right thing.  We were greeted at the airport with smiling faces from people from my school.
          </p>
          <i class="quotesL"></i>
          <i class="quotesR"></i>
        </div>
        <div class="switchCon conShow">
          <i class="peoPic peo2"></i>
          <span class="peoTitle">Thea from Tampa, Florida USA</span>
          <b></b>
          <p class="peoDes">
            I was tired of the same mundane routine, everyday doing the same thing.  I wanted adventure, I wanted excitement.  So I figured China would do that for me.
          </p>
          <i class="quotesL"></i>
          <i class="quotesR"></i>
        </div>
        <div class="switchCon">
          <i class="peoPic peo3"></i>
          <span class="peoTitle">Daniel from Leeds, UK</span>
          <b></b>
          <p class="peoDes">
            The thing that surprised me the most about moving to China is the opportunities and the chance to make good money here.
          </p>
          <i class="quotesL"></i>
          <i class="quotesR"></i>
        </div>
        <ul class="videoTab clear">
          <li class="videoList v1" @click="videoOne">
            <!--<video src="http://careerchina-material.oss-us-west-1.aliyuncs.com/video/92d5c4a7-5894-439e-9150-f6d270bcc96e.mp4" width="100%" height="100%" poster="./Josh.png"></video>-->
            <i class="videoPlay"></i>
          </li>
          <li class="videoList v2 gl"  @click="videoTwo">
            <!--<video src="http://careerchina-material.oss-us-west-1.aliyuncs.com/video/48ec01e1-499a-42a7-a80d-4ba0701e9f7a.mp4" width="100%" height="100%"></video>-->
            <i class="videoPlay playShow"></i>
          </li>
          <li class="videoList v3"  @click="videoThree">
            <!--<video src="http://careerchina-material.oss-us-west-1.aliyuncs.com/video/92d5c4a7-5894-439e-9150-f6d270bcc96e.mp4" width="100%" height="100%"></video>-->
            <i class="videoPlay"></i>
          </li>
        </ul>
      </div>
    </div>

    <div class="serBroad">
      <div class="auto">
        <h2>Services You (and Your Family) Can Trust </h2>
        <p class="serTag">
          Career China makes it easy to ﬁnd a secure job in China with a reputable company.   We’re here for you every step of the way,
ensuring a comfortable transition to your life in China.
        </p>
        <ul class="serTab clear">
          <li class="serList">
            <i class="visa"></i>
            <span class="serName">Visa Walkthrough</span>
          </li>
          <li class="serList">
            <i class="advice"></i>
            <span class="serName">Career Advice</span>
          </li>
          <li class="serList">
            <i class="health"></i>
            <span class="serName">Health Insurance</span>
          </li>
          <li class="serList marRNo">
            <i class="airport"></i>
            <span class="serName">Airport Pickup</span>
          </li>
          <li class="serList marL">
            <i class="apartment"></i>
            <span class="serName">Apartment Advice</span>
          </li>
          <li class="serList">
            <i class="bank"></i>
            <span class="serName">Banking Support</span>
          </li>
          <li class="serList marRNo">
            <i class="phone"></i>
            <span class="serName">Phone/SIM Help</span>
          </li>
        </ul>
        <a href="how-to-move-to-china.html" class="serBtn draw meet" title="how to move to China">Learn More</a>
      </div>
    </div>

    <div class="institutesBroad">
      <div class="auto">
        <h2>We Only Work With Top Chinese Companies</h2>
        <div class="imgBox">
          <img src="./icon-institutes.jpg" alt="tag the school logo images">
        </div>
        <a href="http://business.careerchina.com" class="view draw meet" target="_blank">Register as Employer</a>
      </div>
    </div>

    <!--<div class="emSu">
      <div class="auto">
        <h2>Join The Community Now</h2>
        <p class="emDes">Never miss any Hot Jobs and Posts in Career China, when you sign up for us.</p>
        <div class="inputBox">
          <input id="text" type="text" placeholder="Your email address" v-model="Usertext" @focus="styleState">
          <button class="inputBtn bg1" id="inputBtn" @click="submit" :disabled="boolean">
            Join
          </button>
          <div class="worBox" v-show="emailNull">
            <span class="sj"></span>
            <i class="worIcon"></i>
            <span class="worWord">Please submit in right format.</span>
          </div>
          <div class="worBox" v-show="formatError">
            <span class="sj"></span>
            <i class="worIcon"></i>
            <span class="worWord">Please submit in right format.</span>
          </div>
          <div class="suBox" v-show="success">
            <span class="sj"></span>
            <span class="suWord">We get you! Thanks for joining us!</span>
          </div>
          <div class="inputMask" v-show="inputMask"></div>
        </div>
      </div>
    </div>-->
    <v-submitEmail></v-submitEmail>
    <v-goTop></v-goTop>
    <v-footer></v-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import $ from 'jquery'
  import '../../common/css/reset.min.css'
  import Swiper from '../../common/js/swiper.min.js';
  import '../../common/css/swiper.min.css';
  import nav from '../public/nav/nav'
  import footer from '../public/footer/footer'
  import gotop from '../public/goTop/goTop'
  import submitEmail from '../public/submit/submitEmail'
  export default{
    name: 'home',
    data(){
      return{
        Usertext:'',
        emailNull:false,
        formatError:false,
        success:false,
        mask:false,
        clickPlay:false,
        video1:false,
        video2:false,
        video3:false,
        inputMask:false,
        interfaceStr:'devb'
      }
    },
    components:{
      'v-footer':footer,
      'v-nav':nav,
      'v-goTop':gotop,
      'v-submitEmail':submitEmail
    },
    mounted(){
      var mySwiper = new Swiper('.swiper-container', {
        autoplay: 5000,//可选选项，自动滑动
        pagination: '.swiper-pagination',
        paginationClickable: true,
        paginationBulletRender: function (swiper, index, className) {
          return '<span class="' + className + ' pageList"></span>';
        }
      });
      let oAuto=document.getElementById('auto'),
          aDiv=oAuto.getElementsByTagName('div'),
          aLi=oAuto.getElementsByTagName('li');
      for(let i=0;i<aLi.length;i++){
          aLi[i].index=i;
          aLi[i].onmouseover=function () {
            for(let i=0;i<aLi.length;i++){
                aLi[i].classList.remove('gl');
                aDiv[i].className='switchCon';
                aLi[i].lastChild.style.display='none';
            }
            aLi[i].classList.add('gl');
            aDiv[this.index].className='switchCon conShow';
            aLi[i].lastChild.style.display='block'
          };
      }
    },
    methods:{
      paly(){
          this.clickPlay=true;
          this.mask=true;
        document.getElementById('myVideo').play()
      },
      playNo(){
        this.clickPlay=false;
        this.video1=false;
        this.video2=false;
        this.video3=false;
        this.mask=false;
        document.getElementById('myVideo').pause()
        document.getElementById('myVideo1').pause()
        document.getElementById('myVideo2').pause()
        document.getElementById('myVideo3').pause()
      },
      videoOne(){
        this.video1=true;
        this.mask=true;
        document.getElementById('myVideo1').play()
      },
      videoTwo(){
        this.video2=true;
        this.mask=true;
        document.getElementById('myVideo2').play()
      },
      videoThree(){
        this.video3=true;
        this.mask=true;
        document.getElementById('myVideo3').play()
      },
      styleState(){
        var aInputBtn=document.getElementById('inputBtn'),
          aText=document.getElementById('text');
        aInputBtn.className='inputBtn';
        aText.style.color='#262626';
        this.formatError=false;
        this.emailNull=false;
      },
    },
  }
</script>

<style>
  .home{
    width: 100%;
    height: 100%;
  }
  .home .auto{
    width: 1200px;
    margin: auto;
  }
  .home h2{
    font-size: 30px;
    color: #fff;
    font-weight: 400;
  }
  .banner{
    position: relative;
    width: 100%;
    height: 600px;
    background: url("./working-in-China-1.jpg") no-repeat center;
    background-size: cover;
  }
  .banner .Title{
    position: absolute;
    top:0;
    left:50%;
    width: 1000px;
    height: 100%;
    padding: 0 100px;
    margin-left: -600px;
  }
  .banner .Title h1{
    margin: 130px 0 30px 0;
    font-size: 52px;
    color: #fff;
    font-weight: 400;
    text-align: center;
  }
  .banner .Title .introduce{
    font-size: 18px;
    color: #fff;
    text-align: center;
  }
  .banner .Title .linkBox{
    margin: 76px auto;
    width: 638px;
    font-size: 0;
  }
  .draw{
    display: inline-block;
    margin-right: 38px;
    width: 298px;
    height: 58px;
    line-height: 58px;
    font-size: 18px;
    color: #fff;
    text-align: center;
    border-radius: 4px;
    border: 0;
    box-sizing: border-box;
    box-shadow: inset 0 0 0 1px #fff;
    text-transform: capitalize;
    position: relative;
    vertical-align: middle;
  }
  .draw::before, .draw::after {
    box-sizing: border-box;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
  .draw {
    -webkit-transition: color 0.25s;
    transition: color 0.25s;
  }
  .draw::before, .draw::after {
    border: 2px solid transparent;
    width: 0;
    height: 0;
  }
  .draw::before {
    top: 0;
    left: 0;
  }
  .draw::after {
    bottom: 0;
    right: 0;
  }
  .draw:hover::before, .draw:hover::after {
    width: 100%;
    height: 100%;
  }
  .draw:hover::before {
    -webkit-transition: width 0.25s ease-out, height 0.25s ease-out 0.25s;
    transition: width 0.25s ease-out, height 0.25s ease-out 0.25s;
  }
  .draw:hover::after {
    -webkit-transition: border-color 0s ease-out 0.5s, width 0.25s ease-out 0.5s, height 0.25s ease-out 0.75s;
    transition: border-color 0s ease-out 0.5s, width 0.25s ease-out 0.5s, height 0.25s ease-out 0.75s;
  }
  .meet:hover {
    color: #fff;
  }
  .meet::after {
    top: 0;
    left: 0;
  }
  .meet:hover::before {
    border-top-color: #fff;
    border-right-color: #fff;
  }
  .meet:hover::after {
    border-bottom-color: #fff;
    border-left-color: #fff;
    -webkit-transition: height 0.25s ease-out, width 0.25s ease-out 0.25s;
    transition: height 0.25s ease-out, width 0.25s ease-out 0.25s;
  }
  .banner .Title .linkBox a:last-child{
    margin-right: 0;
  }
  .banner .videoMask{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 80px;
    background: rgba(0,0,0,.5);
  }
  .banner .videoMask .playBox{
    margin: auto;
    width: 340px;
    font-size: 0;
  }
  .banner .videoMask .playBox .maskTitle{
    display: inline-block;
    height: 100%;
    line-height: 80px;
    font-size: 20px;
    color: #fff;
    vertical-align: middle;
    margin-right: 30px;
  }
  .banner .videoMask .playBox .but{
    display: inline-block;
    width: 45px;
    height: 45px;
    background: url("button-play.png")no-repeat;
    background-size: cover;
    vertical-align: middle;
    cursor: pointer;
    -webkit-animation: bounce .8s linear 0s 2 both;
  }
  @-webkit-keyframes bounce {
    from, 20%, 53%, 80%, to{
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      -webkit-transform: translate3d(0,0,0);
      transform: translate3d(0,0,0);
    }
    40%, 43% {
      -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
      animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
      -webkit-transform: translate3d(0,-30px,0);
      transform: translate3d(0,-30px,0);
    }
    70%{
      -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
      animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
      -webkit-transform: translate3d(0,-15px,0);
      transform: translate3d(0,-15px,0);
    }
    90%{
      -webkit-transform: translate3d(0,-4px,0);
      transform: translate3d(0,-4px,0);
    }
  }
  @keyframes bounce {
    from, 20%, 53%, 80%, to{
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      -webkit-transform: translate3d(0,0,0);
      transform: translate3d(0,0,0);
    }
    40%, 43%{
      -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
      animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
      -webkit-transform: translate3d(0,-30px,0);
      transform: translate3d(0,-30px,0);
    }
    70%{
      -webkit-animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
      animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
      -webkit-transform: translate3d(0,-15px,0);
      transform: translate3d(0,-15px,0);
    }
    90%{
      -webkit-transform: translate3d(0,-4px,0);
      transform: translate3d(0,-4px,0);
    }
  }
  .maskblock{
    width: 100%;
    height: 100%;
    position:fixed;
    top:0;
    left: 0;
    overflow: hidden;
    background:rgba(0,0,0,.4) ;
    z-index: 50;
  }
  .videoBox{
    width: 800px;
    height: 400px;
    position: fixed;
    top:50%;
    left: 50%;
    margin-top: -200px;
    margin-left: -400px;
    z-index: 99;
    background: #000;
  }


  .programsBoard{
    width: 100%;
    background: #fff;
    padding: 60px 0;
  }
  .programsBoard .auto h2{
    margin-bottom: 60px;
    text-align: center;
    color: #262626;
  }
  .programsBoard .auto .pTab{
    width: 100%;
    margin-bottom: 60px;
  }
  .programsBoard .auto .pTab .pList{
    float: left;
    margin-right: 26px;
    width: 238px;
    height: 285px;
    background-size: cover;
    padding: 55px 21px 20px 21px;
    transition: .5s all;
  }
  .programsBoard .auto .pTab .pList1{
    background: url("programs-1.jpg")no-repeat;
  }
  .programsBoard .auto .pTab .pList2{
    background: url("programs-2.jpg")no-repeat;
  }
  .programsBoard .auto .pTab .pList3{
    background: url("programs-3.jpg")no-repeat;
  }
  .programsBoard .auto .pTab .pList4{
    background: url("programs-4.jpg")no-repeat;
  }
  .programsBoard .auto .pTab li:last-child{
    margin-right: 0;
  }
  .programsBoard .auto .pTab .pList:hover{
    box-shadow: 0 10px 29px rgba(2,11,24,.4);
  }
  .programsBoard .auto .pTab .pList h6{
    margin-bottom: 35px;
    font-size: 28px;
    color: #fff;
  }
  .programsBoard .auto .pTab .pList span{
    display: block;
    margin-bottom: 12px;
    font-size: 18px;
    color: #fff;
  }
  .programsBoard .auto .pTab .pList .occ{
    margin: 0 0 10px 0;
    font-size: 14px;
    color: #fff;
    padding-top: 12px;
  }
  .programsBoard .auto .pTab .pList .describe{
    font-size: 14px;
    color: #fff;
    line-height: 16px;
    height: 64px;
  }
  .programsBoard .auto .pTab .pList .every{
    display: block;
    height: 38px;
    line-height: 38px;
    width: 100%;
    font-size: 16px;
    text-align: center;
    border-radius: 4px;
  }
  .auto .view{
    display: block;
    margin: auto;
    width: 298px;
    height: 48px;
    line-height: 48px;
    font-size: 16px;
    color: #0ed666;
    text-align: center;
    border-radius: 4px;
    box-shadow: inset 0 0 0 1px #0ed666;
  }
  .view:hover::before {
    border-top-color: #0ed666;
    border-right-color: #0ed666;
  }
  .view:hover::after {
    border-bottom-color: #0ed666;
    border-left-color: #0ed666;
    -webkit-transition: height 0.25s ease-out, width 0.25s ease-out 0.25s;
    transition: height 0.25s ease-out, width 0.25s ease-out 0.25s;
  }
  .travelBroad{
    width: 100%;
    height: 600px;
  }
  .swiper-container{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .swiper-container .swiper-wrapper{
    width: 300%;
    height: 600px;
  }
  .travelBroad .swiper-slide{
    float: left;
    width: 100%;
    height: 100%;
  }
  .travelBroad .swiper-slide1{
    background: url("./working-in-China-2.jpg")no-repeat center;
    background-size: cover;
  }
  .travelBroad .swiper-slide2{
    background: url("./working-in-China-4.jpg")no-repeat center;
    background-size: cover;
  }
  .travelBroad .swiper-slide3{
    background: url("./working-in-China-5.jpg")no-repeat center;
    background-size: cover;
  }
  .travelBroad .swiper-slide .auto .travelDes{
    padding: 110px 85px 0 85px;
    width: 390px;
    height: 490px;
    background: rgba(0,0,0,.4);
  }
  .travelBroad .swiper-slide .auto .travelDes .traTitle{
    display: block;
    margin: 0 0 50px 0;
    font-size: 40px;
    color: #fff;
    font-weight: 400;
  }
  .travelBroad .swiper-slide .auto .travelDes .traCon{
    font-size: 16px;
    color: #fff;
    line-height: 30px;
  }
  .travelBroad .swiper-slide .auto .travelDes .read{
    display: block;
    margin-top: 50px;
    width: 138px;
    height: 48px;
    line-height: 48px;
    text-align: center;
    font-size: 16px;
    color: #fff;
    border-radius: 4px;
  }
  .travelBroad .swiper-container .swiper-pagination{
    position: absolute;
    left:-10px;
    bottom:30px;
  }
  .swiper-pagination .pageList{
    margin-right: 20px;
    width: 40px;
    height: 8px;
    background: rgba(255,255,255,.6);
    border-radius: initial;
    transition: all .5s;
  }
  .swiper-pagination .swiper-pagination-bullet-active{
    width: 80px;
    height: 8px;
    background: #fff;
  }

  .peopleBroad{
    width: 100%;
    background: #fff;
  }
  .peopleBroad .auto{
    padding: 50px 0 60px 0;
  }
  .peopleBroad .auto .switchCon{
    width: 100%;
    position: relative;
    display: none;
    transition: .8s all;
  }
  .peopleBroad .auto .conShow{
    display: block;
  }
  .peopleBroad .auto .switchCon .peoPic{
    display: block;
    width: 120px;
    height: 120px;
    margin: auto;
    background-size: cover;
  }

  .peopleBroad .auto .switchCon .peo1{
    background: url("./people-1.png")no-repeat center;
  }
  .peopleBroad .auto .switchCon .peo2{
    background: url("./people-2.png")no-repeat center;
  }
  .peopleBroad .auto .switchCon .peo3{
    background: url("./people-3.png")no-repeat center;
  }

  .peopleBroad .auto .conShow .peoTitle{
    margin-top: 30px;
    display: block;
    font-size: 16px;
    color: #262626;
    text-align: center;
  }
  .peopleBroad .auto .conShow b{
    display: block;
    margin: 20px auto;
    width: 30px;
    height: 3px;
    background: #6d6d6d;
  }
  .peopleBroad .auto .conShow .peoDes{
    margin: auto;
    width: 792px;
    font-size: 16px;
    color: #aeaeae;
    line-height: 24px;
    text-align: center;
  }
  .peopleBroad .auto .conShow .quotesL,.quotesR{
    position: absolute;
    display: block;
    width: 160px;
    height: 160px;
  }
  .peopleBroad .auto .conShow .quotesL{
    top:0;
    left: 0;
    background: url("./icon-quotes-left.png")no-repeat;
  }
  .peopleBroad .auto .conShow .quotesR{
    right: 0;
    bottom: 0;
    background: url("./icon-quotes-right.png")no-repeat;
  }
  .peopleBroad .auto .videoTab{
    width: 980px;
    margin:40px auto;
  }
  .peopleBroad .auto .videoTab .videoList{
    float: left;
    position: relative;
    width: 250px;
    height: 250px;
    margin-right: 30px;
    cursor: pointer;
    transition: all 1s;
    overflow: hidden;
  }
  .peopleBroad .auto .videoTab .v1{
    background: url("./Josh.png")no-repeat center;
  }
  .peopleBroad .auto .videoTab .v2{
    background: url("./Thea.png")no-repeat center;
  }
  .peopleBroad .auto .videoTab .v3{
    background: url("./Daniel.jpg")no-repeat center;
  }
  .peopleBroad .auto .videoTab .videoList video{
    display: block;
  }
  .peopleBroad .auto .videoTab .gl{
    width: 420px;
    box-shadow: 0 10px 50px rgba(2,11,24,.2);
  }
  .peopleBroad .auto .videoTab li:last-child{
    margin-right: 0;
  }
  .peopleBroad .auto .videoTab .videoList video{
    width: 100%;
    height: 100%;
  }
  .peopleBroad .auto .videoTab .videoList .videoPlay{
    position: absolute;
    left:50%;
    top:50%;
    margin-left: -25px;
    margin-top: -25px;
    width: 50px;
    height: 50px;
    background: url("./button-play.png")no-repeat;
    background-size: cover;
    cursor: pointer;
    display: none;
  }
  .peopleBroad .auto .videoTab .videoList .playShow{
    display: block;
  }

  .serBroad{
    width: 100%;
    /*height: 560px;*/
    padding: 60px 0;
    background: url("./working-in-China-3.jpg")no-repeat;
    background-size:cover;
  }
  .serBroad .auto h2{
    margin-bottom:30px;
    font-size: 30px;
    color: #fff;
    text-align: center;
  }
  .serBroad .auto .serTag{
    margin: auto;
    width: 900px;
    font-size: 16px;
    color: #c5d3f0;
    line-height: 22px;
    text-align: center;
  }
  .serBroad .auto .serTab{
    margin-top:30px;
    width: 1180px;
    padding: 0 10px;
  }
  .serBroad .auto .serList{
    float: left;
    width: 280px;
    height: 126px;
    margin:0 20px 20px 0;
    padding-top: 34px;
    background: rgba(98,160,255,.26);
  }
  .serBroad .auto .marRNo{
    margin-right: 0;
  }
  .serBroad .auto .marL{
    margin-left: 160px;
  }
  .serBroad .auto .serList i{
    display: block;
    width: 60px;
    height: 60px;
    margin: auto;
  }
  .serBroad .auto .serList .visa{
    background: url("./icon-visa.png")no-repeat;
  }
  .serBroad .auto .serList .advice{
    background: url("./icon-advice.png")no-repeat;
  }
  .serBroad .auto .serList .health{
    background: url("./icon-health.png")no-repeat;
  }
  .serBroad .auto .serList .airport{
    background: url("./icon-airport.png")no-repeat;
  }
  .serBroad .auto .serList .apartment{
    background: url("./icon-apartment.png")no-repeat;
  }
  .serBroad .auto .serList .bank{
    background: url("./icon-bank.png")no-repeat;
  }
  .serBroad .auto .serList .phone{
    background: url("./icon-iphone.png")no-repeat;
  }
  .serBroad .auto .serList .serName{
    display: block;
    margin-top: 15px;
    font-size: 16px;
    color: #fefefe;
    text-align: center;
  }
  .serBroad .auto .serBtn{
    display: block;
    margin:23px auto;
    width: 298px;
    height: 48px;
    line-height: 48px;
    border-radius: 4px;
    text-align: center;
    font-size: 16px;
    color: #fff;
  }

  .institutesBroad{
    width: 100%;
    background: #fff;
    padding: 80px 0 90px 0 ;
  }
  .institutesBroad .auto h2{
    margin-bottom: 60px;
    color: #262626;
    text-align: center;
  }
  .institutesBroad .auto .imgBox{
    width: 1056px;
    padding: 0 72px;
    margin-bottom: 80px;
  }
  .institutesBroad .auto .imgBox img{
    width: 100%;
  }

  .emSu{
    width: 100%;
    background: #f3f6fb;
    padding: 90px 0 100px 0;
  }
  .emSu .auto h2{
    margin-bottom: 40px;
    color: #262626;
    text-align: center;
    font-weight: 400;
  }
  .emSu .auto .emDes{
    font-size: 16px;
    color: #aeaeae;
    text-align: center;
  }
  .emSu .auto .inputBox{
    position: relative;
    margin: 60px auto;
    width: 670px;
    font-size: 0;
    margin-bottom: 0;
  }
  .emSu .auto .inputBox input{
    display: inline-block;
    width: 460px;
    height: 60px;
    padding-left: 40px;
    border-radius: 4px;
    font-size: 16px;
    color: #262626;
    box-shadow: 0 10px 29px rgba(3,13,27,.1);
    border: none;
  }
  .emSu .auto .inputBox .inputBtn{
    display: inline-block;
    margin-left: 30px;
    width: 140px;
    height: 60px;
    line-height: 60px;
    background: #0ed666;
    /*background: #aaa;*/
    box-shadow: 0 10px 29px rgba(3,27,19,.2);
    border-radius: 4px;
    font-size: 16px;
    color: #fff;
    text-align: center;
    cursor: pointer;
    border: none;
    font-weight: 600;
  }
  .emSu .auto .inputBox .bg1:hover{
    background: #11b85b;
  }

  .emSu .auto .inputBox .bg1{
    background: #0ed666;
    cursor: pointer;
  }
  .emSu .auto .inputBox .bg2{
    background: #aaa;
    cursor: initial;
  }
  .emSu .auto .inputBox .worBox ,.suBox{
    position: absolute;
    left: 0;
    top:74px;
    padding: 0 35px;
    height: 40px;
    border-radius: 5px;
  }
  .emSu .auto .inputBox .worBox{
    background: #f7593f;
    font-size: 0;
  }

  .emSu .auto .inputBox .worBox .sj{
    position: absolute;
    top:-16px;
    left: 20px;
    width: 0;
    height: 0;
    border: 8px solid transparent;
    border-bottom-color: #f7593f;
  }
  .emSu .auto .inputBox .worBox .worIcon{
    display: inline-block;
    width: 20px;
    height: 20px;
    vertical-align: middle;
    background: url("./icon-warning.png")no-repeat;
  }
  .emSu .auto .inputBox .worBox .worWord{
    margin-left: 10px;
    display: inline-block;
    font-size: 16px;
    color: #fff;
    line-height: 40px;
    vertical-align: middle;
  }
  .emSu .auto .inputBox .suBox{
    background: #0ed666;
    text-align: center;
  }
  .emSu .auto .inputBox .suBox .sj{
    position: absolute;
    top:-16px;
    left: 20px;
    width: 0;
    height: 0;
    border: 8px solid transparent;
    border-bottom-color: #0ed666;
  }
  .emSu .auto .inputBox .suBox .suWord{
    font-size: 16px;
    color: #fff;
    line-height: 40px;
  }
  .emSu .auto .inputBox .inputMask{
    position: absolute;
    top:0;
    left: 0;
    width: 500px;
    height: 60px;
    z-index: 20;
  }
</style>
