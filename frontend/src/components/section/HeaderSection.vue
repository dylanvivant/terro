<template>
  <section
    class="bg-[#E6EDE9] flex xl:hidden flex-col rounded-[20px] lg:rounded-[30px] mx-4 mt-18 md:mt-24 lg:mx-12 h-[295px] w-[295px] md:w-[706px] md:h-[706px] relative overflow-hidden"
  >
    <div class="flex flex-col md:flex-row items-start mx-5 mt-5 md:mx-12 md:mt-12">
      <div class="relative flex-shrink-0 w-[255px] md:w-[611px] h-[220px] md:h-[524px]">
        <div class="relative">
          <img
            class="object-cover rounded-[20px] md:rounded-[32px] w-[255px] md:w-full h-[220px] md:h-[524px]"
            src="/public/images/agriculteur.jpg"
            alt="photo d'agriculteur"
          />
          <div
            class="absolute top-[20%] md:top-[30%] flex flex-col items-center inset-0 z-50 rounded-[32px] h-[300px] md:h-[524px]"
          >
            <h1
              class="w-[232px] md:w-[512px] text-xl md:text-hSmall-2 font-bold text-center text-primary-blanc leading-tight"
            >
              Les agriculteurs nourrissent l'humanité.
            </h1>
            <h2
              class="w-[202px] md:w-[484px] text-base md:text-hSmall-3 font-bold text-center text-primary-blanc leading-tight"
            >
              Ils méritent de travailler avec dignité.
            </h2>
          </div>
          <div
            class="absolute inset-0 bg-gradient-to-b from-primary-vert to-secondary-vert opacity-50 z-10 rounded-[20px] md:rounded-[32px]"
          ></div>
        </div>

        <div
          class="absolute -left-3 -bottom-3 bg-[#E6EDE9] blur-sm w-[calc(100%+24px)] h-[60px] md:h-[80px] xl:h-[100px] 2xl:h-[120px] 3xl:h-[140px] z-10"
        ></div>
      </div>
    </div>

    <div
      class="absolute bottom-0 z-50 left-0 right-0 bg-gradient-to-t from-[#E6EDE9] via-[#E6EDE9]/90 to-transparent pt-8 pb-6 md:pb-8 xl:pb-12"
    >
      <div class="flex flex-col items-center justify-center space-y-4 md:space-y-6 px-4 md:px-8">
        <div class="flex flex-col items-center justify-start flex-1 space-y-6 max-w-[600px]">
          <p class="text-p-meduim md:text-h-5 text-primary-vert font-regular text-center l">
            chez <span class="font-bold">Terr'O</span>
            Nous rendons la technologie accessible aux vrais héros de notre alimentation
          </p>
        </div>
      </div>
    </div>
  </section>
  <div class="flex xl:hidden justify-center mt-5 md:mt-14">
    <ButtonPrimary />
  </div>
  <section
    class="bg-[#E6EDE9] xl:flex hidden flex-col rounded-[30px] mx-4 mt-12 min-h-[620px] xl:w-[1300px] relative overflow-hidden"
  >
    <div class="flex flex-col lg:flex-row items-start gap-12 p-12">
      <div class="relative flex-shrink-0 w-[611px]">
        <div class="relative">
          <img
            class="object-cover rounded-[32px] w-full h-[524px]"
            src="/public/images/agriculteur.jpg"
            alt="photo d'agriculteur"
          />
          <div
            class="absolute inset-0 bg-gradient-to-b from-primary-vert to-secondary-vert opacity-50 z-10 rounded-[32px]"
          ></div>
        </div>

        <div
          class="absolute -left-3 -bottom-1 bg-[#E6EDE9] blur-sm w-[calc(100%+32px)] h-[120px] z-10"
        ></div>
      </div>

      <div
        class="flex flex-col items-center justify-start flex-1 space-y-6 lg:space-y-8 lg:max-w-[450px]"
      >
        <div class="flex flex-col items-start justify-around h-[250px]">
          <h3 class="text-h-2 lg:text-h-2 text-primary-vert">
            <span class="font-light">chez</span> <span class="font-bold">Terr'O</span>
          </h3>
          <p
            class="text-h-5 lg:text-h-5 xl:text-h-5 2xl:text-h-5 3xl:text-h-5 4xl:text-h-5 text-primary-vert font-regular leading-relaxed"
          >
            Nous rendons la technologie accessible aux vrais héros de notre alimentation
          </p>
        </div>
        <ButtonPrimary />
      </div>
    </div>

    <div
      class="absolute bottom-0 z-50 left-0 right-0 bg-gradient-to-t from-[#E6EDE9] via-[#E6EDE9]/90 to-transparent pt-8 pb-12"
    >
      <div class="flex flex-col items-center justify-center space-y-4 lg:space-y-6 px-8">
        <h1
          class="text-2xl lg:text-3xl xl:text-h-1 font-bold text-center text-primary-vert leading-tight"
        >
          Les agriculteurs nourrissent l'humanité.
        </h1>
        <h2
          class="text-xl lg:text-2xl xl:text-h-3 2xl:text-h-4 3xl:text-h-5 4xl:text-h-6 font-bold text-center text-primary-vert"
        >
          Ils méritent de travailler avec dignité.
        </h2>
      </div>
    </div>
  </section>
</template>

<script setup>
import ButtonPrimary from '../button/ButtonPrimary.vue'
</script>

<style lang="scss" scoped>
// Responsive breakpoints personnalisés
@media (min-width: 1920px) {
  .text-3xl {
    font-size: 3.5rem;
  }

  .text-6xl {
    font-size: 4.5rem;
  }
}

@media (min-width: 2560px) {
  .text-3xl {
    font-size: 4rem;
  }

  .text-6xl {
    font-size: 5.5rem;
  }
}

// Assurer que l'image maintient ses proportions
img {
  aspect-ratio: 1.15 / 1;
  object-fit: cover;
}

// Améliorer la lisibilité sur les très grands écrans
@media (min-width: 1536px) {
  section {
    max-height: 85vh;
  }
}

// Gestion spéciale pour les écrans ultra-larges
@media (min-width: 3840px) {
  section {
    margin-left: 10vw;
    margin-right: 10vw;
  }
}
</style>
