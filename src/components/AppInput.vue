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
      class="p-inputtext custom-input" />
    </div>
</template>



<style scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
}

.custom-input {
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  transition: border-color 0.2s, box-shadow 0.2s;
  background-color: #fff;
  color: #333;
  box-sizing: border-box; 
}

.custom-input:focus {
  border-color: #409eff; 
  box-shadow: 0 0 0 2px rgba(64, 158, 255, 0.2); 
  outline: none;
}

.custom-input::placeholder {
  color: #aaa;
  font-size: 13px;
}
</style>