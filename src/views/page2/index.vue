<template>
  <div id="t0">
    <a-space direction="vertical">
      <div class="t1">
        <button class="asd">fkjasldfkj</button>
        <button class="asd">fkjasldfkj</button>
        <button class="asd">fkjasldfkj</button>
      </div>

      <div class="t1">
        <a-radio-group :value="size" @change="handleSizeChange">
          <a-space>
            <a-radio-button value="large"> Large </a-radio-button>
            <a-radio-button value="default"> Default </a-radio-button>
            <a-radio-button value="small"> Small </a-radio-button>
          </a-space>
        </a-radio-group>
      </div>

      <div class="t1">
        <a-space>
          <a-button type="primary" :size="size"> Primary </a-button>
          <a-button :size="size"> Normal </a-button>
          <a-button type="dashed" :size="size"> Dashed </a-button>
          <a-button type="danger" :size="size"> Danger </a-button>
          <a-button type="link" :size="size"> Link </a-button>
        </a-space>
      </div>

      <div class="t1">
        <a-button type="primary" icon="download" :size="size" />
        <a-button type="primary" shape="circle" icon="download" :size="size" />
        <a-button type="primary" shape="round" icon="download" :size="size"
          >Download</a-button
        >
        <a-button type="primary" shape="round" icon="download" :size="size" />
        <a-button type="primary" icon="download" :size="size">Download</a-button>
      </div>

      <div class="t1">
        <a-button-group :size="size">
          <a-button type="primary"> <a-icon type="left" />Backward </a-button>
          <a-button type="primary"> Forward<a-icon type="right" /> </a-button>
        </a-button-group>
      </div>

      <div class="space-align-container">
        <div class="space-align-block">
          <a-space align="center">
            center
            <a-button type="primary">Primary</a-button>
            <span class="mock-block">Block</span>
          </a-space>
        </div>
        <div class="space-align-block">
          <a-space align="start">
            start
            <a-button type="primary">Primary</a-button>
            <span class="mock-block">Block</span>
          </a-space>
        </div>
        <div class="space-align-block">
          <a-space align="end">
            end
            <a-button type="primary">Primary</a-button>
            <span class="mock-block">Block</span>
          </a-space>
        </div>
        <div class="space-align-block">
          <a-space align="baseline">
            baseline
            <a-button type="primary">Primary</a-button>
            <span class="mock-block">Block</span>
          </a-space>
        </div>
      </div>
      <div class="t1">
        <a-button type="primary" block> Primary </a-button>
        <a-button block> Default </a-button>
        <a-button type="dashed" block> Dashed </a-button>
        <a-button type="danger" block> Danger </a-button>
        <a-button type="link" block> Link </a-button>
      </div>
      <div :style="{ width: '300px', border: '1px solid #d9d9d9', borderRadius: '4px' }">
        <a-calendar :fullscreen="false" @panelChange="onPanelChange" />
      </div>
    </a-space>
  </div>
</template>

<script>
export default {
  name: "Page2",
  data() {
    return {
      size: "large",
    };
  },
  methods: {
    handleSizeChange(e) {
      this.size = e.target.value;
    },
    onPanelChange(value, mode) {
      console.log(value, mode);
    },
  },
};
</script>

<style scoped>
button {
  margin: 2px 10px 2px 0px;
}
.asd {
  width: 150px;
  height: 40px;
}
#t0 {
  margin: 15px 0px 5px 20px;
  display: flex;
  align-item: flex-start;
  flex-wrap: wrap;
}
.t1 {
  margin: 10px 0px 5px 0px;
  display: flex;
  align-item: flex-start;
  flex-wrap: wrap;
}
.space-align-container {
  margin: 10px 0px 5px 0px;
  display: flex;
  align-item: flex-start;
  flex-wrap: wrap;
}
.space-align-block {
  margin: 8px 4px;
  border: 1px solid #40a9ff;
  padding: 4px;
  flex: none;
}
.space-align-block .mock-block {
  display: inline-block;
  padding: 32px 8px 16px;
  background: rgba(150, 150, 150, 0.2);
}
</style>
