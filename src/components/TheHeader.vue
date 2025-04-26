<script setup lang="ts">
</script>

<template>
    <header>
        <h1>Учетные записи</h1>
        <button type="button" aria-label="Добавить учетную запись">+</button>
    </header>
</template>

<style lang="scss" scoped>
header {
    line-height: 1.5;
    max-height: 100vh;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }
}
</style>