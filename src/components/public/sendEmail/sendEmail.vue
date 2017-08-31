<template>
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
</template>

<script type="text/ecmascript-6">
  export default{
    name:'sendEmail',
    data(){
      return{
          inputText:'',
          emailState:false,
          success:false,
          mask:false
      }
    },
    methods:{
        focus(){
            this.emailState=false
        },
        sign(){
          var reg1  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
          if(this.inputText==='' || !reg1.test(this.inputText)){
              this.emailState=true
          }else {
            let _this=this;
            _this.$http.post('http://business.careerchina.com/cc/to/c/storageEmail.action',{'email':_this.inputText}).then(function(response){
              if(response.body.insertResult===true){
                _this.success=true;
                window.clearTimeout(timer);
                let timer = window.setTimeout(function () {
                  _this.success=false;
                },3000);
                _this.boolean= true;
                _this.mask=true;
                _this.inputText='';
              }
            })
          }
        }
    }
  }
</script>

<style scoped>
  .sing {
    position: relative;
    width: 100%;
    height: 264px;
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
    background: url("./Emailbanner.png") no-repeat;
  }
  .sing .mask{
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
  .sing .btnBox .btnText:hover{
    background: #11b85b;
  }
  .sing .format,.success{

    margin-top: 8px;
    width: 100%;
  }
  .sing .format{
    color: #f7593f;
  }
  .sing .success{
    color: #0ed666;
  }
</style>
