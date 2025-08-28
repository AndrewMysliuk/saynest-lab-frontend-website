<template>
  <section class="max-w-5xl mx-auto px-4 py-12 lg:py-16">
    <h2 class="text-2xl lg:text-3xl font-bold text-center mb-8 lg:mb-10">Watch Saynest in Action</h2>

    <div class="mx-auto overflow-hidden rounded-xl bg-white aspect-video lg:border lg:shadow-sm">
      <iframe
        class="w-full h-full"
        src="https://www.youtube.com/embed/ahOZpWFWg3s?si=a3xE8WtEciOW9iE0"
        title="Saynest Lab – Demo"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>

    <div class="mt-10 lg:mt-12 flex justify-center">
      <a
        href="https://app.saynestlab.com/"
        target="_blank"
        rel="noopener noreferrer"
        class="min-w-[200px] text-center bg-[#5A3FFF] text-white hover:bg-[#4C35E6] px-6 py-3 rounded-md font-medium transition"
      >
        Try It Yourself
      </a>
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
