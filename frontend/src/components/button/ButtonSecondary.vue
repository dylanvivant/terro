<template>
  <button
    class="bg-primary-vertClair rounded-full sm:w-[225px] sm:h-[75px] w-[155px] h-[50px] text-white sm:text-p-medium text-p-small font-semibold hover:bg-primary-vert transition-colors duration-300"
    @click="handleClick"
  >
    {{ text }}
  </button>
</template>

<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
})

const router = useRouter()

const handleClick = () => {
  router.push(props.to)
}
</script>

<style lang="scss" scoped></style>
