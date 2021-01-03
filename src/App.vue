<template>
  <keep-alive>
    <a-locale-provider :locale="locale">
      <router-view />
    </a-locale-provider>
  </keep-alive>
</template>

<script>
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
export default {
  data() {
    return {
      locale: zhCN,
    };
  },
};
</script>
