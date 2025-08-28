<template>
  <section class="relative bg-indigo-600 text-white py-16 lg:py-24">
    <div class="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
      <svg viewBox="0 0 500 50" preserveAspectRatio="none" class="w-full h-12">
        <path d="M0,0 C150,50 350,0 500,50 L500,00 L0,0 Z" fill="#ffffff"></path>
      </svg>
    </div>

    <div class="relative z-10">
      <h2 class="text-2xl lg:text-3xl font-bold text-center text-white mb-10 lg:mb-12">Features</h2>

      <div class="mx-auto grid max-w-5xl gap-12 lg:gap-16 lg:grid-cols-3">
        <div v-for="(feature, index) in features" :key="index" class="text-center">
          <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-indigo-700 text-xl shadow-md">
            <i :class="feature.icon"></i>
          </div>
          <h3 class="mt-4 text-lg lg:text-xl font-semibold text-white">
            {{ feature.title }}
          </h3>
          <p class="mx-auto mt-2 max-w-xs text-base text-white/80">
            {{ feature.description }}
          </p>
        </div>
      </div>

      <div class="mt-10 lg:mt-12 flex justify-center">
        <a
          href="https://app.saynestlab.com"
          target="_blank"
          rel="noopener noreferrer"
          class="min-w-[200px] text-center bg-white text-indigo-700 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition"
        >
          Explore All Features
        </a>
      </div>
    </div>

    <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
      <svg viewBox="0 0 500 50" preserveAspectRatio="none" class="w-full h-12">
        <path d="M0,0 C150,50 350,0 500,50 L500,00 L0,0 Z" fill="#ffffff"></path>
      </svg>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"

export default defineComponent({
  setup() {
    const features = [
      {
        icon: "fas fa-comments",
        title: "Practice Real-Life Scenarios",
        description:
          "Master everyday situations like interviews or appointments with short, focused speaking drills — no fluff, just what matters.",
      },
      {
        icon: "fas fa-random",
        title: "Every Chat is Unique",
        description:
          "Each session is powered by AI to adapt in real-time — no static scripts, just natural, unpredictable conversations like in real life.",
      },
      {
        icon: "fas fa-clipboard-check",
        title: "Smart Review & Feedback",
        description: "After each session, get a detailed breakdown of mistakes, plus mini-tasks to fix them. You improve where it counts.",
      },
    ]

    return { features }
  },
})
</script>
