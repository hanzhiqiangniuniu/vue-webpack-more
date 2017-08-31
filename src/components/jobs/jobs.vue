<template>
  <div class="programs" id="app">
    <v-nav></v-nav>
    <ul class="tab">
      <li>
        <a href="javascript:;" class="active">Jobs</a>
      </li>
      <li>
        <a href="companies-in-china.html" name="Companies in China">Companies</a>
      </li>
    </ul>
    <div class="banner">
      <div class="auto">
        <h2>Find Top Teaching Jobs in China</h2>
        <p class="titleWorld">
          Take the first step to your new career by searching our database of great jobs in China.
        </p>
      </div>
    </div>
    <div class="jv-careersite" data-careersite="careerchina"></div>
    <!-- <i class="load"></i>-->
    <div class="let">
      <div class="auto">
        <h3>Let Us Match the Job for You</h3>
        <p class="letWord">
          If you don't see a role that fits your profile, then submit your resume to us and our career advicer will help you to find a suitable job.
        </p>
        <a href="https://app.jobvite.com/j?aj=oxe54fwE&s=CC_Website" target="_blank">Get My Suitable Job!</a>
      </div>
    </div>
    <v-submitEmail></v-submitEmail>
    <v-goTop></v-goTop>
    <v-footer></v-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import $ from 'jquery'
  import '../../common/css/reset.min.css'
  import '../../common/css/swiper.min.css';
  import nav from '../public/nav/nav'
  import footer from '../public/footer/footer'
  import gotop from '../public/goTop/goTop'
  import submitEmail from '../public/submit/submitEmail'
  export default{
    name:'jobs',
    components:{
      'v-footer':footer,
      'v-nav':nav,
      'v-goTop':gotop,
      'v-submitEmail':submitEmail
    },
    created(){
      var script1 = document.createElement('script');
      script1.type = 'text/javascript';
      script1.src = 'https://jobs.jobvite.com/__assets__/scripts/careersite/public/iframe.js';
      $('body').append(script1);
    },
  }
</script>

<style>
  .tab{
    position: absolute;
    top:60px;
    left:0;
    width: 100%;
    height: 34px;
    line-height: 34px;
    background: #f1f1f1;
    z-index: 2;
    text-align: center;
  }
  .tab li{
    margin-right: 40px;
    display: inline-block;
    cursor: pointer;
  }
  .tab li:last-child{
    margin: 0;
  }
  .tab li a{
    font-size: 14px;
    color: #9c9c9c;
  }
  .tab li a:hover{
    color: #3082e6;
    text-shadow: 0 2px 10px rgba(0,0,0,.17);
  }
  .tab li .active{
    color: #3082e6;
    text-shadow: 0 2px 10px rgba(0,0,0,.17);
  }
  .fea {
    position: relative;
  }

  /*.fea .load{
    position: absolute;
    top:300px;
    left: 50%;
    margin-left: -30px;
    width: 60px;
    height: 60px;
    background: url("./load.gif")no-repeat;
    z-index: -1;
  }*/
  .banner {
    margin: auto;
    width: 100%;
    height: 236px;
    background: url("jobs-in-china.jpg") center no-repeat;
    background-size: cover;
  }

  .banner .auto {
    width: 1200px;
    margin: auto;
    padding-top: 101px;

  }

  .banner .auto h2 {
    font-size: 28px;
    color: #fff;
    text-align: center;
    margin-bottom: 20px;
  }

  .banner .auto .titleWorld {
    font-size: 16px;
    color: #fff;
    text-align: center;
  }

  .jv-careersite {
    width: 1050px;
    margin: 40px auto;
    padding-bottom: 100px;
  }

  .let {
    width: 100%;
    height: 400px;
    background: url("bg-match-job.jpg") no-repeat center;
    background-size: cover;
  }

  .let .auto {
    padding: 94px 75px 0 75px;
    width: 1050px;
    margin: auto;
  }

  .let .auto h3 {
    font-size: 30px;
    color: #fff;
    margin-bottom: 30px;
  }

  .let .auto .letWord {
    width: 522px;
    font-size: 16px;
    color: #fff;
    line-height: 26px;
  }

  .let .auto a {
    display: block;
    margin-top: 40px;
    background: #00db55;
    font-size: 16px;
    color: #fff;
    border-radius: 4px;
    width: 300px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    box-shadow: 0 5px 30px rgba(0, 0, 0, .2);
  }

  .let .auto a:hover {
    background: #11b85b;
  }
  @media (max-width:968px) {
    .tab{
      min-width: initial;
      top:135px;
    }
  }
  @media (max-width:568px) {
    .tab li{
      margin-right: 20px;
    }
    .tab li a{
      font-size: 12px;
    }
  }
</style>
