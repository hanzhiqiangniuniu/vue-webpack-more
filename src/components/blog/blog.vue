<template>
  <div class="blogHome">
    <v-nav></v-nav>
    <div class="comHome">
      <ul class="tab">
        <li>
          <a href="javascript:;" class="active" title="life in China">Home</a>
        </li>
        <li>
          <a href="live-in-china.html" title="live in China">Live</a>
        </li>
        <li>
          <a href="travel-in-china.html" title="travel in China">Travel</a>
        </li>
        <li>
          <a href="work-in-china.html" title="work in China">Work</a>
        </li>
        <li>
          <a href="guides.html" title="city guides in China">Guides</a>
        </li>
        <li>
          <a href="on-boarding.html" title="arrive in China">On-Boarding</a>
        </li>
      </ul>
      <div class="hotBlog clear">
        <div class="hotL">
          <img :src="this.blogData1.faceImg" :alt="this.blogData1.faceImgAlt">
          <div class="index">
            <h2 class="indexTitle">
              {{this.blogData1.title}}
           </h2>
            <p class="indexIn">
              {{this.blogData1.description}}
           </p>
          </div>
        </div>
        <ul class="hotC">
          <li class="hotC_list list1">
            <img :src="this.blogData2.faceImg" :alt="this.blogData2.faceImgAlt">
            <div class="listMask">
              <h2 class="maskIn">
                {{this.blogData2.title}}
             </h2>
            </div>
          </li>
          <li class="hotC_list list2">
            <img :src="this.blogData3.faceImg" :alt="this.blogData3.faceImgAlt">
            <div class="listMask">
              <h2 class="maskIn">
                {{this.blogData3.title}}
             </h2>
            </div>
          </li>
          <li class="hotC_list list3">
            <img :src="this.blogData4.faceImg" :alt="this.blogData4.faceImgAlt">
            <div class="listMask">
              <h2 class="maskIn">
                {{this.blogData4.title}}
             </h2>
            </div>
          </li>
        </ul>
        <div class="sendBox">
          <v-sendEmail></v-sendEmail>
        </div>
        <!--<div class="hotR">
          <img :src="this.blogData1.adsPicture" alt="">
        </div>-->
      </div>
      <div class="blogCon">
        <div class="blogCategory" v-for="categroy in this.categories">
          <div class="categoryTitle">
            <h3>{{categroy.categoryName}}</h3>
            <a href="javascript:;" class="more"  @click="seeAll(categroy.id)">
              <span class="see">See all</span>
              <i class="seeIcon"></i>
            </a>
          </div>
          <ul class="categoryTab clear">
            <li class="categoryList" v-for="blog in categroy.blogs"  @click="onlyBlog(blog.urlWords)">
              <div class="imgBox">
                <img :src="blog.faceImg" :alt="blog.faceImgAlt">
                <div class="conMask"></div>
              </div>

              <div class="imgIntroduce">
                <h2>
                  {{blog.title}}
               </h2>
                <p class="inWord">
                  {{blog.description}}
               </p>
                <span class="name">{{blog.authorName}}</span>
                <span class="date">{{blog.updateTimeStr}}</span>
              </div>
            </li>
          </ul>
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
  import '../../common/css/childNav.css'
  import nav from '../public/nav/nav'
  import footer from '../public/footer/footer'
  import gotop from '../public/goTop/goTop'
  import sendEmail from '../public/sendEmail/sendEmail'
  import interfaceStr from '../../common/js/interface.js'
  export default{
      data(){
          return{
            blogData1: '',
            blogData2: '',
            blogData3: '',
            blogData4: '',
            categories:'',
            url:'',
          }
      },
      components:{
        'v-sendEmail':sendEmail,
        'v-footer':footer,
        'v-nav':nav,
        'v-goTop':gotop,
      },
      methods:{
        onlyBlog(urlWords){
          window.open('/'+urlWords+'.html');
        },
        seeAll(id){
          if(id===3){
              location.href='work-in-china.html'
          }
          if(id===4){
            location.href='live-in-china.html'
          }
          if(id===5){
            location.href='travel-in-china.html'
          }
          if(id===6){
            location.href='guides.html'
          }
          if(id===7){
            location.href='on-boarding.html'
          }

        },
      },
      mounted(){
        this.$http.get('http://'+interfaceStr+'/cc/blog/hotPost/get.action').then(function(response){

          this.blogData1=response.body.homeCategory[0].blogs[0];
          this.blogData2=response.body.homeCategory[0].blogs[1];
          this.blogData3=response.body.homeCategory[0].blogs[2];
          this.blogData4=response.body.homeCategory[0].blogs[3];
          this.categories=response.body.categories
          var _this=this;
          $('.hotL').click(function () {
            _this.onlyBlog(_this.blogData1.urlWords)
          });
          $('.list1').click(function () {
            _this.onlyBlog(_this.blogData2.urlWords)
          });
          $('.list2').click(function () {
            _this.onlyBlog(_this.blogData3.urlWords)
          });
          $('.list3').click(function () {
            _this.onlyBlog(_this.blogData4.urlWords)
          })
        })

      },
  }
</script>

