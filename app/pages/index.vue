<template>
  <main class="min-h-screen bg-white text-gray-900 mt-[64px]">
    <Hero />

    <HowItWorks />

    <VideoBlock />

    <Features />

    <FAQ />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  components: {
    Hero: defineAsyncComponent(() => import("~/components/MainPage/Hero.vue")),
    HowItWorks: defineAsyncComponent(() => import("~/components/MainPage/HowItWorks.vue")),
    VideoBlock: defineAsyncComponent(() => import("~/components/MainPage/VideoBlock.vue")),
    Features: defineAsyncComponent(() => import("~/components/MainPage/Features.vue")),
    FAQ: defineAsyncComponent(() => import("~/components/MainPage/FAQ.vue")),
  },

  setup() {
    useSeoHead()

    return {}
  },
})
</script>
