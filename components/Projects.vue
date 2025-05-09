<script setup>
const projects = [
  {
    title: 'Not Yet',
    image: '',
    link: ''
  },
  {
    title: 'Not Yet',
    image: '',
    link: ''
  },
  {
    title: 'Not Yet',
    image: '',
    link: ''
  },
  {
    title: 'Not Yet',
    image: '',
    link: ''
  }
]
</script>

<template>
  <section>
    <div class="container py-20">
      <h2 class="text-header mb-8" v-gsap.whenVisible.once.reversible.from="{ opacity: 0, y: 50 }">Works & Projects</h2>
      <!-- Project -->
      <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8">
        <div v-for="(item, index) in projects" :key="index"
          v-gsap.whenVisible.once.reversible.from='{ opacity: 0, y: 50 }'
          class="border rounded-xl relative flex-center flex-col cursor-pointer bg-white/10p-8 group hover:bg-neutral-400/10 basis-1/3">
          <Icon name="healthicons:not-ok" size="18em"
            class="group-hover:scale-105 hover:blur-sm transition-300 text-gray-600/20" />
          <div class="absolute z-10 bottom-0 w-full px-8 py-4">
            <h3
              class="text-3xl font-bold transition-300 uppercase -mx-2.5 opacity-0 invisible group-hover:m-0 group-hover:opacity-100 group-hover:visible">
              {{ item.title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>