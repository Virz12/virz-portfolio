<script setup>
const medsos = [
  {
    icon: 'mdi:github',
    link: 'https://github.com/Virz12'
  },
  {
    icon: 'ri:instagram-line',
    link: 'https://www.instagram.com/isthiszain_'
  },
  {
    icon: 'ic:baseline-facebook',
    link: 'https://www.facebook.com/isthis.zain/'
  },
]
</script>

<template>
  <Sidebar />
  <main class="min-h-[3000px] bg-gray-100">
    <!-- Hero Section -->
    <Hero :medsos />
    <!-- About Section -->
    <section class="bg-primary min-h-[80vh] md:min-h-[85vh] py-12">
      <div class="container flex flex-col items-center gap-12">
        <div class="relative">
          <span class="absolute z-20 top-0 -right-6 size-14 rounded-lg skew-12 bg-secondary"
            v-gsap.parallax.faster></span>
          <span class="absolute z-20 top-20 -left-6 size-18 rounded-full bg-secondary" v-gsap.parallax.slower></span>
          <span class="absolute z-10 -bottom-12 -right-10 size-40 bg-none border-8 border-secondary rotate-6"
            v-gsap.parallax.faster></span>
          <NuxtImg src="/images/virz.png" alt="Virz Image" sizes="sm:100% md:400px" class="relative z-10 rounded-lg" />
        </div>
        <div class="w-full text-white">
          <h2 class="text-2xl font-bold">About Me</h2>
          <p class="text-xl font-normal mt-4">
            I am a Frontend Developer with a passion for creating beautiful and functional web applications. I have
            experience in HTML, CSS, JavaScript, and various frontend frameworks. I am always eager to learn new
            technologies and improve my skills.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>