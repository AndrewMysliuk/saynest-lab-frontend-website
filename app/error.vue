<template>
  <main>
    <TheHeader />

    <section class="container mx-auto grid grid-cols-1 gap-10 py-16 md:grid-cols-2 md:items-center md:py-24 min-h-[90dvh]">
      <div class="space-y-6 text-center md:text-left">
        <h1 class="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
          {{ error?.statusCode === 404 ? "Page Not Found – 404" : `Something went wrong – ${error?.statusCode || 500}` }}
        </h1>
        <p class="text-lg text-gray-600 md:text-xl">
          {{
            error?.statusCode === 404
              ? "The page you're looking for doesn't exist or has been moved."
              : error?.message || "An unexpected error occurred. Please try again later."
          }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
          <NuxtLink
            to="/"
            class="min-w-[200px] text-center bg-[#5A3FFF] text-white hover:bg-[#4C35E6] px-6 py-3 rounded-md font-medium transition"
          >
            Return to Homepage
          </NuxtLink>
        </div>
      </div>

      <div class="relative">
        <div class="mx-auto max-w-md rounded-2xl border bg-white p-6 shadow-sm md:max-w-lg">
          <div class="flex items-start gap-4">
            <div class="h-10 w-10 shrink-0 rounded-full bg-indigo-600 text-white inline-flex items-center justify-center text-lg">
              <i class="fas fa-robot"></i>
            </div>
            <div class="rounded-2xl bg-gray-100 p-5 text-sm leading-relaxed">I'm sorry, something went wrong.</div>
          </div>

          <div class="mt-6 flex items-start gap-4 justify-end">
            <div class="rounded-2xl bg-indigo-600 text-white p-5 text-sm leading-relaxed max-w-[75%]">
              No worries. Let’s go back to the homepage.
            </div>
            <div class="h-10 w-10 shrink-0 rounded-full bg-gray-100 text-indigo-600 inline-flex items-center justify-center text-lg">
              <i class="fas fa-user"></i>
            </div>
          </div>
        </div>

        <div class="pointer-events-none absolute -right-6 -top-6 hidden h-24 w-24 rounded-full bg-indigo-400/40 blur-2xl md:block"></div>
        <div class="pointer-events-none absolute -bottom-6 -left-6 hidden h-24 w-24 rounded-full bg-indigo-300/40 blur-2xl md:block"></div>
      </div>
    </section>

    <TheFooter />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  components: {
    TheHeader: defineAsyncComponent(() => import("~/components/TheHeader.vue")),
    TheFooter: defineAsyncComponent(() => import("~/components/TheFooter.vue")),
  },

  props: {
    error: {
      type: Object as () => { statusCode?: number; message?: string },
      required: true,
    },
  },

  setup(props) {
    const title = props.error?.statusCode === 404 ? "Page Not Found – Saynest Lab" : "Error – Saynest Lab"
    const description =
      props.error?.statusCode === 404
        ? "Sorry, the page you’re looking for doesn’t exist."
        : "An unexpected error occurred. Please try again later."

    useSeoHead({
      title,
      description,
    })

    return {}
  },
})
</script>
