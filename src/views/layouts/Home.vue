<template>
  <div class="home">
    <Menu mode="horizontal" :theme="'dark'" active-name="1">
      <MenuItem name="1">
        <Icon type="ios-paper" />
        是爱情
      </MenuItem>
      <MenuItem name="2">
        <Icon type="ios-people" />
        再不斩的爱
      </MenuItem>
      <!--<Submenu name="3">-->
        <!--<template slot="title">-->
          <!--<Icon type="ios-stats" />-->
          <!--统计分析-->
        <!--</template>-->
        <!--<MenuGroup title="使用">-->
          <!--<MenuItem name="3-1">新增和启动</MenuItem>-->
          <!--<MenuItem name="3-2">活跃分析</MenuItem>-->
          <!--<MenuItem name="3-3">时段分析</MenuItem>-->
        <!--</MenuGroup>-->
        <!--<MenuGroup title="留存">-->
          <!--<MenuItem name="3-4">用户留存</MenuItem>-->
          <!--<MenuItem name="3-5">流失用户</MenuItem>-->
        <!--</MenuGroup>-->
      <!--</Submenu>-->
      <!--<MenuItem name="4">-->
        <!--<Icon type="ios-construct" />-->
        <!--综合设置-->
      <!--</MenuItem>-->
    </Menu>
    <div class="home-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  }
}
</script>
<style lang="scss">
  .home {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    position: relative;
    .home-content {
      position: absolute;
      top: 60px;
      bottom: 0;
      width: 100%;
    }
  }
</style>
