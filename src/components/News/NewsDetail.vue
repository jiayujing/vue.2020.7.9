<template>
    <div class="detail">
        {{detail}}
       <div>
           <div class="content">
                <span class="contentP">{{detail.Title}}</span>
                <div class="titleDwn">
                    <span>{{detail.addTime | converTime("YYYY-MM-DD")}}</span>
                    <span>{{detail.newsSourse}}</span>
                    <span class="author">{{detail.author}}</span>
                </div>
           </div>
            <div class="divider"></div>
            <div class="detail-content" v-html="detail.newsText"></div>
       </div>
    </div>
</template>
<script>
export default {
    name:'detail',
    data(){
        return {
         detail:{}
        }
    },
    created(){
        let id=this.$route.query.id;
        this.$axios.get('http://192.168.137.1:8080/news.txt')
        .then(res=>{
            this.detail=res.data.message[0];
        })
        .catch(err=>{
            console.log("新闻详情异常",err);
        })
    }
}
</script>
<style lang="css" scoped>
.detail{
    padding-bottom: 100px;
    margin-top: 60px;
}
.content{
    border-bottom: 1px solid gray;
}
.contentP{
    font-size: 24px;
    color: #66ccff;
    text-align: center;
}
.author{
    float: right;
}
.titleDwn span{
    margin-right: 10px;
    
}
</style>