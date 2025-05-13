<script setup>
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<template>
  <section class="bg-linear-to-bl from-primary to-green-600 min-h-16 md:h-16 py-4">
    <div class="container flex flex-col md:flex-row items-center justify-between gap-4 min-h-full">
      <span class="uppercase text-white font-bold">&#169; 2025 Virz. All right reserved</span>
      <span class="uppercase text-white font-bold lg:mr-[15%] xl:mr-[11%]">Let's work together</span>
      <span class="uppercase text-white font-bold cursor-pointer" @click="scrollToTop">Back to top</span>
    </div>
  </section>
</template>