<template>
  <div class="navBox" id="index">
    <!--<h2>Career&nbspChina</h2>-->
    <div class="logoBox">
      <a href="http://www.careerchina.com" class="ccLogo" title="teaching jobs in china,english teaching jobs in china"></a>
      <i class="line"></i>
      <a href="http://www.100tal.com/" class="talLogo" target="_blank"></a>
    </div>
    <ul class="tal clear">
      <li class="list">
        <a href="working-in-china.html" id="home" name="Working in China">HOME</a>
      </li>
      <li class="list">
        <a href="jobs-in-china.html" id="JOB" name="Jobs in China">OPPORTUNITIES</a>
      </li>
      <li class="list">
        <a href="how-to-move-to-china.html" id="ser" name="how to move to china">SERVICES</a>
      </li>
      <li class="list">
        <a href="life-in-china-blog.html" id="bl" name="life in China">BLOG</a>
      </li>
      <li class="list marginR">
        <a href="about-career-china.html" id="us" name="about us">ABOUT US</a>
      </li>
    </ul>
    <a class="employer" href="http://business.careerchina.com" target="_blank">
        <span class="employerInner">
          Employer Access
          <br/>
          企业服务
        </span>
    </a>
  </div>
</template>

<script type="text/ecmascript-6">
  import $ from 'jquery'
  export default{
      mounted(){
          var url=window.location.href;
          var reg=/working-in-china/g,
              reg1=/jobs-in-china.html/g,
              reg2=/companies-in-china/g,
              reg3=/company/g,
              reg4=/how-to-move-to-china/g,
              reg5=/job-placement-china/g,
              reg6=/china-work-visa/g,
              reg7=/moving-to-china/g,
              reg8=/life-in-china-blog/g,
              reg9=/live-in-china/g,
              reg10=/travel-in-china/g,
              reg11=/work-in-china/g,
              reg12=/guides/g,
              reg13=/on-boarding/g,
              reg14=/about-career-china/g;
          if(reg.test(url)){
              $('#home').addClass('active')
          }else if(reg2.test(url) || reg3.test(url) || reg1.test(url)){
              $('#JOB').addClass('active')
          }else if(reg4.test(url)||reg5.test(url)||reg6.test(url)||reg7.test(url)){
              $('#ser').addClass('active')
          }else if(reg8.test(url)||reg9.test(url)||reg10.test(url)||reg11.test(url)||reg12.test(url)||reg13.test(url)){
              $('#bl').addClass('active')
          }else if(reg14.test(url)){
            $('#us').addClass('active')
          }
      }
  }
</script>

<style scoped>
  .navBox{
    display: flex;
    position: relative;
    min-width: 1200px;
    height: 60px;
    background: #fff;
    box-shadow: 0 2px 7px rgba(0,0,0,.18);
    z-index: 10;
  }
  /*.navBox h2{
    height: 60px;
    line-height: 60px;
    font-size: 22px;
    color: #000;
    font-weight: 600;
    margin-left: 15px;
  }*/
  .logoBox{
    height: 60px;
    font-size:0;
    margin: 15px 0 0 15px;
    justify-content:flex-start;
  }
  .logoBox .ccLogo{
    display: inline-block;
    width: 140px;
    height: 30px;
    background: url("cc_logo.png")no-repeat;
    background-size: cover;
    overflow: hidden;
  }
  .logoBox .line{
    display: inline-block;
    height: 30px;
    width: 1px;
    background: #ddd;
    margin: 0 20px;
  }
  .logoBox .talLogo{
    display: inline-block;
    width: 126px;
    height: 30px;
    background: url("tal_logo.png")no-repeat;
    background-size: cover;
  }
  .employer{
    float: right;
    margin-right: 15px;
    display: block;
    justify-content:flex-end;
    text-align: center;
    padding: 14px 10px;
    cursor: pointer;
    background: #3183e7;
  }
  .employer .employerInner{
    font-size: 12px;
    color: #fff;
    line-height: 18px;
  }
  .employer:hover{
    background: #3777db;
  }
  .navBox .tal{
    margin: auto;
    /* height: 60px;*/
    line-height: 60px;
    justify-content:center;
  }
  .navBox .tal .list{
    float: left;
    margin-right: 35px;
  }
  .navBox .tal .marginR{
    margin-right: 0;
  }
  .navBox .tal .list a{
    display: block;
    font-size: 16px;
    color: #262626;
    font-weight: 600;
  }
  .navBox .tal .list .active{
    color: #3183e7;
    text-shadow: 0 2px 10px rgba(0,0,0,.17);
    /*background: url("./point.png")no-repeat center 47px;*/
    border-bottom: 4px solid #3183e7;
    height: 56px;
  }
  .navBox .tal .list a:hover{
    height: 56px;
    color: #3183e7;
    text-shadow: 0 2px 10px rgba(0,0,0,.17);
    border-bottom: 4px solid #3183e7;
  }
  @media (max-width:800px) {
    .navBox{
      display: initial;
      min-width: initial;
    }
    .navBox .tal .list{
      width: 20%;
      margin: initial;
    }
    .navBox .tal .list a{
      text-align: center;
    }
    .employer{
      display: none;
    }
  }
  @media (max-width:568px) {
    .navBox .tal .list a{
      font-size: 12px;
    }
  }
  @media (max-width:460px) {
    .navBox .tal{
      width: 352px;
      margin: auto;
    }
    .navBox .tal .list{
      width: initial;
      padding: 0 6px;
    }
  }
</style>
