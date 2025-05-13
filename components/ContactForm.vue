<script setup>

</script>

<template>
  <section>
    <form action="" class="grid md:grid-cols-2 gap-4"
      v-gsap.delay-500.whenVisible.once.reversible.stagger.from="{ opacity: 0, y: 50 }">
      <Input type="text" placeholder="Your Name" class="py-5 bg-white" />
      <Input type="email" placeholder="Your Email" class="py-5 bg-white" />
      <Input type="text" placeholder="Your Subject" class="py-5 bg-white md:col-span-2" />
      <Textarea class="border-1 w-full bg-white md:col-span-2 min-h-[115px]" placeholder="Enter your Messages" />
      <div>
        <Button class="cursor-pointer uppercase w-1/2 lg:w-full xl:w-1/2 bg-linear-to-bl from-primary to-green-600">Send
          Message</Button>
      </div>
    </form>
  </section>
</template>