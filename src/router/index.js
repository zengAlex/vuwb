/**
 *  date: 2017-06-09 17:43:31
 *  author: zengcanxin
 *  description: [
 *      {inde:‘首页’}，
 *      {trip: '旅行'}，
 *      {food: '美食'}, 
 *      {shopping: '购物'},
 *      {work: '工作'},
 *      {video: '视频'},
 *      {relaxed: '轻松一刻'}
 *      ]
 * *
 */




import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index' 
import trip from '@/components/trip'   
import food from  '@/components/food'   
import shopping from '@/components/shopping'
import work from '@/components/work'
// import video from '@/components/video'
import relaxed from '@/components/relaxed'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/index',
        name: 'index',
        component: index
    },
    {
    	path: '/trip',
    	name: 'trip',
    	component: trip
    },
    {
    	path: '/food',
    	name: 'food',
    	component: food
    },
    {
        path: '/shooping',
        name: 'shopping',
        component: shopping
    },
    {
        path: '/work',
        name: 'work',
        component: work
    },
    // {
    //     path: '/video',
    //     name: 'video',
    //     component: video
    // },
    {
        path: '/relaxed',
        name: 'relaxed',
        component: relaxed
    }
  ]
});
