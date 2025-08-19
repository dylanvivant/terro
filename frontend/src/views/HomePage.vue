<template>
  <div class="flex flex-col items-center justify-center">
    <HeaderSection />
    <StatsSection />
    <DitchSection />
    <ApprocheSection />
    <SolutionSection />
  </div>
</template>

<script setup>
import DitchSection from '@/components/section/DitchSection.vue'
import HeaderSection from '@/components/section/HeaderSection.vue'
import ApprocheSection from '@/components/section/ApprocheSection.vue'
import StatsSection from '@/components/section/StatsSection.vue'
import SolutionSection from '@/components/section/SolutionSection.vue'
</script>
