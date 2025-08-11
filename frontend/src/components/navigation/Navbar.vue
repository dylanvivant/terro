<template>
  <header
    class="fixed left-1/2 transform -translate-x-1/2 bottom-16 w-[285px] md:w-[475px] lg:w-[520px] xl:w-[580px] h-[50px] md:h-[70px] lg:h-[75px] rounded-full flex flex-row items-center justify-between px-5 py-7 lg:px-6 lg:py-8 backdrop-blur-md bg-white/5 border border-white/20 z-[99]"
  >
    <router-link
      to="/"
      class="text-primary-vert text-p-small md:text-p-medium lg:text-p-large font-light transition-all duration-300 hover:text-primary-vertClair hover:scale-105 px-2 py-1 rounded-lg"
    >
      mission
    </router-link>
    <router-link
      to="/about"
      class="text-primary-vert text-p-small md:text-p-medium lg:text-p-large font-light transition-all duration-300 hover:text-primary-vertClair hover:scale-105 px-2 py-1 rounded-lg"
    >
      solution
    </router-link>
    <router-link
      to="/contact"
      class="text-primary-vert text-p-small md:text-p-medium lg:text-p-large font-light transition-all duration-300 hover:text-primary-vertClair hover:scale-105 px-2 py-1 rounded-lg"
    >
      contact
    </router-link>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
header {
  // Effet de flou léger
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);

  // Effet glass avec bordures
  box-shadow:
    inset 0 1px 0 #f8f9ff,
    inset 0 -1px 0 rgba(0, 0, 0, 0.1);

  // Animation d'apparition
  animation: fadeInUp 0.8s ease-out;
}

// États des liens de navigation
.router-link-active {
  font-weight: bold;
  color: #2d5930;
}

// Effet de survol simplifié
a {
  position: relative;

  &:hover {
    text-shadow: none;
  }
}

// Animation d'apparition
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

// Support pour les écrans avec préférence de mouvement réduit
@media (prefers-reduced-motion: reduce) {
  header {
    animation: none;
  }

  a {
    transition: none;
  }
}
</style>
