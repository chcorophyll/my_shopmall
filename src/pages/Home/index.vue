<template>
    <div>
        <typeNav></typeNav>
        <ListContainer></ListContainer>
        <Recommend></Recommend>
        <Rank></Rank>
        <Like></Like>
        <Floor></Floor>
        <Floor></Floor>
        <Brand></Brand>
    </div>
</template>

<script>
//非路由组件在使用的时候分为三大步：定义、注册、使用
import ListContainer from "./ListContainer";
import Recommend from "./Recommend";
import Rank from "./Rank";
import Like from "./Like";
import Floor from "./Floor";
import Brand from "./Brand";

export default {
    name: 'Home',
    components: {
        ListContainer, 
        Recommend, 
        Rank, 
        Like,
        Floor,
        Brand,
    },

    data() {
        return {
            
        };
    },

    mounted() {
        
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>