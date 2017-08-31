<template>
   <div class="footer">
     <div class="site">
       <div class="siteMain">
         <h2></h2>
         <ul class="siteTab clear">
           <li class="siteList">
             <h3 class="navName">PROGRAMS</h3>
             <a href="jobs-in-china.html" title="Jobs in China">Featured Jobs</a>
             <a href="company/First-Leap-China.html" title="First Leap China">First Leap China</a>
             <a href="company/Meten-Education-Group.html" title="Meten">Meten</a>
             <a href="company/Kids-R-Kids.html" title="Kids R Kids">Kids R Kids</a>
             <a href="company/RDFZ-Xishan-School.html" title="RDFZ Xinshan School">RDFZ Xinshan School</a>
             <a href="company/Beijing-SMIC-Private-School.html" title="Beijing SMIC School">Beijing SMIC School</a>
           </li>
           <li class="siteList">
             <h3 class="navName">SERVICES</h3>
             <a href="job-placement-china.html" title="job placement China">Career Advice</a>
             <a href="china-work-visa.html" title="china work visa">Work Visa</a>
             <a href="moving-to-china.html" title="moving to china">Ground Service</a>
             <!--<a href="javascript:;">Why Choose Career China</a>-->
             <a href="moving-to-china.html#quesTitle" @click="href2" title="moving to china">FAQS</a>
           </li>
           <li class="siteList">
             <h3 class="navName">ABOUT</h3>
             <a href="about-career-china.html" title="career china">About Us</a>
             <a href="about-career-china.html#doing" title="career china team">Team</a>
             <a href="http://business.careerchina.com" target="_blank">For Chinese Companies</a>
           </li>
           <li class="siteList" style="margin-right:0">
             <h3 class="navName">LATEST ARTICLES</h3>
             <a href="live-in-china.html" title="live in China">Live</a>
             <a href="travel-in-china.html" title="travel in China">Travel</a>
             <a href="work-in-china.html" title="work in China">Work</a>
             <a href="guides.html" title="city guides in China">Guides</a>
             <a href="on-boarding.html" title="On-boarding">On-boarding</a>
             <!--<div class="Jump">
               <a href="javascript:;" style="margin-bottom: 0">
                 Travel in Beijing
                 <i class="moreIcn"></i>
               </a>
               <span class="blname">
                 Josh Wilson
               </span>
             </div>
             <div class="Jump">
               <a href="javascript:;" style="margin-bottom: 0">
                 Best Restaurant in Shanghai
                 <i class="moreIcn"></i>
               </a>
               <span class="blname">
                 Liz
               </span>
             </div>-->
             <div class="Jump">
               <a href="life-in-china-blog.html" target="_blank" title="life in China">
                 View More Posts
                 <i class="moreIcn"></i>
               </a>
             </div>
           </li>
         </ul>
       </div>
       <div class="siteBg"></div>
     </div>
     <div class="footerBt">
       <h2></h2>
       <div class="fooMain clear">
         <div class="mainL">
           <h3 class="contact">Contact Us</h3>
           <span class="tel">TEL: +86 400-669-7618</span>
           <span class="em">EMAIL: <a href="mailto:jobs@careerchina.com">jobs@careerchina.com</a></span>
           <span class="address">ADDRESS: Linda Plaza B-5C, Dongtucheng Road, Chaoyang District, Beijing, China</span>
           <b class="copy">
             Copyright © 2017 Career China. All rights reserved.
           </b>
           <b class="icp">
             京ICP备16068124号-1
           </b>
           <div style="margin-top: 10px">
             <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502033181" style="text-decoration:none;height:20px;line-height:20px;"><img
               src="./gongan.jpg" alt="" style="float: left"><p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#7d8084;font-size: 12px">京公网安备 11010502033181号</p ></a >
           </div>
         </div>
         <div class="mainR">
           <h3 class="withUs">Connect with Us</h3>
           <div class="icTab clear">
             <a href="https://www.facebook.com/CareerChinaJobs/" class="face" target="_blank"></a>
             <a href="https://twitter.com/Career_China" class="bird" target="_blank"></a>
             <a href="https://www.linkedin.com/company-beta/17913665/" class="in" target="_blank"></a>
             <a href="https://www.instagram.com/careerchina/" class="camera" target="_blank"></a>
             <a href="https://plus.google.com/u/0/116387979022769777244" class="google" target="_blank"></a>
             <a href="https://www.youtube.com/channel/UCFA7l6MzmjNtVQAaZtReCeA" class="you" target="_blank"></a>
             <a href="https://www.pinterest.com/careerchina/" class="pte" target="_blank"></a>
           </div>
           <div class="term">
             <b>
               <a href="term.html" title="Term of Service">Term of Service</a>
             </b>
             &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
             <b>
               <a href="policy.html" title="Privacy Policy">Privacy Policy</a>
             </b>
           </div>
         </div>
       </div>
     </div>
   </div>
