<template>
  <div class="main flex-col">
    <div class="shouye-bg  shouye-main">
      <div class="shouye flex-col">
        <div class="title flex-row">
          <img src="../../static/img/logo2.png" alt="">
        </div>
        <div class="inner flex-row flex-space-between">
          <div class="login-wrap">
            <el-form class="inner-l">
              <h1 class="title">用户登录</h1>
              <el-form-item label="账号">
                <el-input type="text" v-model="uname" placeholder="登录账号" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="登录密码">
                <el-input type="password" v-model="password" placeholder="登录密码" autocomplete="off"></el-input>
              </el-form-item>
        
              <el-form-item>
                <el-button type="primary" style="width: 100%;" @click="dosubmit()">登录</el-button>
              </el-form-item>
            </el-form>
          </div>

           <!-- <div class="inner-l">
            <img src="../../static/img/border.png" alt="" class="border">

            <canvas id="myCanvas" width="418" height="330" class="anim-opacity1">

            </canvas>

            <canvas id="myCanvas1" width="418" height="330" class="anim-opacity2">

            </canvas>

          </div>  -->
          <div class="inner-r anim-opacity3">
          </div>
          
          <div class="inner-rr anim-opacity3">
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
export default {
  data: function () {
    return {
      uname: "张三",
      password: "123"
    }
  },
  methods: {
    dosubmit: function () {
      let params = {
        uname: this.uname,
        password: this.password
      };
      this.$http.post('/api/login', params).then(res => {
        if (res.data.code == 200) {
          this.$message({
            message: '登录成功',
            type: 'success'
          });
          this.$router.push('/First');
        } else {
          this.$message({
            message: res.data.msg,
            type: 'error'
          });
        }
      });

    }
  }
}
</script>


<style>
 
  
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