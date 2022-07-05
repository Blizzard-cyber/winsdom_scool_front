<template>
  <div class="main flex-col">
    <div class="shouye-bg  shouye-main">
      <div class="shouye flex-col">
        <div class="title flex-row">
          <img src="../../static/img/logo.png" alt="">
        </div>
        <div class="inner flex-row flex-space-between">
          <div class="inner-l">
            <img src="../../static/img/border.png" alt="" class="border">
            <div class="login-wrap">
    
            <canvas id="myCanvas" width="418" height="330" class="anim-opacity1">
              <h1>test</h1>
            </canvas>

            
            </div>
          </div>
          <div class="inner-r anim-opacity3"></div>
        </div>
        <router-link :to="{path:'/First'}">
          <div class="enter flex-row flex-x-center flex-y-center">
            <p>回到首页</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
  
</template>

<script>
  

</script>


<style>
  .anim-opacity1 {
    /* position: absolute;
    height: 330px;
    width: 417px;
    margin-left: -207px; */
    z-index: 500;
    animation: 20s opacity2 0s infinite;
    -webkit-animation: 20s opacity2 0s infinite;
    -moz-animation: 20s opacity2 0s infinite;
  }

  .anim-opacity2 {
    /* position: absolute;
    height: 330px;
    width: 417px; */
    /* margin-left: -207px; */
    z-index: 500;
    animation: 20s opacity2 10s infinite;
    -webkit-animation: 20s opacity2 10s infinite;
    -moz-animation: 20s opacity2 10s infinite;
  }

  @keyframes opacity2 {
    0% {
      opacity: 1
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes opacity2 {
    0% {
      opacity: 1
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes opacity2 {
    0% {
      opacity: 1
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }


  .anim-opacity3 {
    animation: 30s fadeInRight 0s;
    -webkit-animation: 30s fadeInRight 0s;
    -moz-animation: 30s fadeInRight 0s;
  }

  @keyframes fadeInRight {
    0% {
      height: 0px;
      ;
    }
    100% {
      height: 329px;
    }
  }

  @-webkit-keyframes fadeInRight {
    0% {
      height: 0px;
      ;
    }
    100% {
      height: 329px;
    }
  }

  @-moz-keyframes fadeInRight {
    0% {
      height: 0px;
      ;
    }
    100% {
      height: 329px;
    }
  }

</style>
