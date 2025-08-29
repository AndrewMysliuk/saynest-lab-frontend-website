<template>
  <section class="relative bg-indigo-600 text-white py-24 lg:py-24 overflow-hidden">
    <div class="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
      <svg class="w-full h-24" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,64C180,160,360,0,540,96C720,192,900,128,1080,192C1260,256,1440,160,1440,160L1440,0L0,0Z"
        />
      </svg>
    </div>

    <div class="relative z-10 container mx-auto px-4">
      <h2 class="text-2xl lg:text-3xl font-bold text-center text-white mb-10 lg:mb-12">How it works</h2>

      <div class="relative mx-auto max-w-4xl">
        <div
          class="pointer-events-none absolute left-1/2 top-0 -z-10 w-[2px] -translate-x-1/2 bg-white/70 hidden lg:block"
          :style="{ height: `${(steps.length - 1) * 140}px` }"
        />

        <div v-for="(step, index) in steps" :key="index" class="relative py-4 lg:py-6">
          <span
            class="hidden lg:flex absolute top-0 z-10 h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-indigo-600 text-base font-bold left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            {{ index + 1 }}
          </span>

          <div class="grid gap-6 lg:grid-cols-2 lg:items-start lg:min-h-[108px]">
            <div :class="index % 2 === 0 ? 'hidden lg:block lg:pr-10 order-1' : 'hidden lg:block order-2'" />

            <div :class="[index % 2 === 0 ? 'order-1 lg:order-2 lg:pl-10' : 'order-1 lg:order-1 lg:pl-10']" class="pl-0">
              <h3 class="text-lg lg:text-xl font-semibold text-white">{{ step.title }}</h3>
              <p class="mt-2 text-base text-white/80">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-10 lg:mt-12 flex justify-center">
        <a
          href="https://app.saynestlab.com"
          rel="noopener noreferrer"
          class="bg-white text-indigo-700 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition"
        >
          Start a quick speaking session
        </a>
      </div>
    </div>

    <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
      <svg class="w-full h-24" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          fill="#ffffff"
          fill-opacity="1"
          d="M0,64C180,160,360,0,540,96C720,192,900,128,1080,192C1260,256,1440,160,1440,160L1440,0L0,0Z"
        />
      </svg>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"

export default defineComponent({
  setup() {
    const steps = ref([
      {
        title: "Choose your scenario",
        description: "Pick a real-life situation that fits your needs — job interview, travel, doctor visit, or small talk.",
      },
      {
        title: "Talk with AI",
        description:
          "Answer questions in a natural way. The AI listens and responds — like a real conversation. You don’t need to perform — just speak.",
      },
      {
        title: "Generate your feedback",
        description:
          "After the session, you can generate a detailed review: grammar issues, explanations, and clarity insights — all based on your answers.",
      },
    ])

    return { steps }
  },
})
</script>
