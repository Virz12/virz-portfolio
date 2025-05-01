<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
});

const NavList = [
  {
    title: "Homo",
    link: "/"
  },
  {
    title: "About",
    link: "/about"
  },
  {
    title: "Project",
    link: "/project"
  },
  {
    title: "Contact Me",
    link: "/contact-me",
  },
];
</script>

<template>
  <header>
    <div
      :class="['transition-all duration-300 fixed top-0 w-full z-50', isScrolled ? 'navbar-active' : 'navbar-inactive']">
      <div class="container mx-auto flex items-center justify-between">
        <h1 class="text-3xl font-bold text-black">Virz</h1>
        <nav>
          <ul class="flex space-x-4">
            <li v-for="(item, index) in NavList" :key="index">
              <NuxtLink :to="{ path: item.link }"
                class="font-medium flex flex-col gap-3 max-h-[25px] overflow-hidden group">
                <span class="transition-all duration-300 group-hover:-translate-y-6 group-hover:-skew-6">
                  {{ item.title }}
                </span>
                <span
                  class="transition-all duration-300 group-hover:-translate-y-9 group-hover:-skew-6 text-indigo-600">
                  {{ item.title }}
                </span>
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <Button class="cursor-pointer">Contact Me</Button>
      </div>
    </div>
  </header>
</template>