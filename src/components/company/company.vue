<template>
  <div id="jdBox" class="jdBox">
    <v-nav></v-nav>
    <ul class="tab">
      <li>
        <a href="jobs.html" name="Jobs in China">Jobs</a>
      </li>
      <li>
        <a href="companies.html" name="Companies in China">Companies</a>
      </li>
    </ul>
    <div class="titleBox">
      <div class="mainTitle">
        <img :src="this.detailData.instituteBasicInfo.logoURL" alt="">
        <div class="introduce">
          <h3>{{this.detailData.instituteBasicInfo.instituteName}}</h3>
          <p class="brand">
            {{this.detailData.instituteBasicInfo.instituteTag}}
          </p>
          <ul class="development">
            <li>
              <span class="number">{{this.detailData.instituteBasicInfo.startingYear}}</span>
              <span class="name">Established</span>
            </li>
            <li>
              <span class="number">{{this.detailData.instituteBasicInfo.employeeScale}}</span>
              <span class="name">Company Size</span>
            </li>
            <li>
              <span class="number">{{this.detailData.positionSize}}</span>
              <span class="name">Open Positions</span>
            </li>
          </ul>
          <!--<div class="give">
            <i class="love" @click="lovePlus" ref="love"></i>
            <span class="loveNumber">{{loveNumber}}</span>
          </div>-->
        </div>
      </div>
    </div>
    <div class="option">
      <ul class="option_tab">
        <li v-for="gameName in gameNames" @click="selected(gameName)" :class="{active: activeName == gameName}">{{gameName}}</li>
        <!--<span class="topLine"></span>
        <span class="botLine"></span>-->
      </ul>
      <div class="tab-main">
        <component :is='currentView' keep-alive :detailData="detailData" :videoData="videoData" :imgData="imgData" :positionList="positionList" :blog="blog"></component>
      </div>
    </div>
    <v-submitEmail></v-submitEmail>
    <v-goTop></v-goTop>
    <v-footer></v-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import $ from 'jquery'
  import about from './about/about'
  import positions from './positions/positions'
  import '../../common/css/reset.min.css'
  import '../../common/css/childNav.css'
  import nav from '../public/nav/nav'
  import footer from '../public/footer/footer'
  import gotop from '../public/goTop/goTop'
  import submitEmail from '../public/submit/submitEmail'
  import interfaceStr from '../../common/js/interface.js'
  export default{
    props:{
      schoolData:{
        type:Array
      },
    },
    data(){
      return{
        loveNumber:350,
        gameNames: ['Profile', 'Positions'],
        activeName: 'Profile',
        currentView:'Profile',
        detailData:{},
        videoData:"",
        imgData:"",
        Usertext:'',
        emailNull:false,
        formatError:false,
        success:false,
        mask:false,
        positionList:'',
        blog:'',
        interfaceStr:'devb'
      }

    },
    components:{
      'Profile':about,
      'Positions':positions,
      'v-footer':footer,
      'v-nav':nav,
      'v-goTop':gotop,
      'v-submitEmail':submitEmail
    },
    methods:{
      lovePlus(){
        if(this.loveNumber === 351){
          return false
        }else {
          this.loveNumber+=1;
          this.$refs.love.className='loveClick';
        }
      },
      selected:function(gameName){
        this.currentView=gameName;
        this.activeName = gameName;
      },
      styleState(){
        var aInputBtn=document.getElementById('inputBtn'),
          aText=document.getElementById('text');
        aInputBtn.className='inputBtn';
        aText.style.color='#262626';
        this.formatError=false;
        this.emailNull=false;
      },
      submit (){
        var aInputBtn=document.getElementById('inputBtn'),
          aText=document.getElementById('text');
        var reg1  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
          reg2 =/\S/;
        if(this.Usertext===''){
          this.emailNull=true;
          this.formatError=false;
          aInputBtn.className='inputBtn bg2';
        }else if(!reg1.test(this.Usertext)){
          this.formatError=true;
          aInputBtn.className='inputBtn bg2';
          aText.style.color='#f7593f';
        }else {
          this.emailNull=false;
          this.formatError=false;
          aInputBtn.className='inputBtn bg1';
        }
        if(reg1.test(this.Usertext) && reg2.test(this.Usertext)){
          let _this=this;
          _this.$http.post('http://'+interfaceStr+'.careerchina.com/cc/to/c/storageEmail.action',{'email':this.Usertext}).then(function(response){
            if(response.body.insertResult===true){
              _this.success=true;
              window.clearTimeout(timer);
              let timer = window.setTimeout(function () {
                aText.value='';
                _this.success=false;
                aInputBtn.className='inputBtn bg2';
              },2000);
              _this.boolean= true;
              _this.mask=true;
              this.Usertext='';
            }
          })
        }
        /*email
         {insertResult：true/false}
         插入结果：true 成功 false失败
         {emailNull:true}
         表示邮箱为空
         {emailFormatError:true}
         表示邮箱格式错误*/

      }
    },
    mounted(){
      document.body.scrollTop=0;
      String.prototype.queryURLParameter=function () {
        var obj={},
          reg=/([^?=&#]+)=([^?=&#]+)/g;
        this.replace(reg,function () {
          var key=arguments[1],
            value=arguments[2];
          obj[key]=value;
        });
        return obj;
      }
      var that=this,
        schoolId=window.location.href.queryURLParameter()["id"];
      that.$http({
        method:'GET',
        url:'http://'+interfaceStr+'/cc/to/c/viewInstituteDetail.action?institutionId='+schoolId
      }).then(function(data){
        that.detailData=data.body;
        that.videoData=data.body.instituteVideoInfo;
        that.imgData=data.body.institutePictureInfo;
        that.positionList=data.body.institutePosition;
        that.blog=data.body.instituteBlog;
        var url = window.location.href;
        addthis_share={
          url: url,
          title: that.detailData.instituteBasicInfo.instituteName,
          description: that.detailData.instituteBasicInfo.instituteTag,
          media: that.imgData[0].resourceUrl
        };
        var script= document.createElement('script');
        script.type= 'text/javascript';
        script.src= '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-58f6c687851a27e3';
        $('body').append(script);
        $('#keywords').attr('content',that.detailData.instituteBasicInfo.instituteName);
        $('#des').attr('content',that.detailData.instituteBasicInfo.instituteTag);
        $('title').html(that.detailData.instituteBasicInfo.instituteName)
      }, function (error) {

      });
    },
  }
</script>


<style>
  .jdBox{
    /*position: absolute;
    top:0;
    left:0;*/
    width: 100%;
    background: #fff;
  }
  .jdBox .titleBox{
    width: 100%;
    height: 326px;
    background-size: cover;
    border-bottom: 20px solid #f1f1f1;
    margin-bottom: 40px;
  }
  .jdBox .titleBox .mainTitle{
    width: 1032px;
    padding: 0 84px;
    font-size: 0;
    margin: auto;
  }
  .jdBox .titleBox .mainTitle img{
    float: left;
    width: 218px;
    margin: 82px 0 0 0;
    padding: 55px 40px;
    background-color: #fff;
    border: 1px solid #d2d2d2;
  }
  .jdBox .titleBox .mainTitle .introduce{
    position: relative;
    float: right;
    margin-top: 76px;
    width: 679px;
    height: 198px;
    padding-left: 10px;
  }
  .jdBox .titleBox .mainTitle .introduce h3{
    margin: 44px 0 5px 0;
    font-size: 24px;
    color: #262626;
    font-weight: 600;
  }
  .jdBox .titleBox .mainTitle .introduce .brand{
    width: 629px;
    font-size: 14px;
    color: #b1b1b1;
    line-height: 25px;
  }
  .jdBox .titleBox .mainTitle .introduce .development{
    margin: 26px 0 0 0;
  }
  .titleBox .mainTitle .introduce .development li{
    float: left;
    text-align: center;
    width: 159px;
    border-left: 1px solid #e8e8e8;
  }
  .titleBox .mainTitle .introduce .development li:last-child{
    border-right: 1px solid #e8e8e8;
  }
  .titleBox .mainTitle .introduce .development li .number{
    display: block;
    font-size: 20px;
    color: #0ed666;
    margin-bottom: 6px;
  }
  .titleBox .mainTitle .introduce .development li .name{
    display: block;
    font-size: 12px;
    color: #262626;
    font-weight: 300;
  }
  .titleBox .mainTitle .introduce .give{
    position: absolute;
    top:42px;
    right: 3px;
    font-size: 0;
  }
  .titleBox .mainTitle .introduce .give .love,.loveClick{
    display: inline-block;
    width: 23px;
    height: 19px;
    padding-right: 6px;
    cursor: pointer;
  }
  .titleBox .mainTitle .introduce .give .love{
    background: url("./loveicon.png")no-repeat -35px -13px;
  }
  .titleBox .mainTitle .introduce .give .loveClick{
    background: url("./loveicon.png")no-repeat -5px -13px;
  }
  .titleBox .mainTitle .introduce .give .loveNumber{
    display: inline-block;
    margin:-4px 0 0 0;
    font-size: 18px;
    color: #0ed666;
    font-weight: 400;
    vertical-align: top;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
  }
  .option{
    width: 1032px;
    margin: 20px auto;
  }
  .option .option_tab{
    position: relative;
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #0ed666;
  }
  /*.option .option_tab .topLine,.botLine{
    position: absolute;
    width: 516px;
    height: 1px;
    background: #dcdedf;
  }*/
  /*.option .option_tab .topLine{
    top: 0;
    left: 516px;
  }
  .option .option_tab .botLine{
    top:29px;
    left: 0;
  }*/
  .option .option_tab li{
    float: left;
    width: 140px;
    height: 30px;
    line-height: 30px;
    background: #f4f3f3;
    font-size: 14px;
    color:#bababa ;
    text-align: center;
    cursor: pointer;
  }
  .option .option_tab .active{
    background: #fff;
    color: #0ed666;
    border: 1px solid #0ed666;
    border-bottom-color: #fff;
  }
  .option .option_tab li:first-child{
    margin-left: 376px;
  }

</style>

