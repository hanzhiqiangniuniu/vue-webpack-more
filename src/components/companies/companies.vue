<template>
  <div class="schoolBox">
    <v-nav></v-nav>
    <ul class="tab">
      <li>
        <a href="jobs-in-china.html">Jobs</a>
      </li>
      <li>
        <a href="javascript:;" class="active">Companies</a>
      </li>
    </ul>
    <div class="bannerBox">
      <div class="auto">
        <h2>Explore Companies in China</h2>
        <p class="titleWorld">
          Learn more about each school in China, and search their open positions.
        </p>
      </div>
      <!--<div class="circulos">
        <img src="./xian1.png" class="x1" alt="">
        <img src="./xian2.png" class="x2" alt="">
        <img src="./xian3.png" class="x3" alt="">
      </div>-->
    </div>
    <div class="listBox">
      <ul class="schoolTab clear">
        <li class="schoolList" @click="jdblock(school.instituteName)" v-for="school in schoolData" :schoolId="school.institutionId">
          <div class="imgBox">
            <img :src="school.logoURL" alt="">
          </div>
          <span class="edu">{{school.instituteName}}</span>
          <p class="aff">{{school.instituteTag}}</p>
          <!-- <div class="mask">
             <span class="start">{{school.instituteName}}</span>
             <h6>{{school.instituteTag}}</h6>
             <p class="schoolDetails">
               {{school.introducton}}
             </p>
           </div>-->
        </li>
      </ul>
    </div>
    <v-submitEmail></v-submitEmail>
    <v-goTop></v-goTop>
    <v-footer></v-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import $ from 'jquery'
  import '../../common/css/reset.min.css'
  import '../../common/css/childNav.css'
  import nav from '../public/nav/nav'
  import footer from '../public/footer/footer'
  import gotop from '../public/goTop/goTop'
  import submitEmail from '../public/submit/submitEmail'
  import interfaceStr from '../../common/js/interface.js'
  export default{
    data(){
      return{
        Usertext:'',
        emailNull:false,
        formatError:false,
        success:false,
        mask:false,
        schoolData:[],
      }
    },
    /*props:{
      schoolData:{
        type:Array
      }
    },*/
    name:'schools',
    components:{
      'v-footer':footer,
      'v-nav':nav,
      'v-goTop':gotop,
      'v-submitEmail':submitEmail
    },
    methods:{
      jdblock(name){
        var reg=/\s+/g;
        var newName=name.replace(reg,'-');
        location.href = '/company/'+newName+'.html';
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
    mounted(){
      document.body.scrollTop=0;
    },
    created(){
      var that=this;
      that.$http({
        method:'GET',
        url:'http://'+interfaceStr+'/cc/to/c/responseInstitute.action'
      }).then(function(data){
        var schoolAry=data.body.institute;
        that.schoolData=schoolAry
      }, function (error) {

      });
    }
  }
</script>

<style scoped>
  .schoolBox{
    width: 100%;
    position: relative;
  }
  .schoolBox .bannerBox{
    position: relative;
    width: 100%;
    height: 236px;
    text-align: center;
    background:url("./company-in-china.jpg")no-repeat center;
    background-size: cover;
    perspective: 2000px;
  }
  .bannerBox .auto{
    width: 1200px;
    margin: auto;
    padding-top:101px;
  }
  .bannerBox .auto h2{
    font-size: 28px;
    color: #fff;
    text-align: center;
    margin-bottom: 20px;
  }
  .bannerBox .auto .titleWorld{
    font-size: 16px;
    color: #fff;
    text-align: center;
  }
  .bannerBox .circulos{
    position: absolute;
    top:50px;
    left:50%;
    margin-left: -210px;
    width: 420px;
    height: 420px;
    animation: photoRotate 10s linear infinite 1s ;
  }
  .bannerBox .circulos .x1,.x2,.x3{
    position: absolute;
    top:0;
    left: 0;
  }
  .circulos .x1{
    -webkit-transform: rotateZ(0deg) translateZ(338.3031377746543px);
    transform: rotateZ(0deg) translateZ(338.3031377746543px);
  }
  .circulos .x2{
    -webkit-transform: rotateZ(30deg) translateZ(338.3031377746543px);
    transform: rotateZ(30deg) translateZ(338.3031377746543px);
  }
  .circulos .x3{
    -webkit-transform: rotateZ(60deg) translateZ(338.3031377746543px);
    transform: rotateZ(60deg) translateZ(338.3031377746543px);
  }
  @keyframes photoRotate {
    0% {
      -webkit-transform: rotateZ(0deg);
      transform: rotateZ(0deg);
    }

    25% {
      -webkit-transform: rotateZ(90deg);
      transform: rotateZ(90deg);
    }
    50% {
      -webkit-transform: rotateZ(210deg);
      transform: rotateZ(180deg);
    }

    75% {
      -webkit-transform: rotateZ(290deg);
      transform: rotateZ(270deg);
    }
    100% {
      -webkit-transform: rotateZ(360deg);
      transform: rotateZ(360deg);
    }
  }
  /*.schoolBox .bannerBox p{
    position: absolute;
    top:115px;
    left: 50%;
    margin-left: -245.83px;
    font-size: 18px;
    color: #fff;
  }*/
  .listBox{
    width: 100%;
    padding: 75px 0 75px 0;
  }
  .listBox .schoolTab{
    width: 1024px;
    height: 100%;
    margin: auto;
    padding: 0 88px;
  }
  .listBox .schoolTab .schoolList{
    position: relative;
    float: left;
    width: 328px;
    height: 276px;
    border: 1px solid #e3e3e3;
    background: #fff;
    box-shadow: 0 5px 8px rgba(0,0,0,.07);
    cursor: pointer;
    margin: 0 17px 17px 0;
  }
  .listBox .schoolTab .schoolList:nth-child(3){
    margin: 0 0 17px 0;
  }
  .listBox .schoolTab .schoolList:nth-child(6){
    margin: 0 0 17px 0;
  }
  .listBox .schoolTab .schoolList:nth-child(9){
    margin: 0 0 17px 0;
  }
  .listBox .schoolTab .schoolList:nth-child(12){
    margin: 0 0 17px 0;
  }
  .listBox .schoolTab .schoolList:nth-child(15){
    margin: 0 0 17px 0;
  }
  .listBox .schoolTab .schoolList:nth-child(18){
    margin: 0 0 17px 0;
  }
  .listBox .schoolTab .schoolList:nth-child(21){
    margin: 0 0 17px 0;
  }
  .listBox .schoolTab .schoolList:nth-child(24){
    margin: 0 0 17px 0;
  }
  .listBox .schoolTab .schoolList:nth-child(27){
    margin: 0 0 17px 0;
  }
  .listBox .schoolTab .schoolList:nth-child(30){
    margin: 0 0 17px 0;
  }
  .listBox .schoolTab .schoolList:nth-child(33){
    margin: 0 0 17px 0;
  }
  .listBox .schoolTab .schoolList:hover{
    box-shadow: 0 10px 20px rgba(2,11,24,.1);
  }
  /*.listBox .schoolTab .noborLeft{
    border-left: none;
  }*/

  .listBox .schoolTab li:nth-child(3){
    margin-right: 0;
  }
  .listBox .schoolTab li:nth-child(6){
    margin-right: 0;
  }
  /*.listBox .schoolTab .noborTop{
    border-top:none;
  }
  .listBox .schoolTab .noborLT{
    border-left: none;
    border-top: none;
  }*/
  .listBox .schoolTab .schoolList .imgBox{
    width: 240px;
    height: 90px;
    margin: 40px auto;
  }
  .listBox .schoolTab .schoolList img{
    width: 100%;

  }
  .listBox .schoolTab .schoolList .edu{
    display: block;
    font-size: 14px;
    color: #262626;
    margin:54px 0 0 27px;
    font-weight: 600;
  }
  .listBox .schoolTab .schoolList .aff{
    width: 274px;
    display: block;
    margin: 10px 0 0 27px;
    font-size: 12px;
    color: #9c9c9c;
    line-height: 19px;
    height: 38px;
    overflow: hidden;
  }
  .listBox .schoolTab .schoolList:hover .mask{
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    height: 100%;
  }
  .schoolTab .schoolList .mask{
    position: absolute;
    bottom:0;
    width: 322px;
    height: 0;
    background: #86b8ea;
    padding-left: 18px;
    overflow: hidden;
    cursor: pointer;
  }
  .schoolTab .schoolList .mask .start{
    display: block;
    font-size: 12px;
    color: #dbdbdb;
    font-weight: 600;
    margin-top: 69px;
  }
  .schoolTab .schoolList .mask h6{
    margin-bottom: 12px;
    font-size: 12px;
    color: #fff;
    font-weight: 600;
  }
  .schoolTab .schoolList .mask .schoolDetails{
    font-size: 12px;
    color: #e6e6e6;
  }

</style>
