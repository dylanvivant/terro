<template>
  <div class="solutions-page min-h-screen">
    <!-- Header Section -->
    <section class="text-center pt-16 pb-8 px-4">
      <h1 class="text-hSmall-2 md:text-h-3 lg:text-h-1 font-bold text-primary-vert mb-6">
        Nos solutions pour l'agriculture de demain
      </h1>
      <p class="text-p-medium md:text-h-5 text-primary-vert max-w-5xl mx-auto">
        Des outils numériques pensés avec et pour les agriculteurs, pour simplifier leur quotidien
        et optimiser leurs pratiques.
      </p>
    </section>

    <!-- Solutions Grid -->
    <section class="pb-20 px-4">
      <div class="container mx-auto max-w-7xl">
        <div
          class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12 justify-items-center"
        >
          <!-- Solution Card -->
          <div
            v-for="solution in solutions"
            :key="solution.id"
            class="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer w-full max-w-md"
            @click="navigateToSolution(solution.id)"
          >
            <div class="mb-6 flex items-center justify-center h-64">
              <img
                :src="solution.image"
                :alt="solution.name"
                class="w-full h-full object-contain"
              />
            </div>
            <h3 class="text-hSmall-4 lg:text-hSmall-3 font-bold text-primary-vert mb-4">
              {{ solution.name }}
            </h3>
            <p class="text-p-small md:text-p-medium text-primary-vert leading-relaxed">
              {{ solution.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-secondary-vertClair/20 py-16 px-4 rounded-3xl mx-4 md:mx-12 mb-20">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-hSmall-3 md:text-h-3 font-bold text-primary-vert mb-6">
          Une solution sur mesure pour votre exploitation ?
        </h2>
        <p class="text-p-medium md:text-h-5 text-primary-vert mb-8">
          Chaque exploitation est unique. Discutons ensemble de vos besoins spécifiques.
        </p>
        <ButtonCalendly />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import ButtonCalendly from '@/components/button/ButtonCalendly.vue'

const router = useRouter()

// Solutions data
const solutions = ref([
  {
    id: 'myoxyane',
    name: 'myOxyane',
    description:
      "Plateforme digitale qui connecte tous les acteurs de l'agriculture pour une gestion efficiente et durable des parcelles agricoles.",
    image: '/images/illustrations/agriculteur.png',
  },
  {
    id: 'easylo',
    name: 'easylo',
    description:
      'Optimisation de la logistique agricole, traçabilité complète et gestion intelligente des circuits de distribution.',
    image: '/images/illustrations/easylo.png',
  },
  {
    id: 'qualiflow',
    name: 'Qualiflow',
    description:
      'Gestion de la qualité et conformité, contrôles automatisés et respect des normes pour vos productions agricoles.',
    image: '/images/illustrations/qualiflow.png',
  },
  {
    id: 'kapflow',
    name: 'Kapflow',
    description:
      "Solution d'analyse de données qui optimise les rendements et améliore la gestion des ressources grâce à l'intelligence artificielle.",
    image: '/images/illustrations/graphique.png',
  },
  {
    id: 'aviconnect',
    name: 'Avi connect',
    description:
      'Plateforme collaborative pour les aviculteurs, facilitant la gestion des élevages et le partage de bonnes pratiques.',
    image: '/images/illustrations/aviconnect.png',
  },
])

const navigateToSolution = (solutionId) => {
  router.push(`/${solutionId}`).then(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })
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

/* Animation en cascade pour les cartes */
.grid > div:nth-child(1) {
  animation: fadeInUp 0.8s ease-out 0.1s both;
}

.grid > div:nth-child(2) {
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

.grid > div:nth-child(3) {
  animation: fadeInUp 0.8s ease-out 0.3s both;
}

.grid > div:nth-child(4) {
  animation: fadeInUp 0.8s ease-out 0.4s both;
}

.grid > div:nth-child(5) {
  animation: fadeInUp 0.8s ease-out 0.5s both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
