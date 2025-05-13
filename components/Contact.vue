<script setup>
const myContact = [
  {
    title: 'Location',
    icon: 'weui:location-filled',
    description: 'Indonesia, West Java, Bandung'
  },
  {
    title: 'Phone',
    icon: 'f7:phone-fill',
    description: '+62 896 0378 4944'
  },
  {
    title: 'Email',
    icon: 'ic:round-email',
    description: 'virgiriyadi2404@gmail.com'
  },
]
</script>

<template>
  <section>
    <div class="container py-20">
      <h2 class="text-header mb-8 uppercase" v-gsap.whenVisible.once.reversible.from="{ opacity: 0, y: 50 }">
        Contact Me
      </h2>
      <div class="flex gap-8 flex-col lg:flex-row">
        <div class="flex flex-col md:flex-row md:justify-between lg:justify-start lg:flex-col gap-4"
          v-gsap.delay-500.whenVisible.once.reversible.stagger.from="{ opacity: 0, y: 50 }">
          <div class="flex md:flex-col gap-8 md:gap-4 lg:gap-8 lg:flex-row items-center"
            v-for="(item, index) in myContact" :key="index">
            <div
              class="bg-linear-to-bl from-primary to-green-600 size-12 md:size-14 rounded-full flex-center transition-300 p-2 hover:scale-105">
              <Icon :name="item.icon" size="1.5em" class="text-white" />
            </div>
            <div class="md:text-center lg:text-start">
              <h2 class="text-xl font-bold mb-2">{{ item.title }}</h2>
              <p class="text-gray-600 text-md">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
        <ContactForm class="grow lg:ml-60" />
      </div>
    </div>
  </section>
</template>