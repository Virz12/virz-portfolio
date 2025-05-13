<template>
  <section class="bg-linear-to-bl from-primary to-green-600 lg:min-h-[70vh] py-20">
    <!-- Image -->
    <div class="container flex flex-col lg:flex-row items-center lg:justify-between gap-18">
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
        <NuxtImg src="/images/virz.webp" alt="Virz Image" sizes="sm:100% md:400px" class="relative z-10 rounded-xl" />
      </div>

      <!-- Description -->
      <div class="w-full lg:w-1/2 lg:mb-16"
        v-gsap.whenVisible.once.reversible.stagger.from='{ opacity: 0, y: 50, stagger: 0.4 }'>
        <h2 class="text-header text-white">ABOUT ME</h2>
        <p class="text-xl mt-4 text-white">
          I'm a Frontend Developer with a passion for creating beautiful and functional web applications. I have
          experience in HTML, CSS, JavaScript, and various frontend frameworks such as React.js and Vue.js. I'm
          always eager to learn new
          technologies and improve my skills.
        </p>
      </div>
    </div>
  </section>
</template>