<template>
  <div>
    <v-nav></v-nav>
    <div class="details clear">
      <div class="blogLeft">
        <div class="bdL" id="bdL">
          <h2>{{this.onlyBlog.title}}</h2>
          <div class="person clear">
            <i class="peoIcon"></i>
            <div class="nameDate">
              <span class="peoName">{{this.onlyBlog.authorName}}</span>
              <span class="peoDate">{{this.onlyBlog.updateTimeStr}}</span>
            </div>
          </div>
          <div class="topImg">
            <img :src="this.onlyBlog.faceImg" alt="">
          </div>
          <div id="blogContent">

          </div>


        </div>

      </div>
      <div class="bdR">
        <div class="conR">
          <div class="ay">
            <div class="sing">
              <p class="singTitle">
                Sign Up for Our Free
                <br>
                Newsletters
              </p>
              <input type="text" class="eI" placeholder="Email" v-model="inputText" @focus="focus">
              <p class="format" v-show="emailState">Please submit in right format.</p>
              <p class="success" v-show="success">Thank you for signing up!</p>
              <div class="mask" v-show="mask"></div>
              <div class="btnBox">
                <button class="btnText" @click="sign" :disabled="boolean">SIGN UP</button>
              </div>
            </div>
          </div>
          <div class="belated" v-show="targetAddress">
            <span class="linkTitle">RELATED LINKS:</span>
            <div class="linkBox" v-for="blogLink in this.onlyBlog.blogLinks">
              <a href="javascript:;" @click="link(blogLink.targetAddress)">
                {{blogLink.linkName}}
            </a>
              <hr>
            </div>
          </div>
          <!--广告位-->
          <!--<div class="ad">

          </div>-->
        </div>
      </div>
    </div>
    <v-goTop></v-goTop>
    <v-footer></v-footer>
  </div>

</template>

