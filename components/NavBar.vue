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

const { isOpen, navList } = useNavBar()
</script>

<template>
  <header>
    <div :class="['transition-300 fixed top-0 w-full z-30', isScrolled ? 'navbar-active' : 'navbar-inactive']">
      <div class="container flex items-center justify-between gap-4 lg:gap-8">
        <h1 class="text-3xl font-bold text-black grow">Virz</h1>
        <nav class="hidden lg:block">
          <ul class="flex space-x-4">
            <li v-for="(item, index) in navList" :key="index">
              <NuxtLink :to="{ path: item.link }"
                class="font-medium flex flex-col gap-3 max-h-[25px] overflow-hidden group">
                <span class="transition-300 nav-link group-hover:-translate-y-6">
                  {{ item.title.toUpperCase() }}
                </span>
                <span class="transition-300 nav-link group-hover:-translate-y-9 text-primary">
                  {{ item.title.toUpperCase() }}
                </span>
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <Button variant="outline"
          class="cursor-pointer bg-gray-100 duration-300 shadow-primary hover:border-primary hover:shadow-lg hover:bg-primary hover:text-white">
          DOWNLOAD CV
        </Button>
        <div class="cursor-pointer lg:hidden flex items-center justify-center" @click="isOpen = true">
          <Icon name="solar:hamburger-menu-linear" size="2.5em" class="text-black" />
        </div>
      </div>
    </div>
    <div :class="['bg-black/30 top-0 right-0 left-0 bottom-0 z-40', isOpen ? 'fixed' : 'none']"></div>
  </header>
</template>