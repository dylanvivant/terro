<template>
  <div class="myoxygene-page min-h-screen">
    <!-- Hero Section -->
    <header
      class="bg-white p-5 xl:p-10 rounded-b-2xl md:rounded-b-[40px] flex flex-row justify-between items-center w-[calc(100%-them images: [ { src: '/images/illustrations/farmer.png', alt: 'Agriculteur dans les champs', height: 'h-80 md:h-96' }, { src: '/images/projects/myoxygene-dashboard.png', alt: 'Interface myOxygène dashboard', height: 'h-64 md:h-80' } ])] md:w-[50dvw] mx-auto"
    >
      <h1 class="text-2xl xl:text-h-1 font-bold text-primary-vert">easylo</h1>
      <div>
        <div class="flex items-center space-x-4">
          <!-- Desktop SVG -->
          <svg
            width="32"
            height="24"
            viewBox="0 0 32 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="text-primary-vert max-mdsize-6"
          >
            <rect
              x="2"
              y="4"
              width="28"
              height="16"
              rx="2"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
            />
            <rect x="13" y="20" width="6" height="2" fill="currentColor" />
            <rect x="8" y="22" width="16" height="2" rx="1" fill="currentColor" />
          </svg>

          <!-- Tablet SVG -->
          <svg
            width="20"
            height="28"
            viewBox="0 0 20 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="text-primary-vert max-mdsize-6"
          >
            <rect
              x="2"
              y="2"
              width="16"
              height="24"
              rx="3"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
            />
            <circle cx="10" cy="23" r="1.5" fill="currentColor" />
          </svg>

          <!-- Phone SVG -->
          <svg
            width="16"
            height="26"
            viewBox="0 0 16 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="text-primary-vert max-mdsize-6"
          >
            <rect
              x="2"
              y="2"
              width="12"
              height="22"
              rx="3"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
            />
            <rect x="6" y="4" width="4" height="1" rx="0.5" fill="currentColor" />
            <circle cx="8" cy="21" r="1" fill="currentColor" />
          </svg>
        </div>
      </div>
    </header>

    <!-- Image Carousel Section -->
    <section class="py-16 flex flex-col xl:flex-row justify-center max-xl:items-center gap-8">
      <div class="w-[240px] md:w-[615px]">
        <!-- Swiper Carousel -->
        <div class="relative">
          <swiper
            :modules="modules"
            :slides-per-view="1"
            :space-between="30"
            :autoplay="{
              delay: 30000,
              disableOnInteraction: false,
            }"
            :pagination="{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet custom-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active',
            }"
            :loop="true"
            class="myoxygene-swiper"
          >
            <swiper-slide v-for="(image, index) in carouselImages" :key="index">
              <div
                class="relative overflow-hidden bg-white rounded-[40px] md:rounded-[40px] sm:rounded-[20px]"
              >
                <img
                  :src="image.src"
                  :alt="image.alt"
                  class="w-full h-[500px] md:h-[600px] object-cover"
                />
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="w-[240px] md:w-[580px] flex flex-col items-center space-y-8">
        <div>
          <p class="text-p-small md:text-p-medium text-secondary-vert font-light">
            Pleine moisson, 6h du matin. Un chauffeur arrive sur le site avec 25 tonnes de blé.
            Personne n'est encore au bureau pour lui indiquer où décharger. Il se positionne devant
            le silo 3 — celui qu'il utilisait hier. Problème : le silo 3 a été rempli à 95% en fin
            de journée et est maintenant réservé à l'orge. Le temps de reculer, de trouver le bon
            emplacement, 20 minutes sont perdues. Derrière lui, trois autres camions attendent.
          </p>
          <p class="text-p-small md:text-p-medium text-secondary-vert font-bold">Chaque jour.</p>
          <p class="text-p-small md:text-p-medium text-secondary-vert font-light">
            Cette frustration nous révolte. En pleine période de récolte, les gestionnaires jonglent
            entre appels téléphoniques, tableaux blancs et leur mémoire. Les chauffeurs perdent du
            temps dans des files d'attente évitables. Tout cela à cause d'un manque d'information en
            temps réel. Ils méritent mieux qu'un chaos quotidien basé sur l'improvisation et le
            stress.
          </p>
          <h2 class="text-hSmall-5 md:text-h-4 text-primary-orange my-6 font-light">
            C'est pourquoi <span class="font-bold">Easylo</span> existe.
          </h2>
          <p class="text-p-small md:text-p-medium text-secondary-vert font-light">
            Nous croyons que l'information au bon moment, au bon endroit, élimine le chaos. Un
            chauffeur qui connaît sa destination avant même d'arriver, un gestionnaire qui visualise
            l'état de ses silos en temps réel : c'est la clé d'une logistique fluide. Moins
            d'incertitude = moins de stress = plus d'efficacité pour tous.
          </p>
        </div>
        <ButtonCalendly />
      </div>
    </section>

    <!-- Section with SectionComposant -->
    <SectionComposant
      :title="sectionData.title"
      :paragraphs="sectionData.paragraphs"
      :images="sectionData.images"
      :button-text="sectionData.buttonText"
      @button-click="handleSectionClick"
    />

    <!-- ce qu'on vous apporte -->
    <section class="py-20">
      <div class="mx-auto px-4">
        <div class="max-w-6xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-primary-vert mb-4">
            Ce qu'Easylo vous apporte concrètement
          </h2>
          <p class="text-lg md:text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
            Easylo, c'est la gestion de vos silos à portée de main.
          </p>
          <p class="text-lg md:text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            Une application mobile et web qui coordonne gestionnaires et chauffeurs en temps réel :
          </p>

          <!-- Grid des fonctionnalités -->
          <div
            class="md:grid flex flex-col justify-center items-center md:grid-cols-2 xl:grid-cols-3 gap-8 mb-8"
          >
            <ProductCard
              title="Suivi du remplissage en temps réel"
              description="Visualisation instantanée du % de capacité de chaque silo"
              image="/images/icons/easylo/remplissage.png"
              class="h-full"
            />
            <ProductCard
              title="Priorisation intelligente des silos"
              description="Affectation claire des camions selon disponibilité et type de grain"
              image="/images/icons/easylo/priorisation.png"
              class="h-full"
            />
            <ProductCard
              title="Interface chauffeur mobile"
              description="Le chauffeur sait où aller avant même d'arriver sur site"
              image="/images/icons/easylo/chauffeur.png"
              class="h-full"
            />
            <ProductCard
              title="Tableau de bord gestionnaire"
              description="Vision globale du site, anticipation des saturations"
              image="/images/icons/easylo/gestionnaire.png"
              class="h-full"
            />
            <ProductCard
              title="Flux optimisés"
              description="Rotation plus rapide, meilleure utilisation de la capacité"
              image="/images/icons/easylo/flux.png"
              class="h-full"
            />
            <ProductCard
              title="Historique des mouvements"
              description="Traçabilité complète de toutes les opérations de chargement"
              image="/images/icons/easylo/historique.png"
              class="h-full"
            />
            <ProductCard
              title="Autonomie des chauffeurs"
              description="Moins d'appels, moins de sollicitations du gestionnaire"
              image="/images/icons/easylo/chauffeurs.png"
              class="h-full"
            />
            <!-- Notre promesse comme une ProductCard -->
            <div
              class="bg-orange-50 col-span-2 rounded-3xl shadow-lg p-6 md:p-12 text-start xl:hover:shadow-xl xl:hover:scale-105 transition-all duration-300 cursor-pointer h-full flex flex-col"
            >
              <div class="flex flex-col justify-between h-full">
                <h3 class="text-p-large md:text-h-4 font-bold text-primary-orange mb-4">
                  Notre promesse
                </h3>
                <p class="text-sm md:text-p-large text-primary-vert mb-4 leading-relaxed">
                  Avec Easylo, notre chauffeur arrive désormais serein. En un coup d'œil sur son
                  smartphone, il sait exactement quel silo utiliser. Le gestionnaire, lui, pilote 20
                  rotations par jour sans décrocher son téléphone. La moisson devient fluide.
                </p>
                <p class="text-sm md:text-p-large text-primary-orange font-bold mb-3">
                  C'est ça, la logistique de demain : coordonnée, mais simple.
                </p>
                <p class="text-sm md:text-p-large text-primary-orange font-bold mb-3">
                  Efficace, mais accessible. Temps réel, mais conçu pour être utilisé en 30
                  secondes.
                </p>
                <p class="text-sm md:text-p-large text-primary-vert italic">
                  Parce que ceux qui nourrissent le monde méritent une logistique qui ne les
                  ralentit pas, mais qui les propulse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <EndSection />
  </div>
  <p class="text-center text-[10px] md:text-p-medium text-gray-800">
    © 2025 Terr'O. Tous droits réservés. Fait avec ❤️ pour nos agriculteurs.
  </p>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import ButtonCalendly from '@/components/button/ButtonCalendly.vue'
