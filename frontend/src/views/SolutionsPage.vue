<template>
  <div class="solutions-page min-h-screen bg-gray-50">
    <!-- Main Solutions Section -->
    <section class="py-0">
      <div class="container mx-auto">
        <SolutionsCarousel @learn-more="handleLearnMore" @contact="handleContact" />
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import SolutionsCarousel from '@/components/solutions/SolutionsCarousel.vue'

const router = useRouter()

const handleLearnMore = (solution) => {
  // Navigation vers une page détaillée de la solution
  console.log('Learn more about:', solution.name)
  // router.push(`/solutions/${solution.id}`)
}

const handleContact = (solution = null) => {
  // Navigation vers page de contact ou ouverture modal
  console.log('Contact for solution:', solution?.name || 'general')
  // router.push('/contact')
}

const handleDemo = () => {
  // Navigation vers demande de démo
  console.log('Request demo')
  // router.push('/demo')
}
</script>

<style scoped>
.solutions-page {
  animation: fadeIn 0.6s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.solution-mobile-card {
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.solution-mobile-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}
</style>
