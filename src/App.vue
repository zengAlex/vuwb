<template>
  <div id="app">
    <!--通用导航-->
    <div class="nav-content">
        <div class="main-nav">
            <router-link class="nav" to="/index">首页</router-link>
            <router-link to="/trip">旅游</router-link>
            <router-link to="/food">美食</router-link>
            <!-- <router-link to="">特产</router-link> -->
            <!--二手交易-店铺-->
            <router-link to="/shopping">购物</router-link>
            <router-link to="/work">工作</router-link>
            <!-- <router-link to="/video">视频</router-link> -->
            <router-link to="/relaxed">轻松一刻</router-link>
            <!-- <router-link to="">直播</router-link> -->
        </div>
    </div>
    <!--组件页-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="css" scoped>
    @import '../assets/css/reset.css';
    #app {
        font-family: 'Hiragino Sans GB','Microsoft YaHei','黑体',sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        /*margin-top: 60px;
    */
    }
</style>

<style lang="scss" scoped>
    //导航
    .nav-content{
        width: 100%;
        height: 40px;
        background-color: #555555;
        .main-nav{
            width: 1200px;
            margin: 0 auto;
            a{
                width: 108px;
                display: block;
                line-height: 40px;
                float: left;
                font-size: 16px;
                text-align: center;
                color: #ffffff;
                &:hover{
                    color: #ffffff;
                    outline: 0;
                    background-color: #f46;
                }
            }
        }
    }

</style>
