<template>
  <Transition name="fade-scale">
    <div v-if="showFloatingButton" class="fixed bottom-16 right-12 z-50">
      <button
        class="bg-primary-orange hover:bg-primary-orange/90 text-white rounded-full w-16 h-16 md:w-20 md:h-20 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        @click="handleClick"
        aria-label="Planifier un rendez-vous"
      >
        <!-- Icône calendrier -->
        <svg
          class="w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 group-hover:scale-110"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </button>

      <!-- Tooltip -->
      <div
        class="absolute right-full top-1/2 transform -translate-y-1/2 mr-3 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      >
        Planifier un rendez-vous
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted, defineProps } from 'vue'

const props = defineProps({
  calendlyUrl: {
    type: String,
    default: 'https://calendly.com/votre-lien-calendly',
  },
  openInNewTab: {
    type: Boolean,
    default: true,
  },
})

const showFloatingButton = ref(true)

const handleClick = () => {
  if (props.openInNewTab) {
    window.open(props.calendlyUrl, '_blank', 'noopener,noreferrer')
  } else {
    window.location.href = props.calendlyUrl
  }
}

const checkEndSectionVisibility = () => {
  const endSection = document.getElementById('end-section')

  if (endSection) {
    const rect = endSection.getBoundingClientRect()
    // Considère la section visible si elle est dans le viewport
    const isVisible = rect.top < window.innerHeight && rect.bottom > 0

    // Cache le bouton flottant si EndSection est visible
    showFloatingButton.value = !isVisible
  }
}

let ticking = false

const onScroll = () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      checkEndSectionVisibility()
      ticking = false
    })
    ticking = true
  }
}

onMounted(() => {
  // Vérification initiale
  checkEndSectionVisibility()

  // Écouter le scroll
  window.addEventListener('scroll', onScroll, { passive: true })

  // Vérifier aussi au redimensionnement
  window.addEventListener('resize', checkEndSectionVisibility, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', checkEndSectionVisibility)
})
</script>

<style lang="scss" scoped>
/* Animations pour le bouton flottant */
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.fade-scale-enter-from {
  opacity: 0;
  transform: scale(0.8) translateY(10px);
}

.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.8) translateY(10px);
}

.fade-scale-enter-to,
.fade-scale-leave-from {
  opacity: 1;
  transform: scale(1) translateY(0);
}

/* Animation de pulsation subtile */
@keyframes subtle-pulse {
  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(198, 126, 57, 0.4);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(198, 126, 57, 0);
  }
}

button {
  animation: subtle-pulse 3s infinite;
}

/* Animation au hover du tooltip */
.group:hover .opacity-0 {
  opacity: 1;
}
</style>
