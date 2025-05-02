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
    title: "Home",
    link: "/"
  },
  {
    title: "About",
    link: "/"
  },
  {
    title: "Project",
    link: "/"
  },
  {
    title: "Contact Me",
    link: "/",
  },
];

const isOpen = useNavBar()
</script>

<template>
  <header>
    <div :class="['transition-300 fixed top-0 w-full z-50', isScrolled ? 'navbar-active' : 'navbar-inactive']">
      <div class="container px-4 mx-auto flex items-center justify-between gap-4">
        <h1 class="text-3xl font-bold text-black grow lg:grow-0">Virz</h1>
        <nav class="hidden lg:block">
          <ul class="flex space-x-4">
            <li v-for="(item, index) in NavList" :key="index">
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
        <Button variant="outline" class="cursor-pointer bg-gray-100 duration-300 hover:bg-primary hover:text-white">
          DOWNLOAD CV
        </Button>
        <div class="cursor-pointer lg:hidden flex items-center justify-center" @click="isOpen = true">
          <Icon name="solar:hamburger-menu-linear" size="2.5em" class="text-black" />
        </div>
        <Sidebar :NavList />
      </div>
    </div>
  </header>
</template>