</template>

<script type="text/ecmascript-6">
  export default{
      methods:{
          href(){
            try{
              document.body.scrollTop=0
            }catch (e){
            }
                //window.location.href='index.html#/CareerChina-team#aboutUs'
          },
        href2(){
          try{
            var oList=document.getElementById('list_Box');
            oList.style.marginTop='0';
            document.body.scrollTop=oList.offsetTop;
          }catch (e){
          }
        },
        href3(){
          document.body.scrollTop=600
        },

        /*goF(){
            window.location.href='index.html#/opportunities-in-china/company-in-china/school?id=1';
          this.$router.go('index.html#/opportunities-in-china/company-in-china/school?id=1')
        },
        goM(){
          window.location.href='index.html#/opportunities-in-china/company-in-china/school?id=2';
          this.$router.go('index.html#/opportunities-in-china/company-in-china/school?id=2')
        },
        goK(){
          window.location.href='index.html#/opportunities-in-china/company-in-china/school?id=22';
          this.$router.go('index.html#/opportunities-in-china/company-in-china/school?id=22')
        },
        goR(){
          window.location.href='index.html#/opportunities-in-china/company-in-china/school?id=3';
          this.$router.go('index.html#/opportunities-in-china/company-in-china/school?id=3')
        },
        goB(){
          window.location.href='index.html#/opportunities-in-china/company-in-china/school?id=20';
          this.$router.go('index.html#/opportunities-in-china/company-in-china/school?id=20')
        },*/
      },
  }
</script>

