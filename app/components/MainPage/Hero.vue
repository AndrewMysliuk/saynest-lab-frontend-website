<template>
  <section class="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 py-16 lg:py-24 min-h-[80dvh]">
    <div class="space-y-6 text-center lg:text-left">
      <h1 class="text-4xl font-extrabold leading-tight tracking-tight lg:text-5xl">Learn to speak better by training real situations</h1>
      <p class="text-lg text-gray-600 lg:text-xl">Practice lifelike scenarios with AI feedback that helps you grow naturally.</p>
      <div class="flex flex-col sm:flex-row sm:justify-center lg:justify-start items-center gap-4 pt-2">
        <a
          href="https://app.saynestlab.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="min-w-[200px] text-center bg-[#5A3FFF] text-white hover:bg-[#4C35E6] px-6 py-3 rounded-md font-medium transition"
        >
          Start your first session
        </a>
      </div>
    </div>

    <div class="relative">
      <div class="mx-auto max-w-md rounded-2xl bg-white p-6 lg:max-w-lg lg:border lg:shadow-sm">
        <div class="flex items-start gap-4">
          <div class="h-10 w-10 shrink-0 rounded-full bg-indigo-600 text-white inline-flex items-center justify-center text-lg">
            <i class="fas fa-robot"></i>
          </div>
          <div class="rounded-2xl bg-gray-100 p-5 text-sm leading-relaxed">Welcome to our hotel! Do you have a reservation?</div>
        </div>

        <div class="mt-6 flex items-start gap-4 justify-end">
          <div class="rounded-2xl bg-indigo-600 text-white p-5 text-sm leading-relaxed max-w-[75%]">
            Yes, it’s under the name John Doe. I booked for two nights.
          </div>
          <div class="h-10 w-10 shrink-0 rounded-full bg-gray-100 text-indigo-600 inline-flex items-center justify-center text-lg">
            <i class="fas fa-user"></i>
          </div>
        </div>

        <div class="mt-6 flex items-start gap-4">
          <div class="h-10 w-10 shrink-0 rounded-full bg-indigo-600 text-white inline-flex items-center justify-center text-lg">
            <i class="fas fa-robot"></i>
          </div>
          <div class="rounded-2xl bg-gray-100 p-5 text-sm leading-relaxed">Let me check your reservation… Yes, I see it here.</div>
        </div>
      </div>

      <div class="pointer-events-none absolute -right-6 -top-6 hidden h-24 w-24 rounded-full bg-indigo-400/40 blur-2xl lg:block"></div>
      <div class="pointer-events-none absolute -left-6 hidden h-24 w-24 rounded-full bg-indigo-300/40 blur-2xl lg:block"></div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  setup() {
    return {}
  },
})
</script>
