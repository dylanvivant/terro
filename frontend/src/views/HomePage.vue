<template>
  <div class="flex flex-col items-center justify-center">
    <HeaderSection />
    <StatsSection />
    <DitchSection />
    <ApprocheSection />
    <SolutionSection />
    <EndSection />
  </div>
  <p class="text-center text-[10px] md:text-p-medium text-gray-800">
    © 2025 Terr'O. Tous droits réservés. Fait avec ❤️ pour nos agriculteurs.
  </p>
</template>

<script setup>
import DitchSection from '@/components/section/DitchSection.vue'
import HeaderSection from '@/components/section/HeaderSection.vue'
import ApprocheSection from '@/components/section/ApprocheSection.vue'
import StatsSection from '@/components/section/StatsSection.vue'
import SolutionSection from '@/components/section/SolutionSection.vue'
import EndSection from '@/components/section/EndSection.vue'
</script>
