<script setup lang="ts">
import { Textarea } from 'primevue';
import { ref, watchEffect } from 'vue';

const model = defineModel({
    type: Array<String>,
    required: true
});

const props = defineProps({
    joinSeparate: {
        type: String,
        required: true
    },
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

const stringModel = ref(model.value.join(props.joinSeparate + ' '))

watchEffect(() => model.value = stringModel.value.replace(' ', '').split(props.joinSeparate))

</script>

<template>
    <div class="input-wrapper">
        <Textarea v-model="stringModel" :placeholder="placeholder" autoResize :maxlength="maxlength"
            :required="required" class="p-inputtext custom-textarea" />
    </div>
</template>

<style scoped>
.input-wrapper {
    display: flex;
    flex-direction: column;
    width: 300px;
}

.custom-textarea {
    width: 100%;
    min-height: 38px;
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 14px;
    resize: none;
    transition: border-color 0.2s, box-shadow 0.2s;
    box-sizing: border-box;
}

.custom-textarea:focus {
    border-color: #409eff;
    box-shadow: 0 0 0 2px rgba(64, 158, 255, 0.2);
    outline: none;
}
</style>