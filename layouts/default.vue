<script setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
import { Analytics } from '@vercel/analytics/nuxt';
</script>

<template>
  <Analytics />
  <SpeedInsights />
  <div class="font-Dm-Sans">
    <NavBar />
    <slot></slot>
    <Footer />
  </div>
</template>