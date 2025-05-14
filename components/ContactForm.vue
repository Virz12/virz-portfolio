<script setup>
import { toast } from 'vue-sonner'

const loading = ref(false)
const error = ref(null)

let form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const showToast = (message, type) => {
  if (type === 'error') {
    toast.error(message, {
      position: 'bottom-right',
      theme: 'light',
      class: '!bg-red-200 !text-red-800',
    })
  } else if (type === 'success') {
    toast.success(message, {
      position: 'bottom-right',
      theme: 'light',
      class: '!bg-green-200 !text-green-800',
    })
  }
}

const submitForm = async () => {
  loading.value = true

  try {
    await $fetch('/api/sendFormContact', {
      method: 'POST',
      body: form
    })

    showToast('Message sent successfully!', 'success')

    form = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }

  } catch (err) {
    error.value = err?.data?.statusMessage || 'Failed to send message'
    showToast(error.value, 'error')
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section>
    <form @submit.prevent="submitForm" class="grid md:grid-cols-2 gap-4"
      v-gsap.delay-500.whenVisible.once.reversible.stagger.from="{ opacity: 0, y: 50 }">
      <Input type="text" placeholder="Your Name" v-model="form.name" name="=Name" class="py-5 bg-white" />
      <Input type="email" placeholder="Your Email" v-model="form.email" name="=Email" class="py-5 bg-white" />
      <Input type="text" placeholder="Your Subject" v-model="form.subject" name="Subject"
        class="py-5 bg-white md:col-span-2" />
      <Textarea class="border-1 w-full bg-white md:col-span-2 min-h-[115px]" name="Message" v-model="form.message"
        placeholder="Enter your Messages" />
      <div>
        <Button :disabled="loading"
          class="cursor-pointer uppercase w-1/2 lg:w-full xl:w-1/2 bg-linear-to-bl from-primary to-green-600">
          Send Message
        </Button>
      </div>
    </form>
  </section>
</template>