webpackJsonp([16,0],{0:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var i=n(21),o=a(i),s=n(235),r=a(s),c=n(20),l=a(c);o.default.use(l.default),new o.default({el:"#about",template:"<App/>",components:{App:r.default}})},4:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{href:function(){try{document.body.scrollTop=0}catch(t){}},href2:function(){try{var t=document.getElementById("list_Box");t.style.marginTop="0",document.body.scrollTop=t.offsetTop}catch(t){}},href3:function(){document.body.scrollTop=600}}}},5:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),o=a(i);e.default={mounted:function(){var t=window.location.href,e=/working-in-china/g,n=/jobs-in-china.html/g,a=/companies-in-china/g,i=/company/g,s=/how-to-move-to-china/g,r=/job-placement-china/g,c=/china-work-visa/g,l=/moving-to-china/g,h=/life-in-china-blog/g,u=/live-in-china/g,d=/travel-in-china/g,A=/work-in-china/g,f=/guides/g,p=/on-boarding/g,v=/about-career-china/g;e.test(t)?(0,o.default)("#home").addClass("active"):a.test(t)||i.test(t)||n.test(t)?(0,o.default)("#JOB").addClass("active"):s.test(t)||r.test(t)||c.test(t)||l.test(t)?(0,o.default)("#ser").addClass("active"):h.test(t)||u.test(t)||d.test(t)||A.test(t)||f.test(t)||p.test(t)?(0,o.default)("#bl").addClass("active"):v.test(t)&&(0,o.default)("#us").addClass("active")}}},6:function(t,e,n){e=t.exports=n(2)(),e.push([t.id,'blockquote,body,button,dd,dl,dt,h1,h2,h3,h4,h5,h6,hr,input,li,ol,p,td,textarea,th,ul{margin:0;padding:0}body{font-style:normal;font-family:\\\\5FAE\\8F6F\\96C5\\9ED1,Helvetica,sans-serif}body,small{font-size:12px}h1{font-size:18px}h2{font-size:16px}h3{font-size:14px}h4,h5,h6{font-size:100%}ol,ul{list-style:none}a{background-color:transparent}a,a:active,a:hover{text-decoration:none}a:active,a:hover{outline-width:0}table{border-collapse:collapse;border-spacing:0}hr{border:0;height:1px}img{border-style:none}img:not([src]){display:none}svg:not(:root){overflow:hidden}html{-webkit-touch-callout:none;-webkit-text-size-adjust:100%}a,button,input,textarea{-webkit-tap-highlight-color:rgba(0,0,0,0)}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block}audio:not([controls]),video:not([controls]){display:none;height:0}progress{vertical-align:baseline}mark{background-color:#ff0;color:#000}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}button,input,select,textarea{font-size:100%;outline:0}button,input{overflow:visible}button,select{text-transform:none}textarea{overflow:auto}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-input-placeholder{color:inherit;opacity:.54}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}.clear:after{display:block;height:0;content:"";clear:both}@media (min-width:1200px){body{min-width:1200px}}',"",{version:3,sources:["/./src/common/css/reset.min.css"],names:[],mappings:"AAEA,qFACE,SAAU,AACV,SAAU,CACX,AAED,KAEE,kBAAmB,AACnB,sDAA2D,CAC5D,AAED,WALE,cAAgB,CAOjB,AAED,GACE,cAAe,CAChB,AAED,GACE,cAAe,CAChB,AAED,GACE,cAAe,CAChB,AAED,SACE,cAAe,CAChB,AAED,MACE,eAAgB,CACjB,AAED,EAEE,4BAA6B,CAC9B,AAED,mBAJE,oBAAsB,CAOvB,AAHD,iBACE,eAAiB,CAElB,AAED,MACE,yBAA0B,AAC1B,gBAAiB,CAClB,AAED,GACE,SAAU,AACV,UAAW,CACZ,AAED,IACE,iBAAkB,CACnB,AAED,eACE,YAAa,CACd,AAED,eACE,eAAgB,CACjB,AAED,KACE,2BAA4B,AAC5B,6BAA8B,CAC/B,AAED,wBACE,yCAA6C,CAC9C,AAED,oFACE,aAAc,CACf,AAED,4BACE,oBAAqB,CACtB,AAED,4CACE,aAAc,AACd,QAAS,CACV,AAED,SACE,uBAAwB,CACzB,AAED,KACE,sBAAuB,AACvB,UAAW,CACZ,AAED,QACE,kBAAmB,AACnB,cAAe,AACf,cAAe,AACf,uBAAwB,CACzB,AAED,IACE,aAAe,CAChB,AAED,IACE,SAAW,CACZ,AAED,6BACE,eAAgB,AAChB,SAAU,CACX,AAED,aACE,gBAAiB,CAClB,AAED,cACE,mBAAoB,CACrB,AAED,SACE,aAAc,CACf,AAED,qDACE,yBAA0B,CAC3B,AAED,wHACE,kBAAmB,AACnB,SAAU,CACX,AAED,4GACE,6BAA8B,CAC/B,AAED,6BACE,sBAAuB,AACvB,SAAU,CACX,AAED,kFACE,WAAY,CACb,AAED,cACE,6BAA8B,AAC9B,mBAAoB,CACrB,AAED,qFACE,uBAAwB,CACzB,AAED,4BACE,cAAe,AACf,WAAY,CACb,AAED,6BACE,0BAA2B,AAC3B,YAAa,CACd,AAED,aACE,cAAe,AACf,SAAU,AACV,WAAY,AACZ,UAAW,CACZ,AACD,0BACE,KACE,gBAAkB,CACnB,CACF",file:"reset.min.css",sourcesContent:['@charset "utf-8";\n/*！--珠峰培训CSS重置和样式初始化(参考Normalize.css) ~ v1.0--*/\nbody, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, button, input, textarea, th, td {\n  margin: 0;\n  padding: 0\n}\n\nbody {\n  font-size: 12px;\n  font-style: normal;\n  font-family: "\\5FAE\\8F6F\\96C5\\9ED1", Helvetica, sans-serif;\n}\n\nsmall {\n  font-size: 12px\n}\n\nh1 {\n  font-size: 18px\n}\n\nh2 {\n  font-size: 16px\n}\n\nh3 {\n  font-size: 14px\n}\n\nh4, h5, h6 {\n  font-size: 100%\n}\n\nul, ol {\n  list-style: none\n}\n\na {\n  text-decoration: none;\n  background-color: transparent\n}\n\na:hover, a:active {\n  outline-width: 0;\n  text-decoration: none\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0\n}\n\nhr {\n  border: 0;\n  height: 1px\n}\n\nimg {\n  border-style: none\n}\n\nimg:not([src]) {\n  display: none\n}\n\nsvg:not(:root) {\n  overflow: hidden\n}\n\nhtml {\n  -webkit-touch-callout: none;\n  -webkit-text-size-adjust: 100%\n}\n\ninput, textarea, button, a {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0)\n}\n\narticle, aside, details, figcaption, figure, footer, header, main, menu, nav, section, summary {\n  display: block\n}\n\naudio, canvas, progress, video {\n  display: inline-block\n}\n\naudio:not([controls]), video:not([controls]) {\n  display: none;\n  height: 0\n}\n\nprogress {\n  vertical-align: baseline\n}\n\nmark {\n  background-color: #ff0;\n  color: #000\n}\n\nsub, sup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline\n}\n\nsub {\n  bottom: -0.25em\n}\n\nsup {\n  top: -0.5em\n}\n\nbutton, input, select, textarea {\n  font-size: 100%;\n  outline: 0\n}\n\nbutton, input {\n  overflow: visible\n}\n\nbutton, select {\n  text-transform: none\n}\n\ntextarea {\n  overflow: auto\n}\n\nbutton, html [type="button"], [type="reset"], [type="submit"] {\n  -webkit-appearance: button\n}\n\nbutton::-moz-focus-inner, [type="button"]::-moz-focus-inner, [type="reset"]::-moz-focus-inner, [type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0\n}\n\nbutton:-moz-focusring, [type="button"]:-moz-focusring, [type="reset"]:-moz-focusring, [type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText\n}\n\n[type="checkbox"], [type="radio"] {\n  box-sizing: border-box;\n  padding: 0\n}\n\n[type="number"]::-webkit-inner-spin-button, [type="number"]::-webkit-outer-spin-button {\n  height: auto\n}\n\n[type="search"] {\n  -webkit-appearance: textfield;\n  outline-offset: -2px\n}\n\n[type="search"]::-webkit-search-cancel-button, [type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none\n}\n\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: .54\n}\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  font: inherit\n}\n\n.clear:after {\n  display: block;\n  height: 0;\n  content: "";\n  clear: both\n}\n@media (min-width: 1200px) {\n  body{\n    min-width: 1200px;\n  }\n}\n'],sourceRoot:"webpack://"}])},7:function(t,e){},8:function(t,e){},9:function(t,e,n){t.exports=n.p+"static/img/gongan.d0289dc.jpg"},10:function(t,e,n){var a,i;n(7),a=n(4);var o=n(12);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,i._scopeId="data-v-14b98f85",t.exports=a},11:function(t,e,n){var a,i;n(8),a=n(5);var o=n(13);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,i._scopeId="data-v-3bc133ad",t.exports=a},12:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("div",{staticClass:"site"},[n("div",{staticClass:"siteMain"},[n("h2"),t._v(" "),n("ul",{staticClass:"siteTab clear"},[t._m(0),t._v(" "),n("li",{staticClass:"siteList"},[n("h3",{staticClass:"navName"},[t._v("SERVICES")]),t._v(" "),n("a",{attrs:{href:"job-placement-china.html",title:"job placement China"}},[t._v("Career Advice")]),t._v(" "),n("a",{attrs:{href:"china-work-visa.html",title:"china work visa"}},[t._v("Work Visa")]),t._v(" "),n("a",{attrs:{href:"moving-to-china.html",title:"moving to china"}},[t._v("Ground Service")]),t._v(" "),n("a",{attrs:{href:"moving-to-china.html#quesTitle",title:"moving to china"},on:{click:t.href2}},[t._v("FAQS")])]),t._v(" "),t._m(1),t._v(" "),t._m(2)])]),t._v(" "),n("div",{staticClass:"siteBg"})]),t._v(" "),t._m(3)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"siteList"},[n("h3",{staticClass:"navName"},[t._v("PROGRAMS")]),t._v(" "),n("a",{attrs:{href:"jobs-in-china.html",title:"Jobs in China"}},[t._v("Featured Jobs")]),t._v(" "),n("a",{attrs:{href:"company/First-Leap-China.html",title:"First Leap China"}},[t._v("First Leap China")]),t._v(" "),n("a",{attrs:{href:"company/Meten-Education-Group.html",title:"Meten"}},[t._v("Meten")]),t._v(" "),n("a",{attrs:{href:"company/Kids-R-Kids.html",title:"Kids R Kids"}},[t._v("Kids R Kids")]),t._v(" "),n("a",{attrs:{href:"company/RDFZ-Xishan-School.html",title:"RDFZ Xinshan School"}},[t._v("RDFZ Xinshan School")]),t._v(" "),n("a",{attrs:{href:"company/Beijing-SMIC-Private-School.html",title:"Beijing SMIC School"}},[t._v("Beijing SMIC School")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"siteList"},[n("h3",{staticClass:"navName"},[t._v("ABOUT")]),t._v(" "),n("a",{attrs:{href:"about-career-china.html",title:"career china"}},[t._v("About Us")]),t._v(" "),n("a",{attrs:{href:"about-career-china.html#doing",title:"career china team"}},[t._v("Team")]),t._v(" "),n("a",{attrs:{href:"http://business.careerchina.com",target:"_blank"}},[t._v("For Chinese Companies")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"siteList",staticStyle:{"margin-right":"0"}},[n("h3",{staticClass:"navName"},[t._v("LATEST ARTICLES")]),t._v(" "),n("a",{attrs:{href:"live-in-china.html",title:"live in China"}},[t._v("Live")]),t._v(" "),n("a",{attrs:{href:"travel-in-china.html",title:"travel in China"}},[t._v("Travel")]),t._v(" "),n("a",{attrs:{href:"work-in-china.html",title:"work in China"}},[t._v("Work")]),t._v(" "),n("a",{attrs:{href:"guides.html",title:"city guides in China"}},[t._v("Guides")]),t._v(" "),n("a",{attrs:{href:"on-boarding.html",title:"On-boarding"}},[t._v("On-boarding")]),t._v(" "),n("div",{staticClass:"Jump"},[n("a",{attrs:{href:"life-in-china-blog.html",target:"_blank",title:"life in China"}},[t._v("\n              View More Posts\n              "),n("i",{staticClass:"moreIcn"})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footerBt"},[a("h2"),t._v(" "),a("div",{staticClass:"fooMain clear"},[a("div",{staticClass:"mainL"},[a("h3",{staticClass:"contact"},[t._v("Contact Us")]),t._v(" "),a("span",{staticClass:"tel"},[t._v("TEL: +86 400-669-7618")]),t._v(" "),a("span",{staticClass:"em"},[t._v("EMAIL: "),a("a",{attrs:{href:"mailto:jobs@careerchina.com"}},[t._v("jobs@careerchina.com")])]),t._v(" "),a("span",{staticClass:"address"},[t._v("ADDRESS: Linda Plaza B-5C, Dongtucheng Road, Chaoyang District, Beijing, China")]),t._v(" "),a("b",{staticClass:"copy"},[t._v("\n          Copyright © 2017 Career China. All rights reserved.\n        ")]),t._v(" "),a("b",{staticClass:"icp"},[t._v("\n          京ICP备16068124号-1\n        ")]),t._v(" "),a("div",{staticStyle:{"margin-top":"10px"}},[a("a",{staticStyle:{"text-decoration":"none",height:"20px","line-height":"20px"},attrs:{target:"_blank",href:"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502033181"}},[a("img",{staticStyle:{float:"left"},attrs:{src:n(9),alt:""}}),a("p",{staticStyle:{float:"left",height:"20px","line-height":"20px",margin:"0px 0px 0px 5px",color:"#7d8084","font-size":"12px"}},[t._v("京公网安备 11010502033181号")])])])]),t._v(" "),a("div",{staticClass:"mainR"},[a("h3",{staticClass:"withUs"},[t._v("Connect with Us")]),t._v(" "),a("div",{staticClass:"icTab clear"},[a("a",{staticClass:"face",attrs:{href:"https://www.facebook.com/CareerChinaJobs/",target:"_blank"}}),t._v(" "),a("a",{staticClass:"bird",attrs:{href:"https://twitter.com/Career_China",target:"_blank"}}),t._v(" "),a("a",{staticClass:"in",attrs:{href:"https://www.linkedin.com/company-beta/17913665/",target:"_blank"}}),t._v(" "),a("a",{staticClass:"camera",attrs:{href:"https://www.instagram.com/careerchina/",target:"_blank"}}),t._v(" "),a("a",{staticClass:"google",attrs:{href:"https://plus.google.com/u/0/116387979022769777244",target:"_blank"}}),t._v(" "),a("a",{staticClass:"you",attrs:{href:"https://www.youtube.com/channel/UCFA7l6MzmjNtVQAaZtReCeA",target:"_blank"}}),t._v(" "),a("a",{staticClass:"pte",attrs:{href:"https://www.pinterest.com/careerchina/",target:"_blank"}})]),t._v(" "),a("div",{staticClass:"term"},[a("b",[a("a",{attrs:{href:"term.html",title:"Term of Service"}},[t._v("Term of Service")])]),t._v("\n             |   \n          "),a("b",[a("a",{attrs:{href:"policy.html",title:"Privacy Policy"}},[t._v("Privacy Policy")])])])])])])}]}},13:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navBox",attrs:{id:"index"}},[n("div",{staticClass:"logoBox"},[n("a",{staticClass:"ccLogo",attrs:{href:"http://www.careerchina.com",title:"teaching jobs in china,english teaching jobs in china"}}),t._v(" "),n("i",{staticClass:"line"}),t._v(" "),n("a",{staticClass:"talLogo",attrs:{href:"http://www.100tal.com/",target:"_blank"}})]),t._v(" "),n("ul",{staticClass:"tal clear"},[n("li",{staticClass:"list"},[n("a",{attrs:{href:"working-in-china.html",id:"home",name:"Working in China"}},[t._v("HOME")])]),t._v(" "),n("li",{staticClass:"list"},[n("a",{attrs:{href:"jobs-in-china.html",id:"JOB",name:"Jobs in China"}},[t._v("OPPORTUNITIES")])]),t._v(" "),n("li",{staticClass:"list"},[n("a",{attrs:{href:"how-to-move-to-china.html",id:"ser",name:"how to move to china"}},[t._v("SERVICES")])]),t._v(" "),n("li",{staticClass:"list"},[n("a",{attrs:{href:"life-in-china-blog.html",id:"bl",name:"life in China"}},[t._v("BLOG")])]),t._v(" "),n("li",{staticClass:"list marginR"},[n("a",{attrs:{href:"about-career-china.html",id:"us",name:"about us"}},[t._v("ABOUT US")])])]),t._v(" "),n("a",{staticClass:"employer",attrs:{href:"http://business.careerchina.com",target:"_blank"}},[n("span",{staticClass:"employerInner"},[t._v("\n        Employer Access\n        "),n("br"),t._v("\n        企业服务\n      ")])])])}]}},14:function(t,e,n){var a=n(6);"string"==typeof a&&(a=[[t.id,a,""]]);n(3)(a,{});a.locals&&(t.exports=a.locals)},15:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mounted:function(){function t(){var t=document.body.scrollTop||document.documentElement.scrollTop,n=document.documentElement.clientHeight;t>n?e.style.display="block":e.style.display="none"}var e=document.getElementById("goTop");window.onscroll=t,e.onclick=function(){this.style.display="none",window.onscroll=null;var e=document.body.scrollTop,n=1e3,a=10,i=e/n*a,o=setInterval(function(){var e=document.body.scrollTop;return e<=0?(clearInterval(o),void(window.onscroll=t)):(e-=i,void(document.body.scrollTop=e))},a)}}}},16:function(t,e){},17:function(t,e,n){var a,i;n(16),a=n(15);var o=n(18);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,i._scopeId="data-v-f9d5bafe",t.exports=a},18:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"goTop",attrs:{id:"goTop"}},[n("i",{staticClass:"normal",attrs:{id:"normal"}})])}]}},22:function(t,e){},91:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1);a(i);n(14);var o=n(11),s=a(o),r=n(10),c=a(r),l=n(17),h=a(l);e.default={components:{"v-footer":c.default,"v-nav":s.default,"v-goTop":h.default}}},111:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(215),o=a(i);e.default={components:{"v-about":o.default}}},179:function(t,e){},195:function(t,e){},198:function(t,e,n){t.exports=n.p+"static/img/careerchina-team-2.138ec9d.jpg"},199:function(t,e,n){t.exports=n.p+"static/img/careerchina-team-3.c2137b0.jpg"},215:function(t,e,n){var a,i;n(195),a=n(91);var o=n(288);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,i._scopeId="data-v-e7dd65c2",t.exports=a},235:function(t,e,n){var a,i;n(179),a=n(111);var o=n(272);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=o.render,i.staticRenderFns=o.staticRenderFns,i._scopeId="data-v-4fa99f69",t.exports=a},272:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"about"}},[n("v-about")],1)},staticRenderFns:[]}},288:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"aboutUs"},[n("v-nav"),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),n("v-goTop"),t._v(" "),n("v-footer")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"aboutBg",attrs:{id:"aboutUs"}},[n("div",{staticClass:"auto"},[n("div",{staticClass:"title"},[n("h2",[t._v("Meet the Career China Team")]),t._v(" "),n("p",{staticClass:"titleWorld"},[t._v("\n             Our international team is ready to help you along your new journey.\n          ")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"doing",attrs:{id:"doing"}},[a("div",{staticClass:"doAuto"},[a("h2",[t._v("What We Do")]),t._v(" "),a("p",[t._v("\n           We help transform the lives of international professionals who wish to work in China, giving\n           them the opportunity to earn a comfortable living, travel and immerse  themselves in a new\n           culture, and gain transferable skills through global experience.\n         ")]),t._v(" "),a("img",{attrs:{src:n(198),alt:""}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"why"},[n("div",{staticClass:"whyAuto"},[n("h2",[t._v("Why Career China")]),t._v(" "),n("p",[t._v("\n           Career China  makes it easy  for  international professionals  by  providing a  full-service experience for\n           our candidates.  There’s no need to worry about getting scammed.  Our trusted online platform allows\n           overseas talent  to find quality jobs  in China with reputable companies, and conveniently apply online. \n           Our team is there for you from start to finish. \n         ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sponsor"},[n("div",{staticClass:"spAuto"},[n("h2",[t._v("Stability You Can Trust")]),t._v(" "),n("div",{staticClass:"float clear"},[n("div",{staticClass:"sLeft"},[n("p",[t._v("\n               Career China is a business unit of TAL Education Group (NYSE, TAL), which was recently named a top education brand in China and is one of the top 100 most valuable brands in China.\n             "),n("br"),t._v(" "),n("br"),t._v("\nWith the support of the government, Career China only partners with reputable companies to ensure compliance with employment policies and procedures.\n             ")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"who"},[a("div",{staticClass:"whoAuto"},[a("h2",[t._v("Who We Are")]),t._v(" "),a("p",[t._v("\n           Career China’s is based in Beijing, but has international marketing and recruiting staff in countries around the world such as the USA and the UK.  With years of experience in placing talented international with companies in China, it is our goal to match the right candidate with the right opportunity. \n         ")]),t._v(" "),a("img",{attrs:{src:n(199),alt:""}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vis"},[n("div",{staticClass:"visAuto"},[n("h2",[t._v("Vision")]),t._v(" "),n("p",[t._v("\n           We support Chinese companies in their quest to be competitive in a globalized world, and transform\n           the  lives  of  international  professionals  who  wish to earn  a comfortable  living, travel and immerse\n           themselves in a new culture, and gain transferable skills through global experience. \n           "),n("br"),n("br"),t._v("\n           Working with reputable companies in China  and with the support of the government, we make conn\n           ections based on careful consideration of the company's culture,  environment,  and goals along with\n           the skills, experience levels, salary and lifestyle goals of international  candidates.   We further ensure\n           a successful match by  providing premium  support services to  candidates to facilitate a  comfortable\n           and easy transition into their new life in China. \n         ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"joir"},[n("div",{staticClass:"joAuto"},[n("h2",[t._v("Join Us")]),t._v(" "),n("p",[t._v("\n           We welcome new team members!  If you are interested in being a part of our growing Career China team, please browse open positions with Career China online or contact us directly. Please send your resume and cover letter to: "),n("a",{staticClass:"link",attrs:{href:"mailto:jobs@careerchina.com"}},[t._v("jobs@careerchina.com")])])])])}]}}});