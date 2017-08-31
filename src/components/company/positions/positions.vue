<template>
  <div class="positions">
    <ul class="jobLists">
      <li class="jobList clear" v-for="job in this.positionList">
        <a class="jobTitle" :href="job.url" target="_blank">
          {{job.name}}
        </a>
        <span class="location">{{job.location}}</span>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    props: {
      detailData: {
        type: Object
      },
      positionList: {
        type: Array
      },
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .positions{
    margin-top: 50px;
  }
  .positions .jobLists{
    margin: auto;
    width: 1000px;
    padding-bottom: 50px;
  }
  .positions .jobLists .jobList{
    width:100% ;
    padding:20px 0 10px 0;
    border-bottom: 1px solid #f5f5f5;
  }
  .jobLists .jobList .jobTitle{
    float: left;
    font-size: 16px;
    color: #3183e7;
  }
  .jobLists .jobList .jobTitle:hover{
    text-decoration: underline;
  }
  .jobLists .jobList .location{
    float: right;
    font-size: 14px;
    color: #999;
    font-weight :100
  }
</style>
