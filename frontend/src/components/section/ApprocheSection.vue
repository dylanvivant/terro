<template>
  <section class="w-full flex flex-col mb-32">
    <!-- Titre principal -->
    <div class="flex flex-col items-center justify-center mb-12 md:mb-16 lg:mb-20">
      <h2
        class="text-primary-orange text-hSmall-2 md:text-h-3 lg:text-h-1 font-bold text-center mb-4"
      >
        Notre approche révolutionnaire
      </h2>
      <p
        class="text-primary-orange text-p-medium lg:text-h-4 font-light text-center max-w-7xl px-4"
      >
        Nous croyons en une technologie inclusive, pensée pour et avec les agriculteurs
      </p>
    </div>

    <!-- Grille des solutions -->
    <div class="flex flex-col items-center justify-center px-4 md:px-8 lg:px-12">
      <!-- Version desktop/tablet - 3 items top, 1 centered bottom -->
      <div class="hidden md:flex md:flex-col gap-6 lg:gap-8 max-w-6xl w-full">
        <!-- Première ligne - 3 items -->
        <div class="grid grid-cols-3 gap-6 lg:gap-8">
          <!-- Simplicité absolue -->
          <div
            class="bg-[#A0C4A7]/20 rounded-2xl p-6 lg:p-8 flex flex-col items-center text-center"
          >
            <div
              class="w-16 h-16 lg:w-20 lg:h-20 bg-secondary-vert rounded-full flex items-center justify-center mb-4 lg:mb-6"
            >
              <span class="text-2xl lg:text-3xl">🎯</span>
            </div>
            <h3 class="text-primary-vert font-bold text-hSmall-4 lg:text-hSmall-3 mb-3">
              Simplicité absolue
            </h3>
            <p class="text-primary-vert font-light text-p-medium lg:text-p-large leading-relaxed">
              Des interfaces intuitives, sans jargon technique. La technologie doit simplifier la
              vie, pas la compliquer.
            </p>
          </div>

          <!-- Conçu terrain -->
          <div
            class="bg-[#A0C4A7]/20 rounded-2xl p-6 lg:p-8 flex flex-col items-center text-center"
          >
            <div
              class="w-16 h-16 lg:w-20 lg:h-20 bg-secondary-vert rounded-full flex items-center justify-center mb-4 lg:mb-6"
            >
              <span class="text-2xl lg:text-3xl">🚜</span>
            </div>
            <h3 class="text-primary-vert font-bold text-hSmall-4 lg:text-hSmall-3 mb-3">
              Conçu terrain
            </h3>
            <p class="text-primary-vert font-light text-p-medium lg:text-p-large leading-relaxed">
              Développé avec et pour les agriculteurs. Nous comprenons vos contraintes et vos
              besoins réels.
            </p>
          </div>

          <!-- Prix juste -->
          <div
            class="bg-[#A0C4A7]/20 rounded-2xl p-6 lg:p-8 flex flex-col items-center text-center"
          >
            <div
              class="w-16 h-16 lg:w-20 lg:h-20 bg-secondary-vert rounded-full flex items-center justify-center mb-4 lg:mb-6"
            >
              <span class="text-2xl lg:text-3xl">💰</span>
            </div>
            <h3 class="text-primary-vert font-bold text-hSmall-4 lg:text-hSmall-3 mb-3">
              Prix juste
            </h3>
            <p class="text-primary-vert font-light text-p-medium lg:text-p-large leading-relaxed">
              Une technologie accessible à toutes les exploitations, des plus petites aux plus
              grandes.
            </p>
          </div>
        </div>

        <!-- Deuxième ligne - 1 item centré -->
        <div class="grid grid-cols-3 gap-6 lg:gap-8">
          <div></div>
          <!-- Spacer -->
          <!-- Accompagnement total -->
          <div
            class="bg-[#A0C4A7]/20 rounded-2xl p-6 lg:p-8 flex flex-col items-center text-center"
          >
            <div
              class="w-16 h-16 lg:w-20 lg:h-20 bg-secondary-vert rounded-full flex items-center justify-center mb-4 lg:mb-6"
            >
              <span class="text-2xl lg:text-3xl">🤝</span>
            </div>
            <h3 class="text-primary-vert font-bold text-hSmall-4 lg:text-hSmall-3 mb-3">
              Accompagnement total
            </h3>
            <p class="text-primary-vert font-light text-p-medium lg:text-p-large leading-relaxed">
              Formation, support et maintenance inclus. Vous n'êtes jamais seul dans cette
              transition digitale.
            </p>
          </div>
          <div></div>
          <!-- Spacer -->
        </div>
      </div>

      <!-- Version mobile - colonne unique -->
      <div class="flex md:hidden flex-col gap-6 max-w-sm w-full">
        <!-- Simplicité absolue -->
        <div class="bg-[#A0C4A7]/20 rounded-2xl p-6 flex flex-col items-center text-center">
          <div
            class="w-16 h-16 bg-secondary-vert rounded-full flex items-center justify-center mb-4"
          >
            <span class="text-2xl">🎯</span>
          </div>
          <h3 class="text-primary-vert font-bold text-hSmall-4 mb-3">Simplicité absolue</h3>
          <p class="text-primary-vert font-light text-p-medium leading-relaxed">
            Des interfaces intuitives, sans jargon technique. La technologie doit simplifier la vie,
            pas la compliquer.
          </p>
        </div>

        <!-- Conçu terrain -->
        <div class="bg-[#A0C4A7]/20 rounded-2xl p-6 flex flex-col items-center text-center">
          <div
            class="w-16 h-16 bg-secondary-vert rounded-full flex items-center justify-center mb-4"
          >
            <span class="text-2xl">🚜</span>
          </div>
          <h3 class="text-primary-vert font-bold text-hSmall-4 mb-3">Conçu terrain</h3>
          <p class="text-primary-vert font-light text-p-medium leading-relaxed">
            Développé avec et pour les agriculteurs. Nous comprenons vos contraintes et vos besoins
            réels.
          </p>
        </div>

        <!-- Prix juste -->
        <div class="bg-[#A0C4A7]/20 rounded-2xl p-6 flex flex-col items-center text-center">
          <div
            class="w-16 h-16 bg-secondary-vert rounded-full flex items-center justify-center mb-4"
          >
            <span class="text-2xl">💰</span>
          </div>
          <h3 class="text-primary-vert font-bold text-hSmall-4 mb-3">Prix juste</h3>
          <p class="text-primary-vert font-light text-p-medium leading-relaxed">
            Une technologie accessible à toutes les exploitations, des plus petites aux plus
            grandes.
          </p>
        </div>

        <!-- Accompagnement total -->
        <div class="bg-[#A0C4A7]/20 rounded-2xl p-6 flex flex-col items-center text-center">
          <div
            class="w-16 h-16 bg-secondary-vert rounded-full flex items-center justify-center mb-4"
          >
            <span class="text-2xl">🤝</span>
          </div>
          <h3 class="text-primary-vert font-bold text-hSmall-4 mb-3">Accompagnement total</h3>
          <p class="text-primary-vert font-light text-p-medium leading-relaxed">
            Formation, support et maintenance inclus. Vous n'êtes jamais seul dans cette transition
            digitale.
          </p>
        </div>
      </div>
    </div>

    <!-- Citation -->
    <div class="flex flex-col w-full items-center justify-center mt-12 md:mt-16 lg:mt-20 px-4">
      <div class="bg-secondary-vert rounded-2xl p-6 md:p-8 lg:p-10 max-w-7xl w-full">
        <blockquote class="text-primary-blanc text-center">
          <p class="text-p-large md:text-h-5 font-light manifeste leading-relaxed mb-4">
            "La technologie ne doit pas être un privilège réservé à quelques-uns, mais un droit
            accessible à ceux qui nourrissent le monde."
          </p>
          <footer class="text-primary-blanc font-bold text-p-medium md:text-p-large">
            — Manifeste Terr'O
          </footer>
        </blockquote>
      </div>
    </div>
  </section>
</template>

<script setup>
// Aucune logique particulière nécessaire pour cette section statique
</script>

<style scoped>
.manifeste {
  font-family: 'Inria Serif', serif;
  font-style: italic;
}
</style>
