<template>
    <div id="app" class="fillcontain">
        <router-view :key="$route.path"></router-view>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="less">
    @import './style/common';
</style>