<script type="text/ecmascript-6">
  import $ from 'jquery'
  import '../../common/css/reset.min.css'
  import nav from '../public/nav/nav'
  import footer from '../public/footer/footer'
  import gotop from '../public/goTop/goTop'

  export default{
    data(){
      return {
        onlyBlog: '',
        targetAddress: true,
        url: '',
        inputText: '',
        emailState: false,
        success: false,
        mask: false,
      }
    },
    components:{
      'v-footer':footer,
      'v-nav':nav,
      'v-goTop':gotop,
    },
    methods: {
      link(http){
        let reg = /^http/;
        if (reg.test(http)) {
          window.open(http)
        } else {
          window.open("http://" + http)
        }
      },
      focus(){
        this.emailState = false
      },
      sign(){
        var reg1 = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (this.inputText === '' || !reg1.test(this.inputText)) {
          this.emailState = true
        } else {
          let _this = this;
          _this.$http.post('http://business.careerchina.com/cc/to/c/storageEmail.action', {'email': _this.inputText}).then(function (response) {
            if (response.body.insertResult === true) {
              _this.success = true;
              window.clearTimeout(timer);
              let timer = window.setTimeout(function () {
                _this.success = false;
              }, 3000);
              _this.boolean = true;
              _this.mask = true;
              _this.inputText = '';
            }
          })
        }
      },
    },
    created(){
      //var addthis_share = {};
      //请求数据
      String.prototype.queryURLParameter = function () {
        var obj = {},
          reg = /([^?=&#]+)=([^?=&#]+)/g;
        this.replace(reg, function () {
          var key = arguments[1],
            value = arguments[2];
          obj[key] = value;
        });
        return obj;
      };
      let blodId = window.location.href.queryURLParameter()["id"];
      this.$http.get('http://business.careerchina.com/cc/blog/getOneById.action?blogId=' + blodId + '').then(function (response) {
        if (response.body.error_code === 0) {
          this.onlyBlog = response.body.data;
          let aCon = document.getElementById('blogContent');
          aCon.innerHTML = response.body.data.blogContent;
          if (response.body.data.blogLinks.length === 0) {
            this.targetAddress = false
          }
          this.url = window.location.href;
          addthis_share={
            url: this.url,
            title: this.onlyBlog.title,
            description: this.onlyBlog.description,
            media: this.onlyBlog.faceImg
          };
          var script= document.createElement('script');
          script.type= 'text/javascript';
          script.src= '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-58f6c687851a27e3';
          $('body').append(script);
          $('#keywords').attr('content',this.onlyBlog.title);
          $('#des').attr('content',this.onlyBlog.description);
          $('title').html(this.onlyBlog.title);
        }
      });

    }
  }
</script>

<style>
  .details {
    position: relative;
    width: 1000px;
    padding: 84px 0;
    margin: auto;
  }

  .details .blogLeft {
    float: left;
    width: 700px;
  }

  .details .bdL {
    width: 100%;
    background: #fff;
  }

  .details .bdL h2 {
    font-size: 24px;
    color: #252525;
    font-weight: 600;
  }

  .details .bdL .person {
    margin: 10px 0;
  }

  .details .bdL .person .peoIcon {
    display: inline-block;
    width: 48px;
    height: 48px;
    background: url("person.png") no-repeat;
    vertical-align: middle;
  }

  .details .bdL .person .nameDate {
    display: inline-block;
    margin-left: 2px;
    vertical-align: middle;
    color: #aeaeae;
  }

  .details .bdL .person .nameDate .peoName {
    margin-bottom: 3px;
    color: #3182e7;

  }

  .details .bdL .person .nameDate .peoName, .peoDate {
    display: block;
    font-size: 12px;

  }

  .details .bdL .topImg, .botImg {
    width: 100%;
    margin-bottom: 50px;
    border-radius: 10px;
  }

  /*.details .bdL .topImg{
    height: 211px;
  }
  .details .bdL .botImg{
    height: 376px;
  }*/
  .details .bdL .topImg img, .botImg img {
    width: 100%;
    height: 100%;
    box-shadow: 0 39px 73px rgba(0, 0, 0, .26);
    border-radius: 10px;
  }

  /*.details .bdL p{
    margin-bottom: 30px;
    font-size: 16px;
    color: #505050;
    line-height: 22px;
  }*/
  .bdR {
    float: right;
  }

  .bdR .conR {
    float: right;

  }

  .bdR .conR .ay {
    width: 204px;
    height: 264px;
    padding: 0 20px;
    border: 2px solid #f2f2f2;
    border-radius: 8px;
    margin-bottom: 14px;
  }

  .sing {
    position: relative;
    /* padding: 0 20px;*/
  }

  .sing .singTitle {
    margin: 30px 0 26px 0;
    font-size: 16px;
    color: #0ed666;
    line-height: 22px;
    text-align: center;
  }

  .sing .eI {
    width: 182px;
    height: 32px;
    font-size: 14px;
    padding: 0 10px;
    border-top: transparent;
    border-left: transparent;
    border-right: transparent;
    border-bottom: 1px solid #dcdcdc;
    text-align: center;
    color: #262626;
  }

  .sing .btnBox {
    width: 100%;
    height: 72px;
    padding: 36px 0 0 0;
    margin-top: 2px;
    background: url("Emailbanner.png") no-repeat center;
  }

  .sing .mask {
    position: absolute;
    top: 97px;
    left: 18px;
    width: 209px;
    height: 130px;
  }

  .sing .btnBox .btnText {
    display: block;
    width: 204px;
    height: 40px;
    line-height: 40px;
    background: #0ed666;
    font-size: 14px;
    color: #fff;
    text-align: center;
    border-radius: 40px;
    cursor: pointer;
    border: none;
  }

  .sing .btnBox .btnText:hover {
    background: #11b85b;
  }

  .sing .format, .success {

    margin-top: 8px;
    width: 100%;
  }

  .sing .format {
    color: #f7593f;
  }

  .sing .success {
    color: #0ed666;
  }

  .bdR .conR .belated {
    width: 100%;
    margin: 40px 0 38px 0;
  }

  .bdR .conR .belated .linkTitle {
    display: block;
    margin-bottom: 10px;
    font-size: 14px;
    color: #9c9c9c;
  }

  .bdR .conR .belated a {
    display: block;
    width: 237px;
    font-size: 14px;
    color: #3183e7;
    line-height: 18px;
    /*overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;*/
  }

  .bdR .conR .belated a:hover {
    text-decoration: underline;
  }

  .bdR .conR .belated hr {
    display: block;
    margin: 10px 0;
    width: 140px;
    height: 1px;
    background: #d4d4d4;
  }

  .bdR .conR .ad {
    width: 100%;
    height: 500px;
    border-radius: 8px;
    border: 2px solid #f2f2f2;
  }

  .share {
    position: absolute;
    top: 295px;
    left: -82px;
    z-index: 40;
  }

  .share .fix {
    position: fixed;
    top: 295px;
  }

  .share .fix input {
    display: none;
  }

  .share .fix .shareTitle {
    display: block;
    margin-bottom: 12px;
    font-size: 14px;
    color: #9c9c9c;
  }

  .share .fix .shareTab {
    margin-left: 6px;
  }

  .share .fix .shareTab .shList {
    margin-bottom: 10px;
    width: 36px;
    height: 36px;
    cursor: pointer;
  }

  .share .fix .shareTab .shList .bird, .pIcn, .google, .camera, .face {
    display: block;
    width: 100%;
    height: 100%;
  }

  .share .fix .shareTab .shList .bird {
    background: url("bird.png") no-repeat;
  }

  .share .fix .shareTab .shList .pIcn {
    background: url("pIcn.png") no-repeat;
  }

  .share .fix .shareTab .shList .google {
    background: url("google.png") no-repeat;
  }

  .share .fix .shareTab .shList .camera {
    background: url("camera.png") no-repeat;
  }

  .share .fix .shareTab .shList .face {
    background: url("face.png") no-repeat;
  }

  @media (max-width: 1200px) {
    /*.details .bdL{
      float: none;
      width: initial;
    }
    .bdR{
      float: none;
    }
    .bdR .conR{
      float: none;
    }
    .bdR .conR .sing{
      width: 100%;
      padding: 0;
    }
    .bdR .conR .sing .eI{
      display: block;
      text-align: center;
      margin: auto;
    }
    .bdR .conR .sing .btnBox .btnText{
      margin: auto;
    }
    .bdR .conR .belated{
      margin: 39px 0;
    }
    .bdR .conR .belated a{
      width:initial ;
    }
    .bdR .conR .ad{
      display: none;
    }*/
    .share {
      position: static;
      border-top: 2px solid #dcdcdc;
      padding-top: 15px;
    }

    .share .fix {
      position: static;
    }

    .share .fix .shareTitle {
      text-align: center;
    }

    .share .fix .shareTab {
      width: 240px;
      margin: auto;
      margin-top: 44px;
    }

    .share .fix .shareTab .shList {
      float: left;
      margin-right: 15px;
    }

    .share .fix .shareTab li:last-child {
      margin-right: 0;
    }
  }

  @media (max-width: 1000px) {
    .details {
      width: 94%;
      padding: 84px 3%;
    }

    .details .blogLeft {
      width: 70%;
    }

    .bdR {
      width: 24%;
    }
  }

  @media (max-width: 900px) {
    img {
      width: 100%;
    }

    .details .blogLeft {
      width: 100%;
      float: none;
    }

    .bdR {
      float: none;
      width: 100%;
    }

    .bdR .conR {
      float: none;
      width: 100%;
    }

    .bdR .conR .ay {
      width: 100%;
      padding: initial;
    }

    .bdR .conR .sing {
      width: 100%;
      padding: 0;
    }

    .sing .format {
      text-align: center;
    }

    .sing .success {
      text-align: center;
    }

    .bdR .conR .sing .eI {
      display: block;
      text-align: center;
      margin: auto;
    }

    .bdR .conR .sing .btnBox .btnText {
      margin: auto;
    }

    .bdR .conR .belated {
      margin: 39px 0;
    }

    .bdR .conR .belated a {
      width: initial;
    }

    .bdR .conR .ad {
      display: none;
    }
  }
</style>
