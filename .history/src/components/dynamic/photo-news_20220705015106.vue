<template>
  <div class="main flex-col flex-x-center flex-y-center">
    <div class="center">
      <!--头部-->
      <my-head/>
      <div class="list flex-row flex-left flex-space-between">
        
        <div class="list flex-col">
          <div class="list-right-title flex-row flex-y-center"><span class="list-right-title-inner">您当前的位置：图片新闻</span></div>
          <div class="list-right-inner">
            <div class="list-right-inner-words   flex-col flex-space-around ">
              <div v-for="item in items">
            <router-link :to="{path:'/Inside'}" >
            <span class="list-right-inner-words1 flex-row flex-space-between" ><p>{{item.message}}</p><p>2017-07-10</p></span>
            </router-link>  
          </div>
            </div>
          </div>
          <div class="list-right-bottom flex-row flex-right flex-x-center flex-y-center">
          <ul class="flex-row flex-right flex-x-center">
            <li class="list-right-bottom-li">首页</li>
            <li class="list-right-bottom-li">上一页</li>
            <li class="list-right-bottom-li">下一页</li>
            <li class="list-right-bottom-li">末页</li>
          </ul>
          <span>页码：1/8</span>
          </div>
        </div>
      </div>
      <!--底部-->
      <my-bottom/>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        items:[
          {message:'越秀区区委王涣清书记慰问我校教师'},
          {message:'2017年庆祝教师节表彰大会'},
          {message:'广州市培道中学实验学校挂牌仪式'},
          {message:'2017学院，I’m ready!'},
          {message:'努力中的阳光军训'},
          {message:'齐心闯关，“轻”装前行'},
          {message:'体育捷报'},
          {message:'2017，培道欢迎你！'},
          {message:'自带“明星”光环，代代人才迭出'},
          {message:'广州市教育局樊群局长到我校视察'},
          {message:'牢记初心，奋力前行'},
          {message:'缅怀先烈，继往开来'},
          {message:'“中国足球先生”吴群立到访'},
          {message:'心育亮特色 青春照红心'},
          {message:'“培道”交流活动'},
          {message:'遇见·培道'},
          {message:'香港配欸到1967届晨杜校友归宁'},
          {message:"团省委领导到我校调研指导"}
        ]
      }
    }
  }
</script>
