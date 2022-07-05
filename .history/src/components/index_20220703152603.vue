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

            <canvas id="myCanvas" width="418" height="330" class="anim-opacity1">

            </canvas>

            <canvas id="myCanvas1" width="418" height="330" class="anim-opacity2">

            </canvas>

          </div> 
          <div class="inner-r anim-opacity3">
          </div>
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
  var img = new Image()
  img.src = "../../static/img/photo2.jpg"
  img.onload = function () {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.drawImage(img, 0, 0);
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    
    ctx.fillRect(0, 0, 418, 330);
    ctx.clearRect(0, 0, 66, 30);
    ctx.clearRect(0, 0, 34, 60);
    ctx.clearRect(0, 272, 34, 50);
    ctx.clearRect(0, 300, 65, 30);
    ctx.clearRect(356, 0, 69, 29);
    ctx.clearRect(386, 0, 41, 59);
    ctx.clearRect(389, 266, 36, 70);
    ctx.clearRect(360, 297, 66, 41);
  }
  var img1 = new Image()
  img1.src = "../../static/img/photo3.jpg"
  img1.onload = function () {
    var c1 = document.getElementById("myCanvas1");
    var ctx1 = c1.getContext("2d");
    ctx1.drawImage(img1, 0, 0);
    ctx1.fillStyle = "rgba(0,0,0,0.1)";
   
    ctx1.fillRect(0, 0, 418, 330);
    ctx1.clearRect(0, 0, 66, 30);
    ctx1.clearRect(0, 0, 34, 60);
    ctx1.clearRect(0, 272, 34, 50);
    ctx1.clearRect(0, 300, 65, 30);
    ctx1.clearRect(356, 0, 69, 29);
    ctx1.clearRect(386, 0, 41, 59);
    ctx1.clearRect(389, 266, 36, 70);
    ctx1.clearRect(360, 297, 66, 41);
  };
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