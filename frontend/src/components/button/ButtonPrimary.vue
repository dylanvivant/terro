<template>
  <button
    class="bg-primary-orange rounded-full sm:w-[225px] sm:h-[75px] w-[155px] h-[50px] text-white sm:text-p-medium text-p-small font-semibold hover:bg-primary-orange/90 transition-colors duration-300"
    @click="handleClick"
  >
    <span class="font-light">NOS</span> <span class="font-bold">SOLUTIONS</span>
  </button>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const handleClick = () => {
  router.push('/solutions')
}
</script>
<style lang="scss" scoped></style>
