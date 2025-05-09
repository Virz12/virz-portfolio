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
  <main class="min-h-[3000px] bg-gray-100 overflow-hidden">
    <!-- Hero Section -->
    <Hero :medsos id="home" />
    <!-- About Section -->
    <About id="about" class="scroll-mt-[80px]" />
    <!-- Project Seciton -->
    <Projects id="projects" class="scroll-mt-[80px]" />
  </main>
</template>

<style scoped></style>