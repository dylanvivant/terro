<template>
  <div
    class="bg-primary-vert xl:w-96 rounded-3xl shadow-lg p-8 text-start xl:hover:shadow-xl xl:hover:scale-105 transition-all duration-300 cursor-pointer"
  >
    <div class="mb-6">
      <img
        :src="image"
        alt="Solutions personnalisées"
        class="w-60 h-60 md:w-96 md:h-96 xl:w-64 xl:h-64 mx-auto object-contain"
      />
    </div>
    <h3 class="text-hSmall-4 lg:text-hSmall-3 font-bold leading-tight text-primary-blanc mb-4">
      {{ title }}
    </h3>
    <p class="text-p-medium text-primary-blanc leading-relaxed mb-6">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
})
</script>

<style lang="scss" scoped></style>
