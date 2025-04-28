<script setup lang="ts">
import InputText from 'primevue/inputtext';

const model = defineModel({
    type: String,
    required: true
});

defineProps({
    placeholder: {
        type: String,
        default: ''
    },
    maxlength: {
        type: Number,
        default: null
    },
    type: {
        type: String,
        default: 'text'
    },
    required: {
        type: Boolean,
        default: false
    }
});
</script>

<template>
    <div class="input-wrapper">
        <InputText v-model="model" :placeholder="placeholder" :maxlength="maxlength" :type="type" :required="required"
            class="p-inputtext" />
    </div>
</template>



<style scoped>
.input-wrapper {
    display: flex;
    flex-direction: column;
}
</style>