<template>
  <div class="emSu" style="margin-top: 0">
    <div class="auto">
      <h2>Join The Community Now</h2>
      <p class="emDes">
        Don't miss out on the latest job postings, new articles, and much more.
      </p>
      <div class="inputBox">
        <input id="text" type="text" placeholder="Your email address" v-model="Usertext" @focus="styleState">
        <button class="inputBtn bg1" id="inputBtn" @click="submit" :disabled="boolean">
          Join

        </button>
        <div class="worBox" v-show="emailNull">
          <span class="sj"></span>
          <i class="worIcon"></i>
          <span class="worWord">Please submit in right format.</span>
        </div>
        <div class="worBox" v-show="formatError">
          <span class="sj"></span>
          <i class="worIcon"></i>
          <span class="worWord">Please submit in right format.</span>
        </div>
        <div class="suBox" v-show="success">
          <span class="sj"></span>
          <span class="suWord">We get you! Thanks for joining us!</span>
        </div>
        <div class="inputMask" v-show="mask"></div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import $ from 'jquery'
  import interfaceStr from '../../../common/js/interface.js'
  //var interfaceStr='devb.careerchina.com';
  export default{
    data(){
      return {
        Usertext: '',
        emailNull: false,
        formatError: false,
        success: false,
        mask: false
      }
    },
    methods: {
      styleState(){
        var aInputBtn = document.getElementById('inputBtn'),
          aText = document.getElementById('text');
        aInputBtn.className = 'inputBtn';
        aText.style.color = '#262626';
        this.formatError = false;
        this.emailNull = false;
      },
      submit (){
        var aInputBtn = document.getElementById('inputBtn'),
          aText = document.getElementById('text');
        var reg1 = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
          reg2 = /\S/;
        if (this.Usertext === '') {
          this.emailNull = true;
          this.formatError = false;
          aInputBtn.className = 'inputBtn bg2';
        } else if (!reg1.test(this.Usertext)) {
          this.formatError = true;
          aInputBtn.className = 'inputBtn bg2';
          aText.style.color = '#f7593f';
        } else {
          this.emailNull = false;
          this.formatError = false;
          aInputBtn.className = 'inputBtn bg1';
        }
        if (reg1.test(this.Usertext) && reg2.test(this.Usertext)) {
          let _this = this;
          _this.$http.post('http://'+interfaceStr+'/cc/to/c/storageEmail.action', {'email': this.Usertext}).then(function (response) {
            if (response.body.insertResult === true) {
              _this.success = true;
              window.clearTimeout(timer);
              let timer = window.setTimeout(function () {
                aText.value = '';
                _this.success = false;
                aInputBtn.className = 'inputBtn bg2';
              }, 2000);
              _this.boolean = true;
              _this.mask = true;
              this.Usertext = '';
            }
          })
        }
      }
    },
  }
</script>

<style scoped>
  .emSu {
    width: 100%;
    background: #f3f6fb;
    padding: 90px 0 100px 0;
  }

  .emSu .auto h2 {
    font-size: 30px;
    margin-bottom: 40px;
    color: #262626;
    text-align: center;
    font-weight: 400;
  }

  .emSu .auto .emDes {
    font-size: 16px;
    color: #aeaeae;
    text-align: center;
  }

  .emSu .auto .inputBox {
    position: relative;
    margin: 60px auto;
    width: 670px;
    font-size: 0;
  }

  .emSu .auto .inputBox input {
    display: inline-block;
    width: 460px;
    height: 60px;
    padding-left: 40px;
    border-radius: 4px;
    font-size: 16px;
    color: #262626;
    box-shadow: 0 10px 29px rgba(3, 13, 27, .1);
    border: none;
  }

  .emSu .auto .inputBox .inputBtn {
    display: inline-block;
    margin-left: 30px;
    width: 140px;
    height: 60px;
    line-height: 60px;
    background: #0ed666;
    /*background: #aaa;*/
    box-shadow: 0 10px 29px rgba(3, 27, 19, .2);
    border-radius: 4px;
    font-size: 16px;
    color: #fff;
    text-align: center;
    cursor: pointer;
    border: none;
  }

  .emSu .auto .inputBox .bg1 {
    background: #0ed666;
    cursor: pointer;
  }

  .emSu .auto .inputBox .bg1:hover {
    background: #11b85b;
  }

  .emSu .auto .inputBox .bg2 {
    background: #aaa;
    cursor: initial;
  }

  .emSu .auto .inputBox .worBox, .suBox {
    position: absolute;
    left: 0;
    top: 74px;
    padding: 0 35px;
    height: 40px;
    border-radius: 5px;
  }

  .emSu .auto .inputBox .worBox {
    background: #f7593f;
    font-size: 0;
  }

  .emSu .auto .inputBox .worBox .sj {
    position: absolute;
    top: -16px;
    left: 20px;
    width: 0;
    height: 0;
    border: 8px solid transparent;
    border-bottom-color: #f7593f;
  }

  .emSu .auto .inputBox .worBox .worIcon {
    display: inline-block;
    width: 20px;
    height: 20px;
    vertical-align: middle;
    background: url("./icon-warning.png") no-repeat;
  }

  .emSu .auto .inputBox .worBox .worWord {
    margin-left: 10px;
    display: inline-block;
    font-size: 16px;
    color: #fff;
    line-height: 40px;
    vertical-align: middle;
  }

  .emSu .auto .inputBox .suBox {
    background: #0ed666;
    text-align: center;
  }

  .emSu .auto .inputBox .suBox .sj {
    position: absolute;
    top: -16px;
    left: 20px;
    width: 0;
    height: 0;
    border: 8px solid transparent;
    border-bottom-color: #0ed666;
  }

  .emSu .auto .inputBox .suBox .suWord {
    font-size: 16px;
    color: #fff;
    line-height: 40px;
  }

  .emSu .auto .inputBox .inputMask {
    position: absolute;
    top: 0;
    left: 0;
    width: 500px;
    height: 60px;
    z-index: 20;
  }
</style>
