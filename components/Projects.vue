<script setup>
const projects = [
  {
    title: 'WhatsApp Channel Integration (On Progress)',
    image: '/images/whatsappIntegration.webp',
    link: ''
  },
]
</script>

<template>
  <section>
    <div class="container pt-20">
      <h2 class="text-4xl md:text-5xl font-bold text-center uppercase mb-12"
        v-gsap.delay-300.whenVisible.once.reversible.from="{ opacity: 0, y: 50 }">
        Works & Projects
      </h2>
      <!-- Project -->
      <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6"
        v-gsap.delay-300.whenVisible.once.reversible.stagger.from='{ opacity: 0, y: 50 }'>
        <NuxtLink :to="item.link" v-for="(item, index) in projects" :key="index"
          class="border rounded-xl relative cursor-pointer group basis-1/3 after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-xl after:bg-black after:opacity-0 after:duration-300 hover:after:opacity-15">
          <NuxtImg :src="item.image" size="100%" class="rounded-xl group-hover:blur-[2px]"></NuxtImg>
          <div class="absolute z-10 bottom-0 w-full p-4">
            <h3
              class="text-2xl text-white font-black text-shadow-sm transition-300 -my-2.5 uppercase opacity-0 invisible group-hover:m-0 group-hover:opacity-100 group-hover:visible">
              {{ item.title }}</h3>
          </div>
        </NuxtLink>
      </div>
      <div class="border-b border-primary pb-20"></div>
    </div>
  </section>
</template>