<template>
  <div class="myoxygene-page min-h-screen">
    <!-- Hero Section -->
    <header
      class="bg-white p-5 xl:p-10 rounded-b-2xl md:rounded-b-[40px] flex flex-row justify-between items-center w-[calc(100%-them images: [ { src: '/images/illustrations/farmer.png', alt: 'Agriculteur dans les champs', height: 'h-80 md:h-96' }, { src: '/images/projects/myoxygene-dashboard.png', alt: 'Interface myOxygène dashboard', height: 'h-64 md:h-80' } ])] md:w-[50dvw] mx-auto"
    >
      <h1 class="text-2xl xl:text-h-1 font-bold text-primary-vert">Kapflow</h1>
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
            Imaginez Pierre, agriculteur dans la Beauce. À 6h du matin, il est déjà dans ses champs.
            À 19h, après une journée épuisante, il doit encore passer des heures au téléphone avec
            sa coopérative : vérifier ses comptes, suivre ses livraisons, chercher des documents
            perdus dans des classeurs poussiéreux. Pierre rate le dîner avec sa famille.
          </p>
          <p class="text-p-small md:text-p-medium text-secondary-vert font-bold">Encore.</p>
          <p class="text-p-small md:text-p-medium text-secondary-vert font-light">
            Cette réalité nous révolte. Ceux qui nous nourrissent chaque jour méritent mieux que des
            tâches administratives chronophages qui les éloignent de leur passion et de leur
            famille. Ils méritent une technologie qui leur redonne du temps plutôt que de leur en
            prendre.
          </p>
          <h2 class="text-hSmall-5 md:text-h-4 text-primary-orange my-6 font-light">
            C’est pourquoi <span class="font-bold">myOxyane</span> existe.
          </h2>
          <p class="text-p-small md:text-p-medium text-secondary-vert font-light">
            Nous croyons que chaque minute gagnée sur l'administratif est une minute de plus aux
            champs, en famille, ou pour développer son exploitation.
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
            Ce que myOxyane vous apporte concrètement
          </h2>
          <p class="text-lg md:text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
            myOxyane, c'est votre coopérative dans votre poche.
          </p>
          <p class="text-lg md:text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            Une application mobile qui centralise tout ce dont vous avez besoin :
          </p>

          <!-- Grid des fonctionnalités -->
          <div
            class="md:grid flex flex-col justify-center items-center md:grid-cols-2 xl:grid-cols-3 gap-8 mb-8"
          >
            <ProductCard
              title="Vos comptes en temps réel"
              description="Fini les appels pour connaître votre situation"
              image="/images/icons/comptes.png"
              class="h-full"
            />
            <ProductCard
              title="Le suivi de vos apports"
              description="Visualisez vos livraisons et tonnages en un coup d'œil"
              image="/images/icons/apport.png"
              class="h-full"
            />
            <ProductCard
              title="La bourse aux grains"
              description="Négociez au meilleur moment, depuis votre tracteur"
              image="/images/icons/bourse.png"
              class="h-full"
            />
            <ProductCard
              title="Vos commandes"
              description="Consultez l'historique et le statut de vos dernières commandes"
              image="/images/icons/commande.png"
              class="h-full"
            />
            <ProductCard
              title="Vos documents"
              description="Stockage sécurisé, accessible partout, même sans réseau"
              image="/images/icons/document.png"
              class="h-full"
            />
            <ProductCard
              title="Vos contacts"
              description="Tous vos interlocuteurs coop à portée de main"
              image="/images/icons/contact.png"
              class="h-full"
            />
            <ProductCard
              title="Le suivi de collecte"
              description="Bon par bon, tonne par tonne, tout est tracé"
              image="/images/icons/suivi.png"
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
                  Avec myOxyane, Pierre rentre maintenant à 19h et dîne avec sa famille. En 5
                  minutes sur son smartphone, il a vérifié ses comptes, suivi ses livraisons et
                  consulté la bourse aux grains.
                </p>
                <p class="text-sm md:text-p-large text-primary-orange font-bold mb-3">
                  C'est ça, l'agriculture de demain : connectée, mais humaine.
                </p>
                <p class="text-sm md:text-p-large text-primary-orange font-bold mb-3">
                  Efficace, mais simple. Innovante, mais accessible à tous.
                </p>
                <p class="text-sm md:text-p-large text-primary-vert italic">
                  Parce que ceux qui font vivre le monde méritent une technologie qui leur facilite
                  la vie.
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
    src: '/images/projects/myoxygene-dashboard.png',
    alt: 'Dashboard myOxygène',
  },
  {
    src: '/images/projects/myoxygene-mobile.png',
    alt: 'Application mobile myOxygène',
  },
])

// Section component data
const sectionData = ref({
  title: 'Comment nous révolutionnons le quotidien agricole',
  buttonText: 'VOIR PLUS',
  paragraphs: [
    `Chez <strong>Terr'O</strong>, nous refusons la complexité inutile. <strong>myOxyane</strong> n'est pas une énième application compliquée pensée par des développeurs en costumes. C'est un outil conçu avec et pour les agriculteurs, dans la simplicité et l'efficacité.`,
    `Notre approche ? <strong>L'agriculture connectée, enfin accessible</strong>. Nous transformons des heures de paperasse en quelques clics. Nous remplaçons les appels interminables par des informations instantanées. Nous digitisons sans déshumaniser, en gardant le lien précieux entre l'agriculteur et sa coopérative.`,
  ],
  images: [
    {
      src: '/images/fermer1.jpg',
      alt: 'Champs agricoles au coucher du soleil',
      height: 'h-[84px] md:h-96',
    },
    {
      src: '/images/fermer2.jpg',
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
