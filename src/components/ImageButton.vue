<script setup lang="ts">
defineProps({
    image: {
        type: String,
        required: true
    }
})
</script>

<template>
    <img :src="image">
</template>

<style scoped lang="scss">

</style>