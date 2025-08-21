<template>
  <div
    class="solution-card cursor-pointer transition-all duration-300 hover:scale-105"
    :class="{
      active: isActive,
      'w-[300px] md:w-[25dvw]': !isTablet,
      'w-20 h-32 md:w-24 md:h-64': isTablet,
    }"
    @click="handleClick"
    @mouseenter="$emit('hover', solution)"
  >
    <div
      class="solution-item px-6 py-4 rounded-[10px] xl:rounded-l-[15px] md:rounded-b-[20px] md:rounded-t-none border-2 transition-all duration-300 h-full flex items-center justify-start"
      :class="[
        isActive
          ? 'bg-primary-vert text-white border-primary-vert'
          : 'bg-white text-primary-vert border-gray-200 hover:border-primary-vertClair',
        isTablet ? 'writing-mode-vertical' : '',
      ]"
    >
      <h3
        class="font-semibold text-center"
        :class="[isTablet ? 'text-sm' : 'text-h-5 xl:text-h-3', isTablet ? 'vertical-text ' : '']"
      >
        {{ solution.name }}
      </h3>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  solution: {
    type: Object,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  isTablet: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['select', 'hover'])

const handleClick = () => {
  // Détecter si on est sur mobile (taille d'écran < 768px)
  const isMobile = window.innerWidth < 768

  if (isMobile) {
    // Sur mobile : rediriger vers la page de la solution
    router.push(`/${props.solution.id}`)
  } else {
    // Sur desktop/tablet : comportement normal du carousel
    emit('select', props.solution)
  }
}
</script>

<style scoped>
.vertical-text {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: 32px;
  transform: rotate(180deg);
}

.writing-mode-vertical {
  display: flex;
  align-items: end;
  justify-content: center;
}
</style>
