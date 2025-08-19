<template>
  <section class="w-full h-full mb-32">
    <div class="text-center mb-16 lg:mb-20 animate-fade-in-up">
      <h2
        class="text-hSmall-2 md:text-h-3 lg:text-h-1 font-bold text-primary-vert mb-6 animate-fade-in-up animation-delay-200"
      >
        Nos solutions concrètes
      </h2>
    </div>

    <!-- Solutions Cards -->
    <div class="container mx-auto flex flex-col justify-center items-center px-4 xl:w-6xl">
      <div
        class="flex flex-col xl:flex-row justify-center items-center md:w-128 xl:w-full gap-8 lg:gap-12"
      >
        <!-- myOxyane Card -->
        <div
          class="bg-white xl:w-96 rounded-xl shadow-lg p-8 text-start hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
          @click="$router.push('/myoxyane')"
        >
          <div class="mb-6">
            <img
              src="/images/illustrations/agriculteur.png"
              alt="myOxyane - Agriculteur avec technologie"
              class="w-60 h-60 md:w-96 md:h-96 xl:w-64 xl:h-64 mx-auto object-contain"
            />
          </div>
          <h3 class="text-hSmall-4 lg:text-hSmall-3 font-bold text-primary-vert mb-4">myOxyane</h3>
          <p class="text-p-medium text-primary-vert leading-relaxed mb-6">
            Notre plateforme digitale qui connecte tous les acteurs de l'agriculture pour une
            gestion efficiente et durable des parcelles agricoles
          </p>
        </div>

        <!-- Kapflow Card -->
        <div
          class="bg-white xl:w-96 rounded-xl shadow-lg p-8 text-start hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
          @click="$router.push('/kapflow')"
        >
          <div class="mb-6">
            <img
              src="/images/illustrations/graphique.png"
              alt="Kapflow - Analyse et données"
              class="w-60 h-60 md:w-96 md:h-96 xl:w-64 xl:h-64 mx-auto object-contain"
            />
          </div>
          <h3 class="text-hSmall-4 lg:text-hSmall-3 font-bold text-primary-vert mb-4">Kapflow</h3>
          <p class="text-p-medium text-primary-vert leading-relaxed mb-6">
            Notre solution d'analyse de données qui optimise les rendements et améliore la gestion
            des ressources grâce à l'intelligence artificielle
          </p>
        </div>

        <!-- Solutions personnalisées Card -->
        <div
          class="bg-white xl:w-96 rounded-xl shadow-lg p-8 text-start hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer xl:col-span-1"
          @click="$router.push('/solutions-personnalisees')"
        >
          <div class="mb-6">
            <img
              src="/images/illustrations/personnalisation.png"
              alt="Solutions personnalisées"
              class="w-60 h-60 md:w-96 md:h-96 xl:w-64 xl:h-64 mx-auto object-contain"
            />
          </div>
          <h3 class="text-hSmall-4 lg:text-hSmall-3 font-bold leading-tight text-primary-vert mb-4">
            Solutions personnalisées
          </h3>
          <p class="text-p-medium text-primary-vert leading-relaxed mb-6">
            Des solutions sur mesure adaptées à vos besoins spécifiques pour optimiser votre
            activité agricole et atteindre vos objectifs
          </p>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-end mt-12 mb-4 lg:mt-16">
        <button
          class="inline-flex items-center gap-2 text-primary-vert font-semibold text-p-large hover:text-secondary-vert transition-colors duration-300 group"
        >
          <span class="font-light">voir <span class="font-semibold">plus</span></span>
          <svg
            class="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
  animation: fadeInUp 0.8s ease-out;
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

// Animation delay for staggered effect
.grid > div:nth-child(1) {
  animation: fadeInUp 0.8s ease-out 0.1s both;
}

.grid > div:nth-child(2) {
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

.grid > div:nth-child(3) {
  animation: fadeInUp 0.8s ease-out 0.3s both;
}

// Hover effects for better interactivity
.grid > div {
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);

    img {
      transform: scale(1.05);
    }
  }

  img {
    transition: transform 0.3s ease;
  }
}

// Responsive adjustments
@media (max-width: 768px) {
  .grid > div {
    margin-bottom: 1rem;
  }
}
</style>
