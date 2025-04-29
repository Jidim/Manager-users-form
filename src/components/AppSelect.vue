<script setup lang="ts">
import Dropdown from 'primevue/dropdown'

// Тип для элементов списка
interface Option {
  label: string
  value: string | number
}

defineProps({
  options: {
    type: Array<Option>,
    required: true
  }
})

const selectedValue = defineModel<string | number>({
  type: [String, Number],
  required: true
})
</script>

<template>
  <Dropdown v-model="selectedValue" :options="options" optionLabel="label" optionValue="value"
    class="custom-dropdown" />
</template>

<style scoped lang="scss">
.custom-dropdown {
  width: 100%;
  min-width: 120px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  transition: border-color 0.2s, box-shadow 0.2s;

  .p-dropdown-label {
    padding: 8px 12px;
  }

  &:focus-within {
    border-color: #409eff;
    box-shadow: 0 0 0 2px rgba(64, 158, 255, 0.2);
  }
}

:deep(.p-dropdown-panel) {
  background-color: #fafafa;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
  padding: 4px 0;
}

:deep(.p-dropdown-item) {
  padding: 8px 12px;
  font-size: 14px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f5f5f5;
  }

  &.p-highlight {
    background-color: #409eff;
    color: white;
  }
}
</style>