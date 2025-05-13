<script setup>
const props = defineProps({
  medsos: {
    type: Array
  }
})
</script>

<template>
  <section class="bg-polka min-h-[80vh] md:min-h-[85vh] flex-center flex-col gap-8">
    <div class="container flex flex-col items-center gap-4" v-gsap.delay-500.stagger.from="{ opacity: 0, y: 50 }">
      <span class="text-2xl md:text-4xl font-medium text-black leading-6 md:leading-9">
        HI THERE, I'M
      </span>
      <div>
        <h1
          class="text-8xl leading-19 md:leading-[144px] tracking-tight md:text-[144px] bg-clip-text hover:bg-linear-to-bl from-primary to-green-600 font-black transition-300 text-stroke hover:drop-shadow-primary hover:drop-shadow-xl/50">
          Virz
        </h1>
      </div>
      <p class="text-base md:text-2xl font-medium text-black/60 text-clip text-center w-[300px] md:w-[600px]">An
        enthusiastic
        <span class="text-black font-bold">Frontend Developer </span>
        to create a user-friendly experiences.
      </p>
    </div>
    <div class="flex gap-4 md:gap-8" v-gsap.delay-1200.from="{ opacity: 0, y: 50 }">
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