import ProductCard from '@/components/cards/ProductCard.vue'
import EndSection from '@/components/section/EndSection.vue'
import SectionComposant from '@/components/section/SectionComposant.vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

// Swiper modules
const modules = [Autoplay, Pagination]

// Carousel images data
const carouselImages = ref([
  {
    src: '/images/projects/easylo/Shot.png',
    alt: 'Application mobile easylo',
  },
  {
    src: '/images/projects/easylo/Shot-1.png',
    alt: 'Application mobile easylo',
  },
  {
    src: '/images/projects/easylo/Shot-2.png',
    alt: 'Application mobile easylo',
  },
  {
    src: '/images/projects/easylo/Shot-3.png',
    alt: 'Application mobile easylo',
  },
  {
    src: '/images/projects/easylo/Shot-4.png',
    alt: 'Application mobile easylo',
  },

  {
    src: '/images/projects/easylo/Shot-5.png',
    alt: 'Application mobile easylo',
  },
])

// Section component data
const sectionData = ref({
  title: 'Comment nous révolutionnons la gestion des silos',
  buttonText: 'VOIR PLUS',
  paragraphs: [
    `Chez <strong>Terr'O</strong>, nous refusons la complexité inutile. <strong>Easylo</strong> n'est pas une énième solution logistique générique. C'est un outil pensé pour le terrain : une vue gestionnaire pour piloter, une vue chauffeur pour exécuter — chacun a exactement l'information dont il a besoin.`,
    `Notre approche ? <strong>L'information au bon moment, au bon endroit</strong>. Le chauffeur reçoit sa destination sur son smartphone avant même d'arriver. Le gestionnaire visualise ses silos en temps réel. Nous accompagnons chaque utilisateur personnellement, parce qu'un outil n'est utile que s'il est adopté. Conçu pour être utilisé en 30 secondes depuis la cabine d'un camion, pas devant un ordinateur.`,
  ],
  images: [
    {
      src: '/images/silo1.jpg',
      alt: 'Champs agricoles au coucher du soleil',
      height: 'h-[84px] md:h-96',
    },
    {
      src: '/images/silo2.jpg',
      alt: 'Tracteur dans les champs',
      height: 'h-[184px] md:h-96',
    },
  ],
})

