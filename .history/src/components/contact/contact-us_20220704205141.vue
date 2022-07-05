<template>
  <div class="main flex-col flex-x-center flex-y-center">
    <div class="center">
      <!--头部-->
      <my-head/>
      <div class="location flex-row flex-left flex-y-center ">
        <span class="location-inner flex-row flex-space-between">
          <p>您当前的位置：</p>
          <p>联系我们</p>
        </span>
      </div>
         <div class="photonews flex-col flex-y-center flex-x-center">
        <div class="flex-col">
          <p class="photonews-title-1">联系我们</p>
          <span class="flex-row  flex-space-between ">
            <p class="photonews-title-2">发表时间：2022-7-4</p>&nbsp;&nbsp;
            <p class="photonews-title-2">作者：admin</p>&nbsp;&nbsp;
            
          </span>
        </div>
        <div class="contact-us flex-row flex-space-between">
        <div class=" flex-col flex-left">
          <p class="contact-us-r"> 开发者邮箱：369476975@qq.com</p>
          <div>
            <span>青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪</span>
            <el-divider></el-divider>
            <span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>
          </div>
           
        </div>
        <img src="../../../static/img/code2.jpg" alt="">
        </div>
      </div>
      <!--底部-->
      <my-bottom/>
    </div>
  </div>
</template>


