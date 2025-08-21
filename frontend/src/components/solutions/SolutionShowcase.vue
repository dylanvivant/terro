<template>
  <div
    class="bg-white rounded-b-2xl shadow-lg overflow-hidden mb-40 cursor-pointer hover:shadow-xl transition-shadow duration-300"
    :class="[
      'w-[70dvw] xl:w-[60dvw]', // PC: garde la largeur originale
      'md:w-[90dvw] md:mx-auto xl:mx-0 lg:w-[85dvw]', // Tablette: plus large pour s'adapter
    ]"
    @click="handleClick"
  >
    <!-- Image section -->
    <div class="relative h-full flex items-center justify-center">
      <!-- Version PC (xl et plus) -->
      <div class="hidden xl:flex w-full justify-center">
        <div class="flex flex-col w-2/5">
          <img
            :src="activeSolution.image"
            :alt="activeSolution.name"
            class="w-auto mx-auto object-contain"
          />
          <h2 class="text-h-1 ml-5 font-bold text-primary-vert">
            {{ activeSolution.name }}
          </h2>
        </div>
        <p class="text-primary-vert text-h-4 text-center leading-relaxed w-[340px] mt-6">
          {{ activeSolution.description }}
        </p>
      </div>

      <!-- Version Tablette (md à lg) -->

      <div class="xl:hidden flex md:flex-row w-full p-6 md:p-8 gap-6 md:gap-8">
        <div class="flex flex-col items-center md:w-1/2">
          <img
            :src="activeSolution.image"
            :alt="activeSolution.name"
            class="w-auto mx-auto object-contain"
          />
          <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-vert text-center">
            {{ activeSolution.name }}
          </h2>
        </div>
        <div class="flex flex-col md:w-1/2 justify-center">
          <p class="text-primary-vert text-h-5 text-center leading-relaxed w-[340px] mt-6">
            {{ activeSolution.description }}
          </p>
        </div>
      </div>
    </div>

    <!-- Content section -->
    <div class="p-6 md:p-8">
      <p class="text-primary-vert text-base md:text-lg leading-relaxed mb-6">
        {{ activeSolution.fullDescription }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  activeSolution: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['learn-more', 'contact'])

const handleClick = () => {
  // Rediriger vers la page spécifique de la solution
  router.push(`/${props.activeSolution.id}`)
}
</script>