<style scoped>
  .footer{
    min-width: 1200px;
  }
  .footer .site{
    position: relative;
    width: 100%;
    background: #444b56;
    padding: 42px 0 16px 0;
  }
  .footer .site .siteBg{
    position: absolute;
    left: 50%;
    bottom:0;
    margin-left:-480px;
    width: 967px;
    height: 261px;
    background: url("siteBg.png")no-repeat;
    z-index: 1;
  }
  .footer .site .siteMain{
    position: relative;
    width: 916px;
    padding: 0 142px;
    margin: auto;
    z-index: 20;
  }
  .footer .site .siteMain h2{
    background: url("icon-footer-logo-c.png")no-repeat center;
    width: 199px;
    height: 34px;
    margin-left: -17px;
  }
  .footer .site .siteMain .siteTab{
    margin-top: 20px;
    width: 100%;
  }
  .footer .site .siteMain .siteTab .siteList{
    margin-right: 121px;
    float: left;
  }
  .site .siteMain .siteTab .siteList .navName{
    display: block;
    margin-bottom: 15px;
    font-size: 12px;
    color: #7d8084;
    font-weight: 400;
  }
  .site .siteMain .siteTab .siteList a{
    display: block;
    margin-bottom: 10px;
    font-size: 12px;
    color: #fff;
    cursor: pointer;
  }
  .site .siteMain .siteTab .siteList a:hover{
    text-decoration: underline;
  }

  .site .siteMain .siteTab .siteList .Jump{
    margin-bottom: 18px;
  }
  .site .siteMain .siteTab .siteList .Jump a .moreIcn{
    display: inline-block;
    width: 9px;
    height: 10px;
    background: url("more.png")no-repeat;
  }
  .site .siteMain .siteTab .siteList .Jump .blname{
    display: block;
    font-size: 12px;
    color: #a4b7cd;
  }
  .footerBt{
    width: 100%;
    background: #383f48;
    padding: 30px 0 24px 0;
  }
  .footerBt h2{
    margin: 130px 0 45px 0;
    background: url("icon-footer-logo-c.png")no-repeat center;
    width: 199px;
    height: 34px;
    text-align: center;
    display: none;
  }
  .footerBt .fooMain{
    width: 916px;
    padding: 0 142px;
    margin: auto;
  }
  .footerBt .fooMain .mainL{
    float: left;
    font-size: 0;
  }
  .footerBt .fooMain .mainL .contact{
    font-size: 12px;
    color: #7d8084;
    margin-bottom: 10px;
    font-weight: 400;
  }
  .footerBt .fooMain .mainL span{
    display: block;
    font-size: 12px;
    color: #fff;
    margin-bottom: 10px;
  }
  .footerBt .fooMain .mainL .em a{
    cursor: pointer;
    color: #fff;
  }
  .footerBt .fooMain .mainL .em a:hover{
    text-decoration: underline;
  }
  .footerBt .fooMain .mainL b{
    display: inline-block;
    font-size: 12px;
    color: #7d8084;
  }
  .footerBt .fooMain .mainL .copy{
    margin-right: 18px;
  }
  .footerBt .fooMain .mainR{
    float: right;
  }
  .footerBt .fooMain .mainR span{
    display: block;
    font-size: 12px;
    color: #7d8084;
  }
  .footerBt .fooMain .mainR .withUs{
    margin:50px 0 10px 0;
    font-size: 12px;
    color: #7d8084;
    font-weight: 400;
  }
  .footerBt .fooMain .mainR .term{
    margin-top: 22px;
    color: #7d8084;
  }
  .footerBt .fooMain .mainR .term a{
    font-size: 12px;
    font-weight: 400;
    color: #7d8084;
  }
  .footerBt .fooMain .mainR .term a:hover{
    color: #fff;
    text-decoration: underline;
  }
  .footerBt .fooMain .mainR .icTab a{
    float: left;
    margin-right: 15px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    box-shadow: 0 0 0 20px transparent;
    transition:box-shadow 1s;
    cursor: pointer;
  }
  .footerBt .fooMain .mainR .icTab a:hover{
    box-shadow: 0 0 0 0 rgba(255,255,255,0.5);
  }
  .footerBt .fooMain .mainR .icTab a:last-child{
    margin-right: 0;
  }
  .footerBt .fooMain .mainR .icTab .face{
    background: url("face.png")no-repeat;
  }
  .footerBt .fooMain .mainR .icTab .bird{
    background: url("bird.png")no-repeat;
  }
  .footerBt .fooMain .mainR .icTab .in{
    background: url("in.png")no-repeat;
  }
  .footerBt .fooMain .mainR .icTab .camera{
    background: url("camera.png")no-repeat;
  }
  .footerBt .fooMain .mainR .icTab .google{
    background: url("google.png")no-repeat;
  }
  .footerBt .fooMain .mainR .icTab .you{
    background: url("you.png")no-repeat;
  }
  .footerBt .fooMain .mainR .icTab .pte{
    background: url("pte.png")no-repeat;
  }
  /*@media (max-width: 1200px) {
    .footer .site .siteMain{
      width: 86%;
      padding: 0 7%;
    }
    .footerBt .fooMain{
      width: 86%;
      padding: 0 7%;
    }
  }
  @media (max-width: 1080px) {
    .footer .site .siteMain .siteTab .siteList{
      height: 187px;
      width: 25%;
      margin: 0 0 25px 0;
    }
  }
  @media (max-width: 1000px) {
    .footer .site .siteBg{
      top:inherit;
      bottom: 0;
      left: 0;
      width: 100%;
    }
  }*/
  @media (max-width: 800px) {
    .footer{
      min-width: initial;
      width: 100%;
    }
    .footer .site .siteMain{
      width: 86%;
      padding: 0 7%;
    }
    .footerBt .fooMain{
      width: 86%;
      padding: 0 7%;
    }
    .footer .site .siteMain .siteTab .siteList{
      height: 187px;
      width: 25%;
      margin: 0 0 25px 0;
    }
    .footer .site .siteBg{
      top:inherit;
      bottom: 0;
      left: 0;
      width: 100%;
    }
    .footer .site .siteMain h2{
      display: none;
    }
    .footerBt h2{
      display: block;
    }
    .footerBt .fooMain{
      text-align: center;
    }
    .footerBt .fooMain .mainR .icTab{
      width:300px;
      margin: auto;
    }
    .footerBt h2{
      margin: 30px auto;
    }
    /*.site .siteMain .siteTab .siteList a{
      font-size: 24px;
    }*/
    /*.site .siteMain .siteTab .siteList .navName{
      font-size: 18px;
    }*/
    /*.site .siteMain .siteTab .siteList .Jump .blname{
      font-size: 1px;
    }*/
    .footerBt .fooMain .mainL{
      float: inherit;
    }
    .footerBt .fooMain .mainR{
      float: inherit;
    }
    /*.footerBt .fooMain .mainL span{
      font-size: 18px;
    }*/
  }
  @media (max-width: 620px) {
    .footer .site .siteMain .siteTab .siteList{
      width: 30%;
      padding: 0 10%;
    }
  }
  @media (max-width: 478px) {
    .footer .site .siteMain .siteTab .siteList{
      width: 50%;
      padding: 0;
    }
  }
</style>
