<template>
  <section class="bg-secondary-vert w-full flex flex-col py-28 my-52" ref="sectionRef">
    <div class="flex xl:flex-row flex-col items-center justify-center md:gap-24 gap-20">
      <div
        class="md:w-[300px] md:h-[250px] w-[255px] h-[215px] bg-primary-blanc rounded-2xl flex flex-col items-center justify-center"
      >
        <h3 class="text-primary-vert font-bold text-6xl">{{ animatedPercentage }}%</h3>
        <p class="text-primary-vert font-light text-center text-xl md:w-[275px] w-[240px]">
          d'agriculteurs sous-équipés en digital
        </p>
      </div>
      <div
        class="md:w-[300px] md:h-[250px] w-[255px] h-[215px] bg-primary-blanc rounded-2xl flex flex-col items-center justify-center"
      >
        <h3 class="text-primary-vert font-bold text-6xl">€{{ animatedMoney }}M</h3>
        <p class="text-primary-vert font-light text-center text-xl md:w-[275px] w-[240px]">
          revenus perdus par manque de digitalisation
        </p>
      </div>
      <div
        class="md:w-[300px] md:h-[250px] w-[255px] h-[215px] bg-primary-blanc rounded-2xl flex flex-col items-center justify-center"
      >
        <h3 class="text-primary-vert font-bold text-6xl">{{ animatedHours }}h</h3>
        <p class="text-primary-vert font-light text-center text-xl md:w-[275px] w-[240px]">
          de travail quotidien moyen
        </p>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center md:mt-8 mt-10 gap-8">
      <h3
        class="text-primary-blanc sm:text-h-2 text-hSmall-2 text-center font-bold sm:w-full w-[240px]"
      >
        Un constat alarmant
      </h3>
      <p
        class="text-primary-blanc sm:text-h-5 text-hSmall-4 font-light xl:w-[1085px] md:w-[700px] w-[275px] text-center"
      >
        Pendant que le monde se digitalise, nos agriculteurs restent à l'écart de cette révolution
        technologique
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const sectionRef = ref(null)
const animatedPercentage = ref(0)
const animatedMoney = ref(0)
const animatedHours = ref(0)

const animateValue = (targetValue, currentRef, duration = 2000, decimals = 0) => {
  const startValue = 0
  const startTime = performance.now()

  const animate = (currentTime) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)

    // Utiliser une fonction d'easing pour un effet plus fluide
    const easeOutQuart = 1 - Math.pow(1 - progress, 4)
    const currentValue = startValue + (targetValue - startValue) * easeOutQuart

    currentRef.value =
      decimals > 0 ? parseFloat(currentValue.toFixed(decimals)) : Math.floor(currentValue)

    if (progress < 1) {
      requestAnimationFrame(animate)
    } else {
      currentRef.value = decimals > 0 ? parseFloat(targetValue.toFixed(decimals)) : targetValue
    }
  }

  requestAnimationFrame(animate)
}

const startAnimations = () => {
  // Animation pour le pourcentage (0 à 78)
  animateValue(78, animatedPercentage, 2000)

  // Animation pour l'argent (0 à 2.3)
  animateValue(2.3, animatedMoney, 2000, 1)

  // Animation pour les heures (0 à 12)
  animateValue(12, animatedHours, 2000)
}

onMounted(() => {
  // Observer pour détecter quand la section entre dans le viewport
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startAnimations()
          observer.unobserve(entry.target) // Ne lancer l'animation qu'une fois
        }
      })
    },
    { threshold: 0.3 }, // L'animation se déclenche quand 30% de la section est visible
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})
</script>

<style lang="scss" scoped></style>
