<script setup>
useHead({
  htmlAttrs: {
    lang: "en",
  },
});
</script>

<template>
  <NuxtLayout>
    <ClientOnly>
      <Toaster />
    </ClientOnly>
    <NuxtPage />
  </NuxtLayout>
</template>