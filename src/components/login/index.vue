<template>
  <div class="login-container">
    <h2 class="login-title">用户登录</h2>
  <a-form
    id="login-form"
    :form="form"
    class="lgform"
    @submit="handleSubmit"
  >
    <a-form-item>
      <a-input
        v-decorator="[
          'userName',
          { rules: [{ required: true, message: '请输入用户名!' }] },
        ]"
        placeholder="用户名："
      >g
        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input
        v-decorator="[
          'password',
          { rules: [{ required: true, message: '请输入密码!' }] },
        ]"
        type="password"
        placeholder="密  码："
      >
        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>

      <a-button type="primary" html-type="submit" class="login-form-button">
        登 录
      </a-button>
      <a-checkbox
        v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          },
        ]"
        style="margin-right:50px"
      >
        保存密码
      </a-checkbox>
      <a class="login-form-forgot" href="">
        忘记密码
      </a>
      或者
      <a href="">
        马上注册!
      </a>
    </a-form-item>
    <a-form-item>
        <h4 class="login-tt2">基建管理平台EMS ©2021</h4>
    </a-form-item>
  </a-form>

  </div>
  
</template>
 
<script>
import { mapMutations } from 'vuex';
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      userToken: ''
    };
  },
 
  methods: {
    ...mapMutations(['changeLogin']),
    login () {
      let _this = this;
      if (this.loginForm.username === '' || this.loginForm.password === '') {
        alert('账号或密码不能为空');
      } else {
        this.axios({
          method: 'post',
          url: '/user/login',
          data: _this.loginForm
        }).then(res => {
          console.log(res.data);
          _this.userToken = 'Bearer ' + res.data.data.body.token;
          // 将用户token保存到vuex中
          _this.changeLogin({ Authorization: _this.userToken });
          _this.$router.push('/page3/m1');
          alert('登陆成功');
        }).catch(error => {
          alert('账号或密码错误');
          console.log(error);
        });
      }
    }
  }
};
</script>

<style>
/*背景*/
.login-container {
  position: absolute;
  width: 100%;
  height: 100%;
  /* //background: url("../assets/houTaiBg.png"); */
}

#login-form {
  width: 100%;
  //height: 100%;
  max-width: 300px;
  margin: 0 auto;
  /* background: url("../assets/houTaiKuang.png"); */
  padding: 0 auto;
}

/* Log */
.login-title {
  color: rgb(0, 0, 0);
  text-align: center;
  margin: 100px 0px 60px 0px;
  font-size: 48px;
  font-family: Microsoft Yahei;
}

.login-tt2 {
  color: rgb(119, 4, 250);
  text-align: center;
  margin: 150px 0;
  vertical-align: bottom;
  font-size: 16px;
  font-family: Microsoft Yahei;
}

/* 登陆按钮 */
.login-form-button{
  width: 100%;
  height: 35px;
  font-size: 16px;
}
/* 用户登陆标题 */
.title{
  margin-bottom: 50px;
  color: #fff;
  font-weight: 700;
  font-size: 24px;
  font-family: Microsoft Yahei;
}
/* 输入框 */
.inputBox{
  height: 45px;
}
/* 输入框内左边距50px */
.ant-input-affix-wrapper .ant-input:not(:first-child) {
    padding-left: 30px;
}
</style>