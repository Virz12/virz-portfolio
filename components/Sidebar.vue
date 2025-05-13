<script setup>
const { isOpen, navList } = useNavBar()
</script>

<template>
  <div
    :class="['fixed z-50 transition-300 top-0 right-0 w-3/4 sm:w-1/2 h-screen border-l bg-linear-to-bl from-primary to-green-600 text-white', isOpen ? '-translate-x-[0%]' : 'translate-x-[100%]']">
    <div class="relative" @click="isOpen = false">
      <Icon name="charm:cross" size="2.5em" class="cursor-pointer text-white absolute right-6 top-6" />
    </div>
    <nav class="flex flex-col ml-8 justify-center h-1/2">
      <ul class="space-y-2">
        <li v-for="(item, index) in navList" :key="index">
          <NuxtLink :to="{ path: '', hash: item.link }" class="text-lg font-medium min-w-full block" v-gsap.animateText
            @click="isOpen = false">
            {{ item.title.toUpperCase() }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>