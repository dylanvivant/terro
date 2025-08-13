<template>
  <div class="flex flex-col items-center justify-center">
    <HeaderSection />
    <StatsSection />
    <DitchSection />
  </div>
</template>

<script setup>
import DitchSection from '@/components/section/DitchSection.vue'
import HeaderSection from '@/components/section/HeaderSection.vue'
import StatsSection from '@/components/section/StatsSection.vue'
</script>
