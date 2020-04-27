<template>
  <div id="app">
    <el-container>
      <!--    顶部容器-->
      <el-header class="header">
        公司logo
      </el-header>
      <!--    内容区域-->
      <div class="middle">
        <!--      侧边栏-->
        <el-aside>
          侧边栏
        </el-aside>
        <!--      内容区-->
        <div>
          <el-button type="primary" size="mini" @click="">普通角色</el-button>
          <el-button type="primary" size="mini" @click="">高级角色</el-button>
          <el-button type="primary" size="mini" @click="">管理员角色</el-button>
        </div>
        <router-view></router-view>
      </div>
      <!--    底部容器-->
      <el-footer>
        底部容器
      </el-footer>
    </el-container>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html,body{
  margin: 0;
  padding: 0;
}
  .header{
    width: 100%;
    height: 50px;
    background-color: #409EFF;
    line-height: 50px;
  }
</style>
