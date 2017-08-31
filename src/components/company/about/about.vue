<template>
  <div>
    <div class="aboutBox">
      <h4>INTRODUCTION</h4>
      <p class="information">

      </p>
    </div>
    <div class="imgTab" id="imgTab">

    </div>
    <p class="pageBox" id="pageBox">
    </p>
    <!--<div class="articles">
      <div class="title">
        <h4>Articles</h4>
        <span></span>
      </div>
      <ul class="blogTab">
        <li class="blogList">
          <img src="smallFigure.png" alt="">
          <div class="blogCon">
            <h5>Article Title</h5>
            <p>
              detail detaildetail detaildetail detaildetail detaildetail detaildetail detaildetail
              detail detaildetail detaildetail detaildetail detaildetail detaildetail detaildetail
            </p>
          </div>
        </li>
        <li class="blogList">
          <img src="smallFigure.png" alt="">
          <div class="blogCon">
            <h5>Article Title</h5>
            <p>
              detail detaildetail detaildetail detaildetail detaildetail detaildetail detaildetail
              detail detaildetail detaildetail detaildetail detaildetail detaildetail detaildetail
            </p>
          </div>
        </li>
      </ul>
    </div>-->
  </div>


</template>

<script type="text/ecmascript-6">
  import $ from 'jquery'
  export default{
    props: {
      detailData: {
        type: Object
      },
      videoData: {
        type: Array
      },
      imgData: {
        type: Array
      },
      blog:{
          type:Array
      }
    },
    data(){
      return {
        vData: true,
        pages: ''
      }
    },

    mounted(){

      var oTab = document.getElementById('imgTab'),
          aDiv=oTab.getElementsByTagName('div'),
          oP=document.getElementById('pageBox'),
          aSpan=oP.getElementsByTagName('span');


      var str = '',
          str1='',
          str2='';
      if (this.videoData != '') {
        for (var i = 0; i < this.videoData.length; i++) {
          str1 += '<div class="imgBox">'
            +'<video class="myVideo" id="myVideo" src="' + this.videoData[i].resourceUrl + '" controls width="100%" height="100%">'
            +'</video>'
            +'</div>'
          oTab.innerHTML=str1
        }
      }
      for (var i = 0; i < this.imgData.length; i++) {
        str += '<div class="imgBox">'
          +'<img class="imgCon" src="' + this.imgData[i].resourceUrl + '" alt="">'
          +'</div>';

      }
      $('#imgTab').append(str)

      for(var i=0;i<aDiv.length;i++){
        aDiv[0].className = 'imgBox show'
        str2+=i===0?'<span class="pageList active"></span>':'<span class="pageList"></span>'
        $('#pageBox').html(str2)
      }

      for (var i = 0; i < aSpan.length; i++) {
        aSpan[i].index = i;
        aSpan[i].onmouseover = function () {
          for (let i = 0; i < aSpan.length; i++) {
            aSpan[i].className = 'pageList';
            aDiv[i].className = 'imgBox';
            $('.myVideo').each(function (index, item) {
              $(item)[0].pause()
            })
          }
          this.className = 'pageList active';
          aDiv[this.index].className = 'imgBox show'
        }
      }
      $('.information').html(this.detailData.instituteBasicInfo.introduction)
    },
  }
</script>

<style>
  .aboutBox {
    margin: auto;
    width: 1032px;
  }

  .aboutBox h4 {
    margin-top: 87px;
    font-size: 18px;
    color: #262626;
  }

  .aboutBox .information {
    margin: 30px 0;
    font-size: 14px;
    color: #9c9c9c;
    line-height: 22px;
  }

  .aboutBox img {
    width: 100%;
    height: 602px;
    box-shadow: 0 31px 43px rgba(123, 130, 135, .38);
  }

  .imgTab {
    width: 100%;
    height: 600px;
  }

  .imgTab .imgBox {
    width: 1000px;
    height: 600px;
    display: none;
    overflow: hidden;
    margin: auto;
  }

  .imgTab .show {
    display: block;
  }

  .imgTab .imgBox img {
    width: 100%;
  }

  .pageBox {
    margin: 30px auto;
    font-size: 0;
    text-align: center;
  }

  .pageBox .pageList {
    /*float: left;*/
    display: inline-block;
    width: 40px;
    height: 8px;
    margin-right: 15px;
    cursor: pointer;
    overflow: hidden;
    background: #ccc;
    transition: .5s all;
  }

  .pageBox .active {
    width: 80px;
    background: #0ed666;
  }

  .pageBox li:last-child {
    margin-right: 0;
  }

  /*.imgTab .pageBox .pageList img{
    width: 100%;
    transition: transform 1s;
  }
  .imgTab .pageBox .active img{
    transform: scale(1.2);
  }
  .imgTab .pageBox .pageList:hover img{
    transform: scale(1.2);
  }*/
  .articles {
    width: 1032px;
    margin: 95px auto;
    font-size: 0;
    display: none;
  }

  .articles .title {
    margin-bottom: 5px;
  }

  .articles .title h4 {
    display: inline-block;
    font-size: 18px;
    color: #bababa;
  }

  .articles .title span {
    display: inline-block;
    margin-left: 5px;
    width: 702px;
    border-bottom: 1px solid #bababa;
  }

  .articles .blogTab {
    width: 100%;
  }

  .articles .blogTab .blogList {
    margin-top: 35px;
    width: 100%;
    height: 144px;
    border: 1px solid #f8f7f7;
    border-radius: 10px;
    box-shadow: 0 17px 32px rgba(123, 130, 135, .13);
  }

  .articles .blogTab .blogList img {
    float: left;
    width: 220px;
    height: 100%;
  }

  .articles .blogTab .blogList .blogCon {
    width: 758px;
    float: left;
    padding: 44px 0 0 53px;
    background: #fff;
  }

  .articles .blogTab .blogList .blogCon h5 {
    font-size: 18px;
    color: #00aedd;
    font-weight: 600;
  }

  .articles .blogTab .blogList .blogCon p {
    width: 450px;
    margin-top: 12px;
    font-size: 12px;
    color: #c4c2c7;
    line-height: 20px;
  }

</style>
