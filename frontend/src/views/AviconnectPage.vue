<template>
  <div class="myoxygene-page min-h-screen">
    <!-- Hero Section -->
    <header
      class="bg-white p-5 xl:p-10 rounded-b-2xl md:rounded-b-[40px] flex flex-row justify-between items-center w-[calc(100%-them images: [ { src: '/images/illustrations/farmer.png', alt: 'Agriculteur dans les champs', height: 'h-80 md:h-96' }, { src: '/images/projects/myoxygene-dashboard.png', alt: 'Interface myOxygène dashboard', height: 'h-64 md:h-80' } ])] md:w-[50dvw] mx-auto"
    >
      <h1 class="text-2xl xl:text-h-1 font-bold text-primary-vert">Avi Connect</h1>
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
            Imaginez un éleveur gérant 3 bâtiments de 15 000 poules pondeuses chacun. Chaque matin,
            il relève manuellement les données de ponte, note la mortalité sur un carnet, vérifie la
            consommation d'eau et d'aliments. Quand son technicien passe en visite, il doit
            reconstituer l'historique des 15 derniers jours à partir de notes éparses. Résultat :
          </p>
          <p class="text-p-small md:text-p-medium text-secondary-vert font-bold">
            Des anomalies détectées trop tard, des échanges imprécis, et cette sensation permanente
            de "courir après l'information" plutôt que de piloter sereinement son élevage.
          </p>
          <p class="text-p-small md:text-p-medium text-secondary-vert font-light">
            Cette frustration nous révolte. Les éleveurs méritent mieux que des données dispersées
            entre carnets papier et fichiers Excel. Ils méritent de se concentrer sur leur métier —
            le soin de leurs animaux — plutôt que sur de la paperasse administrative. Ils méritent
            une technologie qui leur redonne la maîtrise de leur exploitation.
          </p>
          <h2 class="text-hSmall-5 md:text-h-5 text-primary-orange my-6 font-light">
            C'est pourquoi <span class="font-bold">Avi Connect</span> existe.
          </h2>
          <p class="text-p-small md:text-p-medium text-secondary-vert font-light">
            Nous croyons que la simplicité libère l'expertise. Un éleveur qui accède instantanément
            à ses données, qui visualise clairement l'état de ses lots et qui peut échanger
            efficacement avec son technicien, retrouve la sérénité et la performance.
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
            Ce qu'Avi Connect vous apporte concrètement
          </h2>
          <p class="text-lg md:text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
            Avi Connect, c'est le pilotage de votre élevage à portée de main.
          </p>
          <p class="text-lg md:text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            Une application mobile et web qui centralise toutes vos données d'élevage :
          </p>

          <!-- Grid des fonctionnalités -->
          <div
            class="md:grid flex flex-col justify-center items-center md:grid-cols-2 xl:grid-cols-3 gap-8 mb-8"
          >
            <ProductCard
              title="Suivi des lots en temps réel"
              description="Historique complet et traçabilité de chaque bâtiment"
              image="/images/icons/aviconnect/lots.png"
              class="h-full"
            />
            <ProductCard
              title="Tableaux de bord statistiques"
              description="% de ponte, mortalité, consommation — en un coup d'œil"
              image="/images/icons/aviconnect/dashboard.png"
              class="h-full"
            />
            <ProductCard
              title="Vue multi-bâtiments"
              description="Comparaison et gestion centralisée de votre exploitation"
              image="/images/icons/aviconnect/batiment.png"
              class="h-full"
            />
            <ProductCard
              title="Saisie simplifiée"
              description="Fini les doubles saisies et les carnets papier"
              image="/images/icons/aviconnect/simple.png"
              class="h-full"
            />
            <ProductCard
              title="Partage de données"
              description="Collaboration fluide et visites préparées avec données partagées"
              image="/images/icons/aviconnect/partage.png"
              class="h-full"
            />
            <ProductCard
              title="Détection des anomalies"
              description="Visualisation des tendances et alertes précoces"
              image="/images/icons/aviconnect/anomalies.png"
              class="h-full"
            />
            <ProductCard
              title="Analyses de performance"
              description="Décisions éclairées basées sur des données fiables"
              image="/images/icons/aviconnect/performance.png"
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
                  Avec Avi Connect, notre éleveur pilote maintenant sereinement ses 3 bâtiments. En
                  quelques minutes sur son smartphone, il visualise les performances de chaque lot,
                  détecte les anomalies et prépare efficacement la visite de son technicien.
                </p>
                <p class="text-sm md:text-p-large text-primary-orange font-bold mb-3">
                  C'est ça, l'élevage de demain : connecté, mais collaboratif.
                </p>
                <p class="text-sm md:text-p-large text-primary-orange font-bold mb-3">
                  Performant, mais simple. Innovant, mais conçu par et pour le terrain.
                </p>
                <p class="text-sm md:text-p-large text-primary-vert italic">
                  Parce que ceux qui prennent soin de leurs animaux méritent une technologie qui les
                  accompagne vraiment.
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
    src: '/images/projects/aviconnect/Shot.png',
    alt: 'Application mobile aviconnect',
  },
  {
    src: '/images/projects/aviconnect/Shot-1.png',
    alt: 'Application mobile aviconnect',
  },
  {
    src: '/images/projects/aviconnect/Shot-2.png',
    alt: 'Application mobile aviconnect',
  },
  {
    src: '/images/projects/aviconnect/Shot-3.png',
    alt: 'Application mobile aviconnect',
  },
  {
    src: '/images/projects/aviconnect/Shot-4.png',
    alt: 'Application mobile aviconnect',
  },

  {
    src: '/images/projects/aviconnect/Shot-6.png',
    alt: 'Application mobile aviconnect',
  },
  {
    src: '/images/projects/aviconnect/Shot-7.png',
    alt: 'Application mobile aviconnect',
  },
  {
    src: '/images/projects/aviconnect/Shot-8.png',
    alt: 'Application mobile aviconnect',
  },
  {
    src: '/images/projects/aviconnect/Shot-9.png',
    alt: 'Application mobile aviconnect',
  },
  {
    src: '/images/projects/aviconnect/Shot-10.png',
    alt: 'Application mobile aviconnect',
  },
  {
    src: '/images/projects/aviconnect/Shot-11.png',
    alt: 'Application mobile aviconnect',
  },
])

// Section component data
const sectionData = ref({
  title: 'Comment nous révolutionnons le pilotage des élevages',
  buttonText: 'VOIR PLUS',
  paragraphs: [
    `Chez <strong>Terr'O</strong>, nous refusons la complexité inutile. <strong>Avi Connect</strong> n'est pas une énième solution technique déconnectée du terrain. C'est un outil développé en co-construction avec les acteurs de la filière avicole, pour répondre aux vrais besoins du métier.`,
    `Notre approche ? <strong>La collaboration au cœur de la performance</strong>. Nous connectons l'écosystème complet — éleveur, technicien — autour des mêmes données en temps réel. Nous accompagnons chaque utilisateur individuellement, parce qu'une bonne technologie doit faciliter le travail, pas le complexifier. Une meilleure visibilité = de meilleures décisions = moins de stress et plus de performance.`,
  ],
  images: [
    {
      src: '/images/poule1.jpg',
      alt: 'Champs agricoles au coucher du soleil',
      height: 'h-[84px] md:h-96',
    },
    {
      src: '/images/poule2.jpg',
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
