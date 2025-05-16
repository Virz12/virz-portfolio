<script setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>

<template>
  <div class="font-Dm-Sans">
    <NavBar />
    <slot></slot>
    <Footer />
  </div>
</template>