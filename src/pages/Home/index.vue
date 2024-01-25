<template>
    <div>
        <typeNav></typeNav>
        <ListContainer></ListContainer>
        <Recommend></Recommend>
        <Rank></Rank>
        <Like></Like>
        <Floor v-for="(floor, index) in floorList" :key="floor.id" :list="floor"></Floor>
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
import { mapState } from "vuex";

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

    computed: {
        ...mapState ({
            floorList: state => state.home.floorList
        }),
    },

    mounted() {
        this.$store.dispatch("getFloorList");
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>