// Methods
const handleSectionClick = () => {
  console.log('Section button clicked!')
  // Ajouter ici la logique pour le clic sur le bouton
}
</script>

<style scoped>
.myoxygene-page {
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

/* Swiper carousel styles */
.myoxygene-swiper {
  padding-bottom: 60px;
}

.myoxygene-swiper :deep(.swiper-slide) {
  transition: transform 0.3s ease;
}

.myoxygene-swiper :deep(.swiper-slide:hover) {
  transform: translateY(-5px);
}

/* Custom pagination dots */
.myoxygene-swiper :deep(.swiper-pagination) {
  bottom: 20px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: auto;
  display: flex;
  justify-content: center;
  gap: 12px;
}

.myoxygene-swiper :deep(.custom-bullet) {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #4a7c5921;
  opacity: 1;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.myoxygene-swiper :deep(.custom-bullet-active) {
  background-color: #2d5930;
  border-color: white;
  transform: scale(1.2);
}

.myoxygene-swiper :deep(.custom-bullet:hover) {
  background-color: #2d5930;
  transform: scale(1.1);
}

/* Responsive border radius */
@media (min-width: 768px) {
  .myoxygene-swiper :deep(.swiper-slide > div) {
    border-radius: 40px;
  }
}

@media (max-width: 767px) {
  .myoxygene-swiper :deep(.swiper-slide > div) {
    border-radius: 20px;
  }
}
</style>
