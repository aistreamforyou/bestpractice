/**
 * @Description:
 * @author Weibel Lee
 * @date 2020/4/27
*/
<template>
  <div>
    <h2>用户登录</h2>
    <div>
      <el-input size="mini" type="text" v-model="username"></el-input>
      <el-button size="mini" @click="login">登录</el-button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Login',
    data(){
      return {
        username: 'admin'
      }
    },
    methods: {
      login(){
        this.$router.push({
          path: '/'
        })
      }
    }
  }
</script>
<style scoped>

</style>
