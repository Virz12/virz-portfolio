<script setup>
const frameworks = [
  { name: 'React', icon: 'logos:react' },
  { name: 'Vue.js', icon: 'logos:vue' },
  { name: 'Nuxt.js', icon: 'logos:nuxt-icon' },
  { name: 'Laravel', icon: 'logos:laravel' },
  { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
  { name: 'Bootstrap', icon: 'logos:bootstrap' },
];

const frameworksList = [...frameworks, ...frameworks];
</script>

<template>
  <section class="bg-linear-to-bl from-primary to-green-600 lg:min-h-[70vh] py-20">
    <div class="container flex flex-col lg:flex-row items-center lg:justify-between gap-12">
      <!-- Image -->
      <div class="relative mx-4" v-gsap.mobile.delay-1600.stagger.whenVisible.once.from="{ opacity: 0, x: -30 }"
        v-gsap.desktop.delay-500.stagger.whenVisible.once.reversible.from="{ opacity: 0, x: -50 }">
        <!-- Square Skew -->
        <span
          class="absolute z-20 top-0 lg:top-5 -right-6 size-18 rounded-lg skew-12 bg-linear-to-bl from-secondary to-green-600"
          v-gsap.parallax.faster></span>
        <!-- Circle -->
        <span
          class="absolute z-20 top-36 md:top-20 lg:top-40 -left-6 size-20 rounded-full bg-linear-to-bl from-secondary to-green-600"
          v-gsap.parallax.slower></span>
        <!-- Square Outline -->
        <span
          class="absolute z-10 -bottom-12 -right-10 size-40 border-8 border-l-green-700 border-b-green-700 border-r-secondary border-t-secondary rotate-6"
          v-gsap.parallax.faster></span>
        <NuxtImg src="/images/profile-photo.jpg" alt="Virz Image" sizes="sm:100% md:400px"
          class="relative z-10 rounded-xl" />
      </div>

      <!-- Description -->
      <div class="w-full lg:w-1/2 lg:mb-16"
        v-gsap.whenVisible.once.reversible.stagger.from='{ opacity: 0, y: 50, stagger: 0.4 }'>
        <h2 class="text-4xl md:text-5xl font-bold leading-9 text-white mb-4">ABOUT ME</h2>
        <p class="md:text-2xl text-white">
          I'm a Frontend Developer that have experience in HTML, CSS, JavaScript, and various frontend frameworks such
          as React.js and Vue.js. I'm always eager to learn new technologies and improve my skills.
        </p>

        <!-- Framework Automate Scroll -->
        <div
          class="relative w-full overflow-hidden py-10 mask-alpha mask-r-from-black mask-r-from-90% mask-l-from-90% mask-l-to-transparent">
          <ul class="flex w-max animate-scroll whitespace-nowrap">
            <li v-for="(framework, index) in frameworksList" :key="index"
              class="flex items-center justify-center text-white text-lg px-8">
              <Icon :name="framework.icon" size="2em" class="mr-3" />
              <span class="whitespace-nowrap">{{ framework.name }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll 15s linear infinite;
}
</style>