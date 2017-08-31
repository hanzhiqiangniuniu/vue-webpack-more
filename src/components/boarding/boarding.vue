<template>
  <div>
    <v-nav></v-nav>
    <ul class="tab">
      <li>
        <a href="life-in-china-blog.html" title="life in China">Home</a>
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
        <a href="javascript:;" class="active" title="arrive in China">On-Boarding</a>
      </li>
    </ul>
    <div class="boarding">
      <div class="carousel">
        <!--轮播图-->
        <div class="box" id="box">
          <div class="boxInner">
            <div class="swiper-slide" v-for="carousel in this.carousels" @click="only(carousel.urlWords)">
              <img :src="carousel.faceImg" :alt="carousel.faceImgAlt">
              <div class="posiMask">
                <h4>
                  {{carousel.title}}
              </h4>
                <p class="making">
                  {{carousel.description}}
              </p>
                <div class="person clear">
                  <i class="peoIcon"></i>
                  <div class="nameDate">
                    <span class="peoName">{{carousel.authorName}}</span>
                    <span class="peoDate">{{carousel.updateTimeStr}}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="swiper-slide" v-if="one" @click="only(carousels1.urlWords)">
              <img :src="this.carousels1.faceImg" :alt="this.carousels1.faceImgAlt">
              <div class="posiMask">
                <h4>
                  {{this.carousels1.title}}
              </h4>
                <p class="making">
                  {{this.carousels1.description}}
              </p>
                <div class="person clear">
                  <i class="peoIcon"></i>
                  <div class="nameDate">
                    <span class="peoName">{{this.carousels1.authorName}}</span>
                    <span class="peoDate">{{this.carousels1.updateTimeStr}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--分页器-->
        <div class="pageBox clear">
          <ul class="bannerPage" id="bannerpage">
          </ul>
        </div>
      </div>
      <div class="blogcontent clear">
        <div class="blogLeft">
          <ul class="blog-tab">
            <li class="blog-list clear" v-for="detailData in this.detailDatas">
              <div class="listL">
                <a class="title" href="javascript:;" target="_blank" @click="blogDetail(detailData.urlWords)">
                  {{detailData.title}}
            </a>
                <P class="listField">
                  {{detailData.description}}
            </P>
              </div>
              <div class="listImg">
                <img :src="detailData.faceImg" :alt="detailData.faceImgAlt">
              </div>
            </li>
          </ul>
          <div class="more" v-show="more" id="more">
            <a href="javascript:;">more</a>
            <i class="downIc"></i>
          </div>
          <div class="loading" v-show="loading">
          </div>
        </div>
        <div class="conR">
          <div class="cl">
            <v-sendEmail></v-sendEmail>
          </div>
          <!--<div class="ad">
            <img :src="this.carousels1.adsPicture" alt="">
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
  import '../../common/css/blogList.css'
  import '../../common/css/childNav.css'
  import nav from '../public/nav/nav'
  import footer from '../public/footer/footer'
  import gotop from '../public/goTop/goTop'
  import sendEmail from '../public/sendEmail/sendEmail'
  import interfaceStr from '../../common/js/interface.js'
  export default{
    data(){
      return{
        detailDatas:'',
        carousels:'',
        carousels1:'',
        more:false,
        loading:false,
        one:true
      }
    },
    components:{
      'v-footer':footer,
      'v-nav':nav,
      'v-goTop':gotop,
      'v-sendEmail':sendEmail
    },
    methods:{
      blogDetail(urlWords){
        window.open('/'+urlWords+'.html');
      },
      only(urlWords){
        window.open('/'+urlWords+'.html');
      }
    },
    mounted(){
          document.body.scrollTop=0;
          var utils=(function(){
            var flag='getComputedStyle' in window;
            function rnd(n,m){
              n=Number(n);
              m=Number(m);
              if(isNaN(n) || isNaN(m)){
                return Math.random();//如果传的数字无效，直接返回0-1随机小数
              }
              if(n>m){
                tmp=n;
                n=m;
                m=tmp;
              }
              return Math.round(Math.random()*(m-n)+n);
            }
            function listToArray(arg){
              if(flag){
                return Array.prototype.slice.call(arg)
              }
              var ary=[];
              for(var i=0; i<arg.length; i++){
                ary[ary.length]=arg[i];
              }
              return ary;

            }
            function jsonParse(jsonStr){
              /*var obj={};
               if('JSON' in window){//高级浏览器支持
               obj=JSON.parse(jsonStr);
               }else{//处理低级浏览器的兼容
               obj=eval('('+jsonStr+')')
               }
               return obj;*/
              return 'JSON' in window?JSON.parse(jsonStr):eval('('+jsonStr+')');
            }
            function win(attr,value){
              //获取时候就得return； 设置的时候不需要；
              //win有两个功能： 获取-return 设置（不需要return）
              //当win方法调用时，传了一个参数的时候（1.arguments.length 2.typeof value==='undefined'）；就是获取；否则就是设置；
              if(typeof value==='undefined'){//获取
                return document.documentElement[attr]||document.body[attr];
              }
              //设置；
              document.documentElement[attr]=document.body[attr]=value;
            }
            function offset(curEle){
              var l=curEle.offsetLeft;
              var t=curEle.offsetTop;
              var par=curEle.offsetParent;
              while(par){
                if(navigator.userAgent.indexOf('MSIE 8.0')===-1){
                  l+=par.clientLeft;
                  t+=par.clientTop;
                }
                l+=par.offsetLeft;
                t+=par.offsetTop;
                par=par.offsetParent;
              }
              return {left:l,top:t}
            }
            function getByClass(curEle,strClass){
              curEle=curEle||document;
              if(flag){
                return this.listToArray(curEle.getElementsByClassName(strClass))
              }
              var aryClass=strClass.replace(/(^ +)|( +$)/g,'').split(/\s+/g);
              var nodeList=curEle.getElementsByTagName('*');
              var ary=[];
              for(var i=0; i<nodeList.length; i++){
                var curNode=nodeList[i];
                var bOk=true;
                for(var k=0; k<aryClass.length; k++){
                  var curClass=aryClass[k];
                  //var reg=new RegExp('(^| +)'+curClass+'( +|$)')
                  var reg=new RegExp('\\b'+curClass+'\\b');
                  if(!reg.test(curNode.className)){
                    bOk=false;
                    break;
                  }
                }
                if(bOk){
                  ary[ary.length]=curNode;
                }
              }
              return ary;
            }
            function hasClass(curEle,cName){
              cName=cName.replace(/(^ +)|( +$)/g,'')
              var reg=new RegExp('\\b'+cName+'\\b');
              return reg.test(curEle.className)
            }
            function addClass(curEle,strClass){
              var aryClass=strClass.replace(/(^ +)|( +$)/g,'').split(/\s+/g);
              for(var i=0; i<aryClass.length; i++){
                var curClass=aryClass[i];
                if(!this.hasClass(curEle,curClass)){
                  curEle.className+=' '+curClass;
                }
              }
            }
            function removeClass(curEle,strClass){
              var aryClass=strClass.replace(/(^ +)|( +$)/g,'').split(/\s+/g);
              for(var i=0; i<aryClass.length; i++){
                //var reg=new RegExp('(^| +)'+aryClass[i]+'( +|$)');
                var reg=new RegExp('\\b'+aryClass[i]+'\\b');
                if(reg.test(curEle.className)){
                  curEle.className=curEle.className.replace(reg, ' ').replace(/\s+/g,' ').replace(/(^ +)|( +$)/g,'');
                }
              }
            }
            function setCss(curEle,attr,value){
              if(attr==='float'){
                curEle.style.styleFloat=value;
                curEle.style.cssFloat=value;
                return;
              }
              if(attr==='opacity'){
                curEle.style.opacity=value;
                curEle.style.filter='alpha(opacity='+value*100+')';
                return;
              }
              var reg=/(width|height|top|right|bottom|left|((margin|padding)(top|right|bottom|left)?))/;
              if(reg.test(attr)){
                value=parseFloat(value)+'px';
              }
              curEle.style[attr]=value;
            }
            function getCss(curEle,attr){
              var val,reg;
              if(flag){
                val=getComputedStyle(curEle,false)[attr];
              }else{
                if(attr==='opacity'){
                  val=curEle.currentStyle['filter'];
                  reg=/^alpha\(opacity[=:](\d+)\)$/;
                  return reg.test(val)?reg.exec(val)[1]/100:1;
                }else{
                  val=curEle.currentStyle[attr];
                }

              }
              reg=/^([+-])?\d+(\.\d+)?(pt|px|rem|em)$/
              return reg.test(val)?parseFloat(val):val;
            }
            function setGroupCss(curEle,options){
              for(var attr in options){
                this.setCss(curEle,attr,options[attr]);
              }
            }
            function css(curEle){
              var arg2=arguments[1];
              if(typeof arg2==='string'){//获取 或 设置
                var arg3=arguments[2];
                if(typeof arg3==='undefined'){//arg3实参不存在；
                  return this.getCss(curEle,arg2)
                }else{//设置1个 arg3实参存在
                  this.setCss(curEle,arg2,arg3)
                }
              }
              if(arg2.toString()==='[object Object]'){//说明第二个参数是个对象
                this.setGroupCss(curEle,arg2);
              }
              /*if(arg2 instanceof Object){

               this.setGroupCss(curEle,arg2);
               }
               if(arg2.constructor.name==='Object'){
               console.dir(arg2.constructor)
               this.setGroupCss(curEle,arg2);
               }*/
            }
            function getChildren(curEle){
              if(flag){
                return this.listToArray(curEle.children);
              }
              var ary=[];
              //获取当前元素下的所有子节点：文本节点，注释节点，document节点，元素节点
              var nodeList=curEle.childNodes;
              for(var i=0; i<nodeList.length; i++){
                if(nodeList[i].nodeType===1){
                  ary[ary.length]=nodeList[i];
                }
              }
              return ary;
            }
            function prev(curEle){
              if(flag){
                return curEle.previousElementSibling;
              }
              var pre=curEle.previousSibling;
              while(pre && pre.nodeType!==1){
                pre=pre.previousSibling;
              }
              return pre;
            }
            function prevAll(curEle){
              var pre=this.prev(curEle);
              var ary=[];
              while(pre){
                ary.unshift(pre)
                pre=this.prev(pre);
              }
              return ary;
            }
            function next(curEle){
              if(flag){
                return curEle.nextElementSibling;
              }
              var nex=curEle.nextSibling;
              while(nex && nex.nodeType !==1){
                nex=nex.nextSibling;
              }
              return nex;
            }
            function nextAll(curEle){
              var nex=this.next(curEle);
              var ary=[];
              while(nex){
                ary.push(nex);
                nex=this.next(nex);
              }
              return ary;
            }
            function sibling(curEle){
              var pre=this.prev(curEle);
              var nex=this.next(curEle);
              var ary=[];
              if(pre) ary.push(pre);
              /*pre?ary.push(pre):null;*/
              if(nex) ary.push(nex);
              return ary;
            }
            function siblings(curEle){
              return this.prevAll(curEle).concat(this.nextAll(curEle))
            }
            function firstChild(curEle){
              return this.getChildren(curEle)[0];
            }
            function lastChild(curEle){
              var aChs=this.getChildren(curEle);
              return aChs[aChs.length-1]
            }
            function index(curEle){
              return this.prevAll(curEle).length;
            }
            function appendChild(parent,newEle){
              parent.appendChild(newEle);
            }
            function prependChild(parent,newEle){
              /*//在父级下找所有的子元素
               var aChs=this.getChildren(parent);
               //如果有子元素的话，插入到第一个子元素的前面；
               if(aChs.length){
               var first=this.firChild(parent);
               parent.insertBefore(newEle,first)
               }else{
               parent.appendChild(newEle);
               }*/
              var first=this.firChild(parent);
              if(first){
                parent.insertBefore(newEle,first);
              }else{
                parent.appendChild(newEle);
              }
              //first?parent.insertBefore(newEle,first):parent.appendChild(newEle);

            }
            function insertBefore(newEle,oldEle){
              oldEle.parentNode.insertBefore(newEle,oldEle);
            }
            function insertAfter(newEle,oldEle){
              //获取指定元素的弟弟元素；
              var nex=this.next(oldEle);
              if(nex){
                //如果指定元素的弟弟元素节点存在话，把新元素插入弟弟元素前面
                oldEle.parentNode.insertBefore(newEle,nex);
              }else{
                //如果指定元素的弟弟元素节点不存在，直接插入父容器的末尾；
                oldEle.parentNode.appendChild(newEle);
              }

            }
            return {
              //rnd:兼容版的求一定范围的随机数 n,m
              rnd:rnd,
              //listToArray：类数组转数组
              listToArray:listToArray,
              //jsonParse:把JSON格式的字符串转成JSON格式的数据(对象)
              jsonParse:jsonParse,
              //win:浏览器盒子模型的兼容性处理；
              win:win,
              //offset:当前元素距离body的位置 {left:l,top:t}
              offset:offset,
              //getByClass：在一定的范围内，通过className来获取元素
              getByClass:getByClass,
              //hasClass:验证这个元素上是否有某个class名；
              hasClass:hasClass,
              //addClass:如果元素身上没有这个class名，我们才会添加
              addClass:addClass,
              //removeClass:如果元素身上有这个class名，才能删除
              removeClass:removeClass,
              //getCss:获取经过浏览器计算过的样式（面试：如何获取非行间样式）
              getCss:getCss,
              //setCss:设置样式 透明度 单位 float
              setCss:setCss,
              setGroupCss:setGroupCss,
              //css:取值赋值合体的函数：getCss,setCss,setGroupCss三合一
              css:css,
              //getChildren:获取当前元素下的所有子元素
              getChildren:getChildren,
              //prev:上一个哥哥元素节点
              prev:prev,
              //prevAll:获取当前元素的所有哥哥元素节点
              prevAll:prevAll,
              //next:下一个弟弟元素节点
              next:next,
              //nextAll:找所有的弟弟元素几点
              nextAll:nextAll,
              //sibling:获取相邻元素
              sibling:sibling,
              //siblings:获取当前元素的所有兄弟节点：所有的哥哥元素节点+所有的弟弟元素节点
              siblings:siblings,
              //firstChild:当前元素的第一个子元素
              firstChild:firstChild,
              //lastChild:获取当前元素下的最后一个子元素；
              lastChild:lastChild,
              //index：获取当前元素的索引
              index:index,
              appendChild:appendChild,
              //prependChild:把新元素插入到当前容得最开始
              prependChild:prependChild,
              insertBefore:insertBefore,
              //把新元素插入到指定元素的弟弟元素的前面；
              insertAfter:insertAfter
            }
          })();
          (function(){
            var myEffect={
              Linear:function(t,b,c,d){
                return c*t/d+b;
              },
              //指数衰减的反弹缓动
              Bounce: {
                easeIn: function (t, b, c, d) {
                  return c - myEffect.Bounce.easeOut(d - t, 0, c, d) + b;
                },
                easeOut: function (t, b, c, d) {
                  if ((t /= d) < (1 / 2.75)) {
                    return c * (7.5625 * t * t) + b;
                  } else if (t < (2 / 2.75)) {
                    return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
                  } else if (t < (2.5 / 2.75)) {
                    return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
                  } else {
                    return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
                  }
                },
                easeInOut: function (t, b, c, d) {
                  if (t < d / 2) {
                    return myEffect.Bounce.easeIn(t * 2, 0, c, d) * .5 + b;
                  }
                  return myEffect.Bounce.easeOut(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
                }
              },
              //二次方的缓动
              Quad: {
                easeIn: function (t, b, c, d) {
                  return c * (t /= d) * t + b;
                },
                easeOut: function (t, b, c, d) {
                  return -c * (t /= d) * (t - 2) + b;
                },
                easeInOut: function (t, b, c, d) {
                  if ((t /= d / 2) < 1) {
                    return c / 2 * t * t + b;
                  }
                  return -c / 2 * ((--t) * (t - 2) - 1) + b;
                }
              },
              //三次方的缓动
              Cubic: {
                easeIn: function (t, b, c, d) {
                  return c * (t /= d) * t * t + b;
                },
                easeOut: function (t, b, c, d) {
                  return c * ((t = t / d - 1) * t * t + 1) + b;
                },
                easeInOut: function (t, b, c, d) {
                  if ((t /= d / 2) < 1) {
                    return c / 2 * t * t * t + b;
                  }
                  return c / 2 * ((t -= 2) * t * t + 2) + b;
                }
              },
              //四次方的缓动
              Quart: {
                easeIn: function (t, b, c, d) {
                  return c * (t /= d) * t * t * t + b;
                },
                easeOut: function (t, b, c, d) {
                  return -c * ((t = t / d - 1) * t * t * t - 1) + b;
                },
                easeInOut: function (t, b, c, d) {
                  if ((t /= d / 2) < 1) {
                    return c / 2 * t * t * t * t + b;
                  }
                  return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
                }
              },
              //五次方的缓动
              Quint: {
                easeIn: function (t, b, c, d) {
                  return c * (t /= d) * t * t * t * t + b;
                },
                easeOut: function (t, b, c, d) {
                  return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
                },
                easeInOut: function (t, b, c, d) {
                  if ((t /= d / 2) < 1) {
                    return c / 2 * t * t * t * t * t + b;
                  }
                  return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
                }
              },
              //正弦曲线的缓动
              Sine: {
                easeIn: function (t, b, c, d) {
                  return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
                },
                easeOut: function (t, b, c, d) {
                  return c * Math.sin(t / d * (Math.PI / 2)) + b;
                },
                easeInOut: function (t, b, c, d) {
                  return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
                }
              },
              //指数曲线的缓动
              Expo: {
                easeIn: function (t, b, c, d) {
                  return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
                },
                easeOut: function (t, b, c, d) {
                  return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
                },
                easeInOut: function (t, b, c, d) {
                  if (t == 0) return b;
                  if (t == d) return b + c;
                  if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                  return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
                }
              },
              //圆形曲线的缓动
              Circ: {
                easeIn: function (t, b, c, d) {
                  return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
                },
                easeOut: function (t, b, c, d) {
                  return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
                },
                easeInOut: function (t, b, c, d) {
                  if ((t /= d / 2) < 1) {
                    return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
                  }
                  return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
                }
              },
              //超过范围的三次方缓动
              Back: {
                easeIn: function (t, b, c, d, s) {
                  if (s == undefined) s = 1.70158;
                  return c * (t /= d) * t * ((s + 1) * t - s) + b;
                },
                easeOut: function (t, b, c, d, s) {
                  if (s == undefined) s = 1.70158;
                  return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
                },
                easeInOut: function (t, b, c, d, s) {
                  if (s == undefined) s = 1.70158;
                  if ((t /= d / 2) < 1) {
                    return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
                  }
                  return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
                }
              },
              //指数衰减的正弦曲线缓动
              Elastic: {
                easeIn: function (t, b, c, d, a, p) {
                  if (t == 0) return b;
                  if ((t /= d) == 1) return b + c;
                  if (!p) p = d * .3;
                  var s;
                  !a || a < Math.abs(c) ? (a = c, s = p / 4) : s = p / (2 * Math.PI) * Math.asin(c / a);
                  return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
                },
                easeOut: function (t, b, c, d, a, p) {
                  if (t == 0) return b;
                  if ((t /= d) == 1) return b + c;
                  if (!p) p = d * .3;
                  var s;
                  !a || a < Math.abs(c) ? (a = c, s = p / 4) : s = p / (2 * Math.PI) * Math.asin(c / a);
                  return (a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b);
                },
                easeInOut: function (t, b, c, d, a, p) {
                  if (t == 0) return b;
                  if ((t /= d / 2) == 2) return b + c;
                  if (!p) p = d * (.3 * 1.5);
                  var s;
                  !a || a < Math.abs(c) ? (a = c, s = p / 4) : s = p / (2 * Math.PI) * Math.asin(c / a);
                  if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
                  return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
                }
              }
            }
            function move(curEle,target,duration,effect,callback){
              var tmpEffect=myEffect.Linear;
              var ary = ["Linear", "Elastic-easeOut", "Back-easeOut", "Bounce-easeOut", "Expo-easeIn","Back-easeInOut","Back-easeIn"];
              //1.根据用户传的数字来实现不同的运动；
              if(typeof effect==='number'){
                var str=ary[effect%ary.length];//"Elastic-easeOut"
                ary=str.split('-');
                tmpEffect=ary.length>=2?myEffect[ary[0]][ary[1]]:myEffect[ary[0]];//myEffect.Elastic.easeOut
              }else if(typeof effect==='object'){
                tmpEffect=effect.length>=2?myEffect[effect[0]][effect[1]]:myEffect[effect[0]];
              }else if(typeof effect==='function'){
                callback=effect;
              }
              //为Linear中参数做准备
              var begin={};
              var change={};
              var time=null;
              //根据target来补充begin和change里面的值；
              for(var attr in target){
                begin[attr]=utils.css(curEle,attr);
                change[attr]=target[attr]-begin[attr];
              }
              //定时器性能优化
              clearInterval(curEle.timer);//关闭的是开启定时器之前的没用的定时器
              curEle.timer=setInterval(function(){
                //时间的不断累加
                time+=10;
                //停止条件
                if(time>=duration){
                  //直接设置到目标值
                  utils.css(curEle,target);
                  //这里为了关闭定时器
                  clearInterval(curEle.timer);//此时关闭的是现在开着的定时器
                  /*if(typeof callback==='function'){
                   callback.call(curEle);
                   }*/
                  callback && callback.call(curEle);
                  return;
                }
                //获取每个属性的最新位置，拿到每个最新位置，都需要分别设置
                for(var attr in target){
                  //获取每个属性的最新位置
                  var curPos=tmpEffect(time,begin[attr],change[attr],duration);
                  //对新位置的分别设置
                  utils.css(curEle,attr,curPos);
                }
              },10)
            }
            window.myAnimate=move;
          })();
          var oBox=document.getElementById('box');
          var oBoxInner=oBox.getElementsByTagName('div')[0];
          var aDiv=document.getElementsByClassName('swiper-slide');
          var oUl=document.getElementById('bannerpage');
          var aLi=oUl.getElementsByTagName('li');
          var step=0;
          //1）图片自动轮播
          /*clearInterval(autoTimer);*/
          var autoTimer=setInterval(autoMove,5000);
          function autoMove(){
            if(step>=aDiv.length-1){
              step=0;
              utils.css(oBoxInner,'left',-step*1050);
            }
            if(aDiv.length>1){
              step++;
            }
            //utils.css(oBoxInner,'left',-step*1000)
            //小技巧：在使用运动库前，先写好效果，再加运动
            myAnimate(oBoxInner,{left:-step*1050},500);
            bannerTip();
          }
          //2）圆按钮也是自动轮播
          function bannerTip(){
            // var tmpStep=step>aLi.length-1?0:step;
            var tmpStep=step>=aLi.length?0:step;
            for(var i=0; i<aLi.length; i++){
              if(i===tmpStep){
                aLi[i].className='page bg';
              }else{
                aLi[i].className='page';
              }
            }
          }
          //3）鼠标移入停止运动，鼠标移出继续运动
          oBox.onmouseover=function(){
            clearInterval(autoTimer);
          };
          oBox.onmouseout=function(){
            autoTimer=setInterval(autoMove,3000);
          };
          //4）点击焦点手动切换
          function handleChange(){
            for(var i=0; i<aLi.length; i++){
              aLi[i].index=i;//用自定义属性保存索引
              aLi[i].onclick=function(){
                step=this.index;//当点击焦点的时候，把索引做为step
                myAnimate(oBoxInner,{left:-step*1050},500);
                bannerTip();
              }
            }
          }
          let page=1;
          let aMore=document.getElementById('more');
          let _this=this;
          aMore.onclick=function () {
            page++;
            _this.$http.get('http://'+interfaceStr+'/cc/blog/pageBlogs/getByCategoryId.action?rowCount=10&page='+page+'&categoryId=5').then(function (response) {
              let Listdatas=response.body.data.data;
              if(Listdatas.length<=10){
                _this.more=false
              }else {
                _this.loading=true;
                _this.more=false;
                window.clearInterval(timer);
                var timer=setInterval(function () {
                  _this.loading=false;
                  _this.more=true;
                },1000)
              }

              for(var i=0; i<Listdatas.length;i++){
                _this.detailDatas.push(Listdatas[i]);
              }
              _this.carousels=response.body.hotdata;
              _this.carousels1=response.body.hotdata[0];
            });
          };
          this.$http.get('http://'+interfaceStr+'/cc/blog/pageBlogs/getByCategoryId.action?rowCount=10&page='+page+'&categoryId=7').then(function (response) {
            this.carousels=response.body.hotdata;
            this.detailDatas=response.body.data.data;
            this.carousels1=response.body.hotdata[0];
            if(this.detailDatas.length>=10){
              this.more=true;
            }
            if(this.carousels.length===1){
              this.one=false
            }
            var str1='';
            for(var i=0;i<this.carousels.length;i++){
              str1+=i===0?'<li class="page bg"><img src="'+this.carousels[i].faceImg+'" alt=""></li>':'<li class="page"><img src="'+this.carousels[i].faceImg+'" alt=""></li>'
            }
            oUl.innerHTML=str1;
            handleChange();
          })
    }
  }
</script>

<style scoped>
  .boarding {
    width: 1050px;
    height: 100%;
    margin: auto;
    padding-top: 67px;
  }
</style>
