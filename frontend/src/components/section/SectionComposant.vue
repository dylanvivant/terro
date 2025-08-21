<template>
  <section class="py-16">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <!-- Text Card with Border -->
        <div class="rounded-3xl bg-secondary-vertClair/20 p-8 md:p-12 mb-12">
          <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-vert mb-6">
            {{ title }}
          </h2>

          <div class="space-y-4 text-primary-vert text-base md:text-lg">
            <p v-for="(paragraph, index) in paragraphs" :key="index" v-html="paragraph"></p>
          </div>

          <!-- CTA Button -->
          <div class="mt-8 flex justify-end" v-if="showButton">
            <button
              @click="handleButtonClick"
              class="bg-secondary-vert hover:bg-primary-vert text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300"
            >
              {{ buttonText }}
            </button>
          </div>
        </div>

        <!-- Images Grid -->
        <div
          class="grid grid-cols-1 max-md:grid-rows-3 md:grid-cols-5 gap-4"
          v-if="images && images.length > 0"
        >
          <div
            v-for="(image, index) in images"
            :key="index"
            class="relative overflow-hidden rounded-3xl"
            :class="[
              getImageClasses(index),
              index === 0
                ? 'col-span-1 md:col-span-2 row-span-1'
                : index === 1
                  ? 'md:col-span-3 max-xl:row-span-2'
                  : 'xl:col-span-2 ',
            ]"
          >
            <img
              :src="image.src"
              :alt="image.alt"
              class="w-full h-full object-cover rounded-3xl"
              :class="image.height || ''"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

// Props
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  paragraphs: {
    type: Array,
    required: true,
  },
  buttonText: {
    type: String,
    default: 'VOIR PLUS',
  },
  showButton: {
    type: Boolean,
    default: true,
  },
  images: {
    type: Array,
    default: () => [],
  },
  layout: {
    type: String,
    default: 'default', // 'default', 'stacked', 'asymmetric'
    validator: (value) => ['default', 'stacked', 'asymmetric'].includes(value),
  },
})

// Emits
const emit = defineEmits(['button-click'])

// Methods
const getImageClasses = (index) => {
  if (props.layout === 'asymmetric' && props.images.length >= 2) {
    return index === 0 ? 'md:row-span-1' : 'md:row-span-2'
  }
  return ''
}

const handleButtonClick = () => {
  emit('button-click')
}
</script>

<style scoped>
/* Custom responsive grid for asymmetric layout */
.grid-asymmetric {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .grid-asymmetric {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
  }
}

/* Hover effects */
.image-container:hover {
  transform: translateY(-2px);
  transition: transform 0.3s ease;
}

/* Button hover animation */
button {
  position: relative;
  overflow: hidden;
}

button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

button:hover::before {
  left: 100%;
}
</style>
