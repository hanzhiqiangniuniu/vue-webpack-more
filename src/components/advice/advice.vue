<template>
  <div class="advice" id="advice">
    <v-nav></v-nav>
    <ul class="tab">
      <li>
        <a href="how-to-move-to-china.html" title="how to move to china">Our Service</a>
      </li>
      <li>
        <a href="javascript:;" class="active" title="job placement China">Career Advice</a>
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
          <h2>Career Advice</h2>
          <p class="titleWorld">
            Our team will work with you to identify job opportunities and companies in China <br/>that best fit your skills and interests.
          </p>
        </div>
      </div>
    </div>
    <div class="main">
      <ul class="adviceTab">
        <li class="listJust clear">
          <div class="justL" style="margin-top: 52px">
            <span class="justTitle">Create an Account & Submit Your Resume</span>
            <p class="jParagraph">
              The first step is to create an account on CareerChina.com.  During this process, you can provide details about yourself, including your education and background.  You will also be able to upload a resume and even a cover letter
            </p>
          </div>
          <img src="./bg-submit.png" alt="">
        </li>
        <li class="listReverse clear">
          <img src="./img2.png" alt="">
          <div class="reveR">
            <span class="reveTitle">Talk With a Career Consultant</span>
            <p class="rParagraph">
              Once we have your information in the system, you can work with our Career Consultants to discuss your qualifications and your career goals. The team will also want to know more about you, including your work-style, lifestyle interests, and desired salary.
            </p>
          </div>
        </li>
        <li class="listJust clear">
          <div class="justL">
            <span class="justTitle">Matching Job Opportunities</span>
            <p class="jParagraph">
              After we have gotten to know you, we will identify particular companies and job opportunities that are a great fit.  From there, we will work with you closely to continue through the interviewing process.
            </p>
          </div>
          <img src="./img3.png" alt="">
        </li>
        <li class="listReverse clear">
          <img src="./img4.png" alt="">
          <div class="reveR">
            <span class="reveTitle">Interviews</span>
            <p class="rParagraph">
              Our team will work with you closely to guide you along the interview process, and advise you on any other requirements, such as a teaching demo.  We will also coordinate with the hiring companies and advise you on the next steps in the process.
            </p>
          </div>
        </li>
        <li class="listJust clear">
          <div class="justL">
            <span class="justTitle" style="margin-top: 100px">Get Hired!</span>
            <p class="jParagraph">
              Congratulations on the new job! The Career China team will assist you with getting together appropriate documents to sign. We will also be sure you understand the details, such as benefits and insurance. Lastly, our team will work with the hiring company to provide you with on-boarding information and other important documents related to your orientation.
            </p>
          </div>
          <img src="./img5.png" alt="">
        </li>
        <li class="listReverse clear" style="margin-bottom: 0">
          <img src="./img6.png" alt="">
          <div class="reveR">
            <span class="reveTitle" style="margin-top: 143px">Work Visa</span>
            <p class="rParagraph">
              Once you have signed an offer, the Career China visa team will begin to work with you more closely to help gather & process all the required documents to get your working visa in China.  This process can take some time, so your career consultant may inform you of the requirements ahead of time so that you can get start preparing all the documents in advance.
            </p>
          </div>
        </li>
      </ul>
      <div class="stageLine">
        <i class="stageIcon1"></i>
        <i class="stageIcon2"></i>
        <i class="stageIcon3"></i>
        <i class="stageIcon4"></i>
        <i class="stageIcon5"></i>
        <i class="stageIcon6"></i>
      </div>
      <a class="butt" href="https://app.jobvite.com/j?aj=oxe54fwE&s=CC_Website" target="_blank">Submit My Resume Now!</a>
    </div>
    <v-board></v-board>
    <v-goTop></v-goTop>
    <v-footer></v-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import $ from 'jquery'
  import '../../common/css/reset.min.css'
  import '../../common/css/service.css'
  import nav from '../public/nav/nav'
  import footer from '../public/footer/footer'
  import gotop from '../public/goTop/serviceGotop'
  import board from '../public/board/serviceBoard'
  export default{
    components:{
      'v-board':board,
      'v-footer':footer,
      'v-nav':nav,
      'v-goTop':gotop,
    },
  }
</script>

<style scoped>
   .advice{
     width: 100%;
   }
   .advice .banner{
     width: 100%;
     height: 342px;
     background:url("./job-placement-China.jpg")no-repeat center;
     background-size: cover;
     padding-top: 250px;
   }
   .advice .banner .auto{
     width: 1200px;
     height: 100%;
     margin: auto;
   }
   .advice .banner .auto .title h2{
     font-size: 40px;
     color: #fff;
     text-align: center;
     margin-bottom: 30px;
   }
   .advice .banner .auto .title .titleWorld{
     font-size: 16px;
     color: #fff;
     text-align: center;
     line-height: 26px;
   }
   .main{
     position: relative;
   }
   .main .stageLine{
     position: absolute;
     top: 197px;
     left: 50%;
     margin-left: -1px;
     width: 2px;
     height: 2150px;
     background: #3183e7;
   }
   .main .stageLine i{
     position: absolute;
     left: -16px;
     display: block;
     width: 34px;
     height: 34px;
     background: url("./stage.png")no-repeat;
   }
   .main .stageLine .stageIcon1{
     top: -17px;
   }
   .main .stageLine .stageIcon2{
     top: 422px;
   }
   .main .stageLine .stageIcon3{
     top: 840px;
   }
   .main .stageLine .stageIcon4{
     top: 1260px;
   }
   .main .stageLine .stageIcon5{
     bottom: 447px;
   }
   .main .stageLine .stageIcon6{
     bottom: -17px;
   }
   .main .butt{
     display: block;
     margin: 40px auto;
     background: #00db55;
     font-size: 16px;
     color: #fff;
     border-radius: 4px;
     width: 300px;
     height: 50px;
     line-height: 50px;
     text-align: center;
     border: none;
     margin-bottom: 100px;
     cursor: pointer;
   }
   .main .butt:hover{
     background: #11b85b;
   }
   .adviceTab{
     margin: auto;
     width: 1050px;
     padding: 15px 75px;
   }
   .adviceTab li{
     margin-bottom: 100px;
     width: 100%;
   }
   .adviceTab .listJust .justL{
     float: left;
     width: 525px;
   }
   .listReverse .reveR{
     float: left;
     width: 460px;
     padding-left: 65px;
   }
   .listJust .justL .justTitle,.listReverse .reveR .reveTitle{
     display: block;
     margin:85px 0 10px 0;
     font-size: 18px;
     font-weight: 600;
     color: #262626;
   }
   .listJust .justL .jParagraph,.listReverse .reveR .rParagraph{
     width: 428px;
     font-size: 14px;
     color: #9c9c9c;
     line-height: 18px;
   }
   .listJust img{
     float: left;
   }
   .listReverse img,.listReverse .reveR{
     float: left;
   }
</style>
