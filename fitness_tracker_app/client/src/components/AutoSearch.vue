<script setup lang="ts">
import { ref, computed } from 'vue'
import { OAutocomplete } from '@oruga-ui/oruga-next'
import { search, type User } from '@/models/user'

const selected = ref('')
const isLoading = ref(false)
const data = ref<{
  value: User;
  label: string;
  // Add more items as needed
}[]>([])

async function getAsyncData(value: string): Promise<void> {
    const response = await search(value) as { items: User[] };
    data.value = response.items.map((item) => ({
        value: item,
        label: item.lastName
    }));
}

const filteredDataArray = computed(() => {
  return data.value.filter((item) =>
    item.label.toLowerCase().includes(selected.value.toLowerCase())
  )
})

const onTyping = (text: string) => {
  isLoading.value = true
  // Simulate API call delay
  setTimeout(() => {
    selected.value = text
    isLoading.value = false
  }, 500)
}
</script>

<style scoped>
.autocomplete-wrapper {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

.items {
  padding: 8px;
  cursor: pointer;
}

.items:hover {
  background-color: #f5f5f5;
}
</style>

<template>
  <div class="autocomplete-wrapper">
    <o-autocomplete
      v-model="selected"
      :data="filteredDataArray"
      placeholder="Search items..."
      :loading="isLoading"
      field="name"
      @typing="onTyping"
      clearable
      expanded
    >
      <template #default="{ option }">
        <div class="items">
          {{ option.name }}
        </div>
      </template>
    </o-autocomplete>
  </div>
</template>
