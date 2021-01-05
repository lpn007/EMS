<template>
  <div style="margin: 0px">
    <a-layout id="components-layout-demo-top-side" style='margin:0px'>
      <a-layout-header class="header" style="background:#445577 ;display: flex;">
        <div class="logo" >
            <a-icon type="bank" />
        </div>
        <div id='sysname'>基建管理</div>
        <a-menu
          theme="light"
          mode="horizontal"
          :default-selected-keys="['1']"
          :style="{ lineHeight: '64px' }"
          style="background: #445577"
        >
          <a-menu-item key="1" > 
            <router-link to="/page3/m1">
              <a-icon type="home" />
                主 页         
            </router-link>              
          </a-menu-item>
          <a-menu-item key="2">
            <a-icon type="database" />
             项 目 
            </a-menu-item>
          <a-menu-item key="3">
            <a-icon type="file-zip" />
             资 料 
          </a-menu-item>
          <a-menu-item key="4">
            <a-icon type="setting" />
             系 统 
            </a-menu-item>
        </a-menu>
      </a-layout-header>
      <a-layout-content style="padding: 20px">
        <!-- <a-breadcrumb style="margin: 16px 0">rgb(200, 233, 255)
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb> -->
        <!-- <a-layout style="padding: 24px 0; background: #fff">
          <a-layout-sider width="200" style="background: #fff">
            <a-menu
              mode="inline"
              :default-selected-keys="['1']"
              :default-open-keys="['sub1']"
              style="height: 100%"
            >
              <a-sub-menu key="sub1">
                <span slot="title"><a-icon type="user" />subnav 1</span>
                <a-menu-item key="1"> option1 </a-menu-item>
                <a-menu-item key="2"> option2 </a-menu-item>
                <a-menu-item key="3"> option3 </a-menu-item>
                <a-menu-item key="4"> option4 </a-menu-item>
              </a-sub-menu>
              <a-sub-menu key="sub2">
                <span slot="title"><a-icon type="laptop" />subnav 2</span>
                <a-menu-item key="5"> option5 </a-menu-item>
                <a-menu-item key="6"> option6 </a-menu-item>
                <a-menu-item key="7"> option7 </a-menu-item>
                <a-menu-item key="8"> option8 </a-menu-item>
              </a-sub-menu>
              <a-sub-menu key="sub3">
                <span slot="title"><a-icon type="notification" />subnav 3</span>
                <a-menu-item key="9"> option9 </a-menu-item>
                <a-menu-item key="10"> option10 </a-menu-item>
                <a-menu-item key="11"> option11 </a-menu-item>
                <a-menu-item key="12"> option12 </a-menu-item>
              </a-sub-menu>
            </a-menu>
          </a-layout-sider>
          <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
            Content
          </a-layout-content>
        </a-layout> -->
        <keep-alive>
          <router-view />
        </keep-alive>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        基建管理平台 ©2021 Created by LPN
      </a-layout-footer>
    </a-layout>
  </div>
</template>


<script>
import SysSvg from '@/assets/sys.svg'

export default {
  name: "page3",
  components:{
    SysSvg,
  },
}
</script>

<style scoped>
#components-layout-demo-top-side .logo {
  width: 45px;
  height: 45px;
  //background: rgba(241, 154, 40, 0.384);
  margin: 2px 12px 0px 12px;
  float: left;
  font: 40px sans-serif;
  color:#ac6904
}
.ant-layout-header {
    height: 64px;
    padding: 0px 50px 50px 20px;
    line-height: 64px;
    background: #001529;
}
#sysname{
  font:30px/40px arial,sans-serif;  
  line-height: 40px;
  margin-top: 13px;
  margin-right: 50px;
  color:  #1890ff
}

.ant-menu-horizontal{
    white-space: nowrap;
    border: 0;
    /* border-bottom: 1px solid #e8e8e8; */
    box-shadow: none;
    color: #ffffff;
}

.ant-menu-horizontal > .ant-menu-item > a {
    display: block;
    color: #ffffff;
}

.ant-menu-horizontal > .ant-menu-item-active {
    color:  #77fa6b;
    border-bottom: 4px solid #77fa6b;

}

.ant-menu-horizontal> .ant-menu-item-selected{
    color: #f8990b;
    border-bottom: 4px solid #f8990b;

}

.ant-menu-horizontal > .ant-menu-item-selected > a {
    color: #f8990b;    

}

.ant-menu-item-selected > a:hover {
    color:  #77fa6b;

}

.ant-menu-item-active > a:hover {
    color:  #77fa6b;

}





</style>
