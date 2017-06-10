<template>
  <div class="main">
<!--     <div class="">
        <i class="icon">美丽汕头</i>
    </div>
 -->    <!--导航-->
    <!--内容区域-->
    <div class="main-container">
        <!--搜索区域-->
        <div class="search">
            <span class="title">搜索工具</span>
            <ul>
                <li>
                    <i class="baidu"></i>
                    <a target="_blank" href="https://www.baidu.com" >百度</a>
                </li>
                <li>
                    <i class="sougou"></i>
                    <a target="_blank" href="https://www.sogou.com">搜狗</a>
                </li>
                <li>
                    <i class="so"></i>
                    <a target="_blank" href="https://www.so.com/" >360</a>
                </li>
<!--                 <li>
                    <li><a target="_blank" href="https://www.google.com/">谷歌</a></li>
                </li> -->
            </ul>
        </div>

    </div>
<!--     <div v-for="article in articles" class="text item">
        <img class="img" v-bind:src='article.images.small'>
        <div class="txt">
            <em class="name">{{article.title}}</em>
            <div class="average">评分：{{article.rating.average}}</div>
        </div>
    </div>-->
  </div>
 </template> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    //内容区
    .main-container{
        width: 1200px;
        overflow: hidden;
        margin: 0 auto;
        margin-top: 20px;
        .search{
            width: 120px;
            float: left;
            border: 1px solid #dddddd;
            margin-left: 20px;
            .title{
                background-color: #c8c8c8;
                color: #333;
                font-size: 14px;
                text-align: left;
                height: 28px;
                line-height: 28px;
                text-indent: 10px;
                margin-bottom: 6px;
                cursor: pointer;
            }
            li{
                height: 32px;
                margin-bottom: 10px;
                a{
                    text-align: left;
                    height: 30px;
                    padding-left: 20px;
                    color: #333333;
                    display: block;
                    line-height: 30px;
                    float: left;
                }
                i{
                    width: 32px;
                    height: 32px;
                    float: left;
                    display: block;
                    background-image: url("../assets/img/sprites.png");
                    background-size: 67px 67px;
                    background-repeat: no-repeat;
                    margin-left: 10px;
                    &.baidu{
                        background-position: 0 -36px;
                    }
                    &.sougou{
                        background-position: 0 0 ;
                    }
                    &.so{
                        background-position: -32px -36px;
                    }
                }
            }
        }
    }

.item{
    width: 100%;
    height: 100px;
    .img{
        display: block;
        float: left;
        width: 65px;
        height: 100px;
    }
}
.txt{
    display: block;
    float: left;
    .name{
        font-style: normal;
    }

}
.title{
    display: block;

}
</style>
<!--<script>
export default {
  data() {
    return {
      author: "xin",
      articles: {},
    }
  },
  mounted: function() {
    this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=100', {}, {
        headers: {
        },
        emulateJSON: true
    }).then(function(response) {
          // 这里是处理正确的回调
        this.articles = response.data.subjects
        console.info(this.articles);

        // this.articles = response.data["subjects"] 也可以
    }, function(response) {
        // 这里是处理错误的回调
        console.log(response)
    });
  }
}
</script>-->