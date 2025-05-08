<template>
  <section class="bg-primary min-h-[80vh] lg:min-h-[70vh] py-20 lg:py-40">
    <div class="container md:h-100 flex flex-col lg:flex-row items-center lg:justify-between gap-18">
      <div class="relative mx-4" v-gsap.mobile.delay-1600.stagger.whenVisible.once.from="{ opacity: 0, x: -30 }"
        v-gsap.desktop.delay-500.stagger.whenVisible.once.reversible.from="{ opacity: 0, x: -50 }">
        <!-- Square Skew -->
        <span class="absolute z-20 top-0 lg:top-5 -right-6 size-18 rounded-lg skew-12 bg-secondary"
          v-gsap.parallax.faster></span>
        <!-- Circle -->
        <span class="absolute z-20 top-36 md:top-20 lg:top-40 -left-6 size-20 rounded-full bg-secondary"
          v-gsap.parallax.slower></span>
        <!-- Square Outline -->
        <span class="absolute z-10 -bottom-12 -right-10 size-40 bg-none border-8 border-secondary rotate-6"
          v-gsap.parallax.faster></span>
        <NuxtImg src="/images/virz.jpg" alt="Virz Image" sizes="sm:100% md:400px" class="relative z-10 rounded-xl" />
      </div>
      <div class="w-full lg:w-1/2 text-white lg:mb-16"
        v-gsap.whenVisible.once.reversible.stagger.from='{ opacity: 0, y: 50, stagger: 0.4 }'>
        <h2 class="text-4xl font-bold">ABOUT ME</h2>
        <p class="text-xl mt-4">
          I'm a Frontend Developer with a passion for creating beautiful and functional web applications. I have
          experience in HTML, CSS, JavaScript, and various frontend frameworks such as React.js and Vue.js. I'm
          always eager to learn new
          technologies and improve my skills.
        </p>
      </div>
    </div>
  </section>
</template>