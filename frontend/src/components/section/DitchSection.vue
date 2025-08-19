<template>
  <section class="w-full h-full mb-32">
    <div class="container lg:w-full md:w-[480px] w-[290px] mx-auto max-w-7xl">
      <!-- Titre principal et sous-titre -->
      <div class="text-center mb-16 lg:mb-20 animate-fade-in-up">
        <h2
          class="text-hSmall-2 md:text-h-3 lg:text-h-1 font-bold text-primary-vert mb-6 animate-fade-in-up animation-delay-200"
        >
          Le fossé numérique agricole
        </h2>
        <p
          class="text-p-medium lg:text-h-4 text-primary-vert max-w-7xl mx-auto animate-fade-in-up animation-delay-400"
        >
          Pendant que le monde avance à la vitesse de la lumière grâce au numérique, nos
          agriculteurs - ces héros du quotidien - restent isolés des innovations qui pourraient
          transformer leur vie.
        </p>
      </div>

      <!-- Contenu principal responsive -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16 items-center">
        <!-- Section texte avec statistiques -->
        <div class="order-2 lg:order-1 animate-fade-in-left animation-delay-600">
          <div class="bg-primary-vertClair/20 rounded-2xl p-6 lg:p-10">
            <h3
              class="text-hSmall-5 lg:text-h-5 font-bold text-primary-vert mb-6 animate-fade-in-up animation-delay-800"
            >
              Une injustice qui doit cesser
            </h3>

            <p
              class="text-p-medium lg:text-p-large text-gray-700 mb-8 leading-relaxed animate-fade-in-up animation-delay-1000"
            >
              Cette situation n'est pas acceptable. Ceux qui nous nourrissent méritent d'avoir accès
              aux mêmes opportunités technologiques que les autres secteurs.
            </p>

            <!-- Liste des statistiques -->
            <ul class="space-y-4">
              <li class="flex items-start animate-fade-in-up animation-delay-1200">
                <div class="w-2 h-2 bg-primary-vert rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <span class="text-p-medium lg:text-p-large text-gray-700">
                  <strong>67%</strong> des agriculteurs n'ont pas accès aux outils numériques
                  modernes
                </span>
              </li>
              <li class="flex items-start animate-fade-in-up animation-delay-1400">
                <div class="w-2 h-2 bg-primary-vert rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <span class="text-p-medium lg:text-p-large text-gray-700">
                  <strong>45%</strong> travaillent plus de 60h/semaine sans optimisation
                </span>
              </li>
              <li class="flex items-start animate-fade-in-up animation-delay-1600">
                <div class="w-2 h-2 bg-primary-vert rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <span class="text-p-medium lg:text-p-large text-gray-700">
                  <strong>1 exploitation</strong> ferme toutes les 3 heures en France
                </span>
              </li>
              <li class="flex items-start animate-fade-in-up animation-delay-1800">
                <div class="w-2 h-2 bg-primary-vert rounded-full mt-3 mr-4 flex-shrink-0"></div>
                <span class="text-p-medium lg:text-p-large text-gray-700">
                  Les revenus agricoles stagnent depuis <strong>20 ans</strong>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Section illustration -->
        <div class="order-1 lg:order-2 relative animate-fade-in-right animation-delay-600">
          <div
            class="relative rounded-2xl overflow-hidden max-h-[354px] md:max-h-[500px] w-[256px] md:w-[480px] lg:w-[582px] flex items-center justify-center animate-scale-in animation-delay-1000"
          >
            <img
              src="/public/images/illustrations/farmer.png"
              alt="Agriculteur illustrant le fossé numérique"
              class="object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Aucune logique nécessaire pour cette section statique
</script>

<style lang="scss" scoped>
/* Animations de base */
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

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/* Classes d'animation */
.animate-fade-in-up {
  animation: fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.animate-fade-in-left {
  animation: fadeInLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.animate-fade-in-right {
  animation: fadeInRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.animate-scale-in {
  animation: scaleIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Délais d'animation */
.animation-delay-200 {
  animation-delay: 200ms;
}

.animation-delay-300 {
  animation-delay: 300ms;
}

.animation-delay-400 {
  animation-delay: 400ms;
}

.animation-delay-600 {
  animation-delay: 600ms;
}

.animation-delay-800 {
  animation-delay: 800ms;
}

.animation-delay-1000 {
  animation-delay: 1000ms;
}

.animation-delay-1200 {
  animation-delay: 1200ms;
}

.animation-delay-1400 {
  animation-delay: 1400ms;
}

.animation-delay-1600 {
  animation-delay: 1600ms;
}

.animation-delay-1800 {
  animation-delay: 1800ms;
}

/* Responsive adjustments pour les très petits écrans */
@media (max-width: 640px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  /* Réduction des délais sur mobile pour une meilleure UX */
  .animation-delay-800,
  .animation-delay-1000,
  .animation-delay-1200,
  .animation-delay-1400,
  .animation-delay-1600,
  .animation-delay-1800 {
    animation-delay: 200ms;
  }
}

/* Animation au hover pour l'image */
.animate-scale-in:hover {
  transform: scale(1.02);
  transition: transform 0.3s ease-in-out;
}

/* Préférence utilisateur pour le mouvement réduit */
@media (prefers-reduced-motion: reduce) {
  .animate-fade-in-up,
  .animate-fade-in-left,
  .animate-fade-in-right,
  .animate-scale-in {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
</style>
