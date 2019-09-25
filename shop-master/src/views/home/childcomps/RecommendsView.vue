<template>
    <div class="recommendsview">
        <div v-for="(item,index) in recommends" :key="item[index]" class="recommends-item">
            <a :href="item.link">
                <img :src="item.image">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name:'RecommendsView',
    props:{
        recommends:{
            type:Array,
            default(){
                return [];
            }
        }
    }
}
</script>

<style scoped>
.recommendsview{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px 0;
    border-bottom: 5px solid #ccc;
}
.recommends-item{
    flex: 1;
}
.recommends-item img{
    width: 70px;
    height: 70px;
    margin-bottom: 12px;
}
</style>