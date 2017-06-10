<template>
    <div class="video-content">
    	<div class="items" v-for="video in video" >
			<video v-bind:src="video.videos.large.url" controls="controls" ></video>
			<img v-bind:src="video.userImageURL" >
		</div>
		<button @click="get">发送请求</button>
    </div>
</template>

<style lang="scss">
.video-content{
	.items{
		width: 328px;
		height: 225px;
		display: block;
		margin: 0 30px;
		float: left;
		margin-top: 10px;
		video{
			display: block;
			width: 100%;
			height: 100%;
			border: 1px solid #dddddd;
			display: none
		}
		img{
			display: block;
			width: 100%;
			height: 100%;
		}
	}
}
</style>

<script>
export default {
	data() {
		return {
			video: []
		}
	},

	methods: {
		get: function(){
			this.$http.get('https://pixabay.com/api/videos/?key=5590866-2c52e0d3dd91693419a35133c&video_type=animation', {}).then(function(response) {
			    	console.info(response.body.hits);
			          // 这里是处理正确的回调
			        this.video = response.body.hits
			    }, function(response) {
			        // 这里是处理错误的回调
			        console.log(response)
			    });
		}
	}

}
</script>