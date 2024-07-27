<template>
    <div v-for="(item, index) in navList" :key="index">
        <navListItem :itemContent="item"/>
    </div>
</template>
<script>
    import navListItem from './navListItem.vue';
    export default {
        props: ["navList"],
        components: {
            navListItem
        }
    };
</script>