<style scoped>
  .comHome{
    width: 1046px;
    padding: 67px 77px 0 77px;
    margin: auto;
  }



  .comHome .hotBlog{
    width: 100%;
  }
  .comHome .hotBlog .hotL{
    position: relative;
    float: left;
    margin-right: 9px;
    width: 600px;
    height: 400px;
    border-radius: 8px;
    box-shadow: 0 39px 73px rgba(0,0,0,.26);
    overflow: hidden;
    cursor: pointer;
  }

  .comHome .hotBlog .hotL img{
    width: 100%;
    background-size: cover;
    transition: 1s all;
  }
  .comHome .hotBlog .hotL:hover img{
    transform: scale(1.2);
  }
  .comHome .hotBlog .hotL .index{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 510px;
    height: 112px;
    padding: 18px 45px;
    background: url("./img1-mask.png")no-repeat;
  }
  .comHome .hotBlog .hotL .index .indexTitle,.indexIn{
    line-height: 20px;
    /*overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;*/
    color: #fff;
  }
  .comHome .hotBlog .hotL .index .indexTitle{
    font-size: 24px;
    font-weight: 600;
    line-height: 28px;
    margin-bottom: 13px;
  }
  .comHome .hotBlog .hotL .index .indexIn{
    font-size: 14px;
  }
  .comHome .hotBlog .hotC{
    float: left;
  }
  .comHome .hotBlog .hotC .hotC_list{
    position: relative;
    margin-bottom: 20px;
    width: 180px;
    height: 120px;
    overflow: hidden;
    cursor: pointer;
  }
  .comHome .hotBlog .hotC .hotC_list img{
    width: 100%;
    background-size: cover;
    transition: 1s all;
  }
  .comHome .hotBlog .hotC .hotC_list:hover img{
    transform:  scale(1.2);
  }
  .hotBlog .hotC .hotC_list .listMask{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 162px;
    height: 34px;
    padding: 13px 9px;
    background: url("./hotC-img-mask.png")no-repeat;
    background-size: cover;
  }
  .hotBlog .hotC .hotC_list .listMask .maskIn{
    font-size:14px ;
    color: #fff;
    line-height: 18px;
    height: 36px;
    overflow: hidden;
    font-weight: 400;
  }
  .hotBlog .sendBox{
    padding: 68px 20px 0 20px;
    float: right;
    height: 332px;
    border-radius: 8px;
    box-shadow: 0 39px 73px rgba(0,0,0,.26);
  }
  .comHome .hotBlog .hotR img{
    width: 100%;
    height: 100%;
  }
  .blogCon{
    margin-top: 60px;
  }
  .blogCon .blogCategory{
    width: 100%;
    margin-bottom: 60px;
  }
  .blogCon .blogCategory .categoryTitle{
    margin-bottom: 18px;
    font-size: 0;
  }
  .blogCon .blogCategory .categoryTitle h3{
    display: inline-block;
    margin-right: 13px;
    font-size: 30px;
    color: #0ed666;
  }

  .blogCon .blogCategory .categoryTitle .more{
    display: inline-block;
    cursor: pointer;
  }
  .blogCon .blogCategory .categoryTitle .see{
    display: inline-block;
    font-size: 16px;
    color: #9c9c9c;
  }
  .blogCon .blogCategory .categoryTitle .seeIcon{
    display: inline-block;
    margin-left: 3px;
    width: 21px;
    height: 13px;
    background: url("./Rightjt.png")no-repeat;
    vertical-align: sub;
  }
  .blogCategory .categoryTab{
    width: 100%;
  }
  .blogCategory .categoryTab .categoryList{
    float: left;
    margin-right: 40px;
    width: 320px;
    height: 320px;
    border-radius: 8px;
    box-shadow: 0 5px 8px rgba(0,0,0,.07);
  }
  .blogCategory .categoryTab li:last-child{
    margin-right: 0;
  }
  .blogCategory .categoryTab .categoryList .imgBox{
    position: relative;
    width: 100%;
    height: 160px;
    overflow: hidden;
    cursor: pointer;
  }
  .blogCategory .categoryTab .categoryList img{
    display: block;
    width: 100%;
    transition: transform 1s;
    border-radius: 8px 8px 0 0;
  }
  .blogCategory .categoryTab .categoryList .imgBox:hover img{
    transform: scale(1.2);
  }
  .blogCategory .categoryTab .categoryList .conMask{
    position: absolute;
    top:0;
    left:0;
    width: 320px;
    height: 160px;
    background: url("./conimg-mask.png")no-repeat;
    background-size: cover;
  }
  .blogCategory .categoryTab .categoryList .imgIntroduce{
    width: 276px;
    padding: 15px 22px 10px 22px;
  }
  .blogCategory .categoryTab .categoryList .imgIntroduce h2,.inWord{
    /*overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;*/
  }
  .blogCategory .categoryTab .categoryList .imgIntroduce h2{
    font-size: 18px;
    color: #505050;
    font-weight: 600;
    cursor: pointer;
    height: 45px;
    overflow: hidden;
  }
  .blogCategory .categoryTab .categoryList .imgIntroduce h2:hover{
    text-decoration: underline;
  }
  .blogCategory .categoryTab .categoryList .imgIntroduce .inWord{
    margin: 10px 0;
    font-size: 12px;
    color: #5c5c5c;
    height: 30px;
    overflow: hidden;
  }
  .blogCategory .categoryTab .categoryList .imgIntroduce .name{
    display: block;
    margin-bottom: 4px;
    font-size: 12px;
    color: #3183e7;
  }
  .blogCategory .categoryTab .categoryList .imgIntroduce .date{
    display: block;
    font-size: 12px;
    color: #aeaeae;
  }
</style>
