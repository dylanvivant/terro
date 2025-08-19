<template>
  <button
    class="bg-primary-orange rounded-full sm:w-[255px] sm:h-[75px] w-[255px] h-[50px] text-white sm:text-p-medium text-p-medium font-semibold hover:bg-primary-orange/90 transition-colors duration-300"
    @click="handleClick"
  >
    <span class="font-light">PLANIFIER UN</span> <span class="font-bold"> RENDEZ-VOUS</span>
  </button>
</template>

<script setup>
import { defineProps } from 'vue'

// Props pour personnaliser le lien Calendly
const props = defineProps({
  calendlyUrl: {
    type: String,
    default: 'https://calendly.com/votre-lien-calendly', // Remplacez par votre vrai lien Calendly
  },
  openInNewTab: {
    type: Boolean,
    default: true,
  },
})

const handleClick = () => {
  if (props.openInNewTab) {
    window.open(props.calendlyUrl, '_blank', 'noopener,noreferrer')
  } else {
    window.location.href = props.calendlyUrl
  }
}
</script>

<style lang="scss" scoped></style>
