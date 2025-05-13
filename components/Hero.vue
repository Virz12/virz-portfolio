<script setup>
const props = defineProps({
  medsos: {
    type: Array
  }
})
</script>

<template>
  <section class="bg-polka min-h-[80vh] md:min-h-[85vh] flex-center flex-col gap-12">
    <div class="container flex flex-col items-center gap-2" v-gsap.delay-500.stagger.from="{ opacity: 0, y: 50 }">
      <span class="text-xl md:text-4xl font-medium text-black">
        HI THERE, I'M
      </span>
      <div>
        <h1
          class="text-8xl md:text-[152px] bg-clip-text hover:bg-linear-to-bl from-primary to-green-600 font-bold transition-300 text-stroke hover:drop-shadow-primary hover:drop-shadow-xl/50">
          Virz
        </h1>
      </div>
      <p class="text-lg md:text-2xl font-medium text-black/60 text-clip text-center px-8">An enthusiastic
        <span class="text-black font-bold">Frontend Developer </span>
        to create a user-friendly experiences.
      </p>
    </div>
    <div class="flex gap-6 md:gap-8" v-gsap.delay-1200.from="{ opacity: 0, y: 50 }">
      <div class="size-12 md:size-16 duration-300 rounded-lg bg-linear-to-bl from-primary to-green-600 box-shadow-layer"
        v-gsap.magnetic.weaker v-for="(item, index) in medsos" :key="index">
        <NuxtLink :to="item.link" class="flex-center size-full p-2" target="_blank">
          <Icon :name="item.icon" size="2.5em" class="text-white transition-300" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.text-stroke {
  -webkit-text-stroke: 1px #44b58e;
  color: #f3f4f6;
}

.text-stroke:hover {
  -webkit-text-stroke: 1px #44b58e;
  color: transparent;
}
</style>