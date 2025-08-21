<template>
  <div class="">
    <!-- Desktop: Automatic carousel avec cartes sur le côté -->
    <div class="hidden xl:block">
      <div class="flex flex-row gap-8 h-full relative">
        <!-- Solution showcase -->
        <div class="flex-1">
          <SolutionShowcase
            :activeSolution="activeSolution"
            @learn-more="handleLearnMore"
            @contact="handleContact"
          />
        </div>
        <!-- Solutions list -->
        <div class="space-y-4 fixed -right-10 top-8">
          <SolutionCard
            v-for="solution in solutions"
            :key="solution.id"
            :solution="solution"
            :isActive="solution.id === activeSolution.id"
            @select="selectSolution"
            @hover="handleHover"
          />
        </div>
      </div>
    </div>

    <!-- Tablet: Cartes horizontales en haut avec texte vertical -->
    <div class="hidden md:block xl:hidden">
      <div class="flex flex-col gap-8 h-full">
        <!-- Solutions list horizontale en haut -->
        <div class="flex flex-row gap-4 justify-center mb-8">
          <SolutionCard
            v-for="solution in solutions"
            :key="solution.id"
            :solution="solution"
            :isActive="solution.id === activeSolution.id"
            :isTablet="true"
            @select="selectSolution"
            @hover="handleHover"
          />
        </div>
        <!-- Solution showcase en bas -->
        <div class="flex-1">
          <SolutionShowcase
            :activeSolution="activeSolution"
            @learn-more="handleLearnMore"
            @contact="handleContact"
          />
        </div>
      </div>
    </div>

    <!-- Mobile: Simple list -->
    <div class="space-y-4 fixed md:hidden -right-10 top-8">
      <SolutionCard
        v-for="solution in solutions"
        :key="solution.id"
        :solution="solution"
        :isActive="solution.id === activeSolution.id"
        @select="selectSolution"
        @hover="handleHover"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import SolutionCard from './SolutionCard.vue'
import SolutionShowcase from './SolutionShowcase.vue'

const router = useRouter()

// Solutions data
const solutions = ref([
  {
    id: 'easylo',
    name: 'easylo',
    category: 'Logistique',
    description: 'Optimisation des circuits logistiques',
    fullDescription:
      "easylo révolutionne la gestion logistique agricole en optimisant vos circuits de distribution, réduisant vos coûts de transport et améliorant la traçabilité de vos produits du champ à l'assiette.",
    features: [
      'Optimisation des tournées',
      'Gestion des stocks',
      'Traçabilité complète',
      'Interface conducteur mobile',
    ],
    image: '/images/illustrations/easylo.png',
  },
  {
    id: 'qualiflow',
    name: 'Qualiflow',
    category: 'Qualité',
    description: 'Gestion de la qualité et conformité',
    fullDescription:
      'Qualiflow vous accompagne dans la gestion de la qualité de vos productions agricoles, en assurant le respect des normes et certifications, tout en optimisant vos processus de contrôle qualité.',
    features: [
      'Contrôles qualité automatisés',
      'Gestion des certifications',
      'Audit et conformité',
      'Reporting réglementaire',
    ],
    image: '/images/illustrations/qualiflow.png',
  },
  {
    id: 'kapflow',
    name: 'Kapflow',
    category: 'Workflow',
    description: 'Automatisation des processus métier',
    fullDescription:
      'Kapflow automatise et digitalise vos processus métier agricoles, de la commande à la livraison, en passant par la production. Gagnez en efficacité et réduisez les erreurs grâce à nos workflows intelligents.',
    features: [
      'Automatisation des tâches',
      'Workflows personnalisables',
      'Notifications en temps réel',
      'Tableau de bord analytique',
    ],
    image: '/images/illustrations/graphique.png',
  },

  {
    id: 'aviconnect',
    name: 'Avi connect',
    category: 'Connectivité',
    description: "Solutions IoT pour l'agriculture",
    fullDescription:
      'Avi connect connecte vos équipements agricoles et capteurs IoT pour vous offrir une vision en temps réel de votre exploitation. Surveillez, analysez et optimisez vos opérations à distance.',
    features: [
      'Capteurs IoT intelligents',
      'Monitoring en temps réel',
      'Alertes automatiques',
      'Analyse prédictive',
    ],
    image: '/images/illustrations/aviconnect.png',
  },
  {
    id: 'myoxyane',
    name: 'myOxyane',
    category: 'Plateforme collaborative',
    description:
      "L'application coopérative nouvelle génération qui connecte tous les agriculteurs dans un écosystème digital unifié et intelligent.",
    fullDescription:
      "Chez Terr'O, nous refusons la complexité inutile. myOxyane n'est pas une énième application compliquée pensée par des développeurs en costumes. C'est un outil conçu avec et pour les agriculteurs, dans la simplicité et l'efficacité.",
    features: [
      'Écosystème digital unifié',
      'Interface simplifiée',
      'Connexion entre agriculteurs',
      'Outils collaboratifs intelligents',
    ],
    image: '/images/illustrations/agriculteur.png',
  },
])

// State management
const activeSolution = ref(solutions.value.find((s) => s.id === 'myoxyane') || solutions.value[0])
const autoScrollInterval = ref(null)
const isHovering = ref(false)

// Methods
const selectSolution = (solution) => {
  activeSolution.value = solution
  resetAutoScroll()
}

const handleHover = (solution) => {
  if (!isHovering.value) {
    isHovering.value = true
    activeSolution.value = solution
    clearAutoScroll()
  }
}

const handleLearnMore = (solution) => {
  // Emit event for parent to handle navigation
  emit('learn-more', solution)
}

const navigateToSolution = (solution) => {
  // Navigation directe vers la page de la solution (pour mobile)
  router.push(`/${solution.id}`)
}

const handleContact = (solution) => {
  // Emit event for parent to handle contact
  emit('contact', solution)
}

const startAutoScroll = () => {
  if (window.innerWidth >= 768) {
    // Only on desktop/tablet
    autoScrollInterval.value = setInterval(() => {
      if (!isHovering.value) {
        const currentIndex = solutions.value.findIndex((s) => s.id === activeSolution.value.id)
        const nextIndex = (currentIndex + 1) % solutions.value.length
        activeSolution.value = solutions.value[nextIndex]
      }
    }, 600000) // 1 minute interval
  }
}

const clearAutoScroll = () => {
  if (autoScrollInterval.value) {
    clearInterval(autoScrollInterval.value)
    autoScrollInterval.value = null
  }
}

const resetAutoScroll = () => {
  clearAutoScroll()
  isHovering.value = false
  setTimeout(() => {
    startAutoScroll()
  }, 2000) // Wait 2 seconds before restarting auto scroll
}

// Lifecycle
onMounted(() => {
  startAutoScroll()

  // Reset hover state when mouse leaves the component area
  const handleMouseLeave = () => {
    isHovering.value = false
    startAutoScroll()
  }

  document.addEventListener('mouseleave', handleMouseLeave)

  onUnmounted(() => {
    clearAutoScroll()
    document.removeEventListener('mouseleave', handleMouseLeave)
  })
})

onUnmounted(() => {
  clearAutoScroll()
})

const emit = defineEmits(['learn-more', 'contact'])
</script>
