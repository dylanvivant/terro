<template>
  <section
    id="end-section"
    class="w-full h-full bg-primary-vert text-white py-8 md:py-18 xl:py-20 mb-32"
  >
    <div
      class="container mx-auto flex flex-col gap-8 justify-center items-center text-center animate-fade-in-up"
    >
      <h2 class="text-hSmall-4 md:text-h-3 font-bold">Prêt à transformer votre agriculture ?</h2>
      <p class="text-p-medium md:text-hSmall-4 font-light leading-relaxed">
        Rejoignez les centaines d'agriculteurs qui ont déjà choisi Terr'O pour moderniser leur
        exploitation. Discutons ensemble de vos besoins et trouvons la solution qui vous correspond.
      </p>
      <ButtonCalendly
        :calendlyUrl="'https://calendly.com/votre-lien-calendly'"
        :openInNewTab="true"
      />
      <div>
        <p class="text-p-small md:text-p-large text-primary-blanc">xx.xx.xx.xx.xx</p>
        <p class="text-p-small md:text-p-large text-primary-blanc">contact@terro.fr</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import ButtonCalendly from '../button/ButtonCalendly.vue'
</script>
<style lang="scss" scoped></style>
