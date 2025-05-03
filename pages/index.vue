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
  <main class="min-h-[3000px] bg-primary">
    <!-- Hero Section -->
    <section class="bg-polka min-h-[85vh] flex-center flex-col gap-12">
      <div class="container px-4 mx-auto flex flex-col items-center gap-2">
        <span class="text-xl md:text-4xl font-medium text-black">HI THERE, I'M</span>
        <h1 class="text-8xl md:text-[152px] transition-300 font-bold text-stroke">Virz</h1>
        <p class="text-lg md:text-2xl font-medium text-black/60 text-clip text-center px-8">
          An Enthusiast <span class="text-black font-bold">Web Developer</span> to
          creating a user-friendly experiences.
        </p>
      </div>
      <div class="flex gap-6 md:gap-8">
        <div class="size-12 md:size-16 transition-300 rounded-lg bg-primary box-shadow-layer"
          v-for="(item, index) in medsos" :key="index">
          <NuxtLink :to="item.link" class="flex-center size-full p-2" target="_blank">
            <Icon :name="item.icon" size="2.5em" class="text-white transition-300" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.text-stroke {
  -webkit-text-stroke: 1px #328E6E;
  color: #f3f4f6;
}

.text-stroke:hover {
  -webkit-text-stroke: 0px black;
  color: #328E6E;
}
</style>