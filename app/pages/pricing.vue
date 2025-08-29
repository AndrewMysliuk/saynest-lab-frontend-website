<template>
  <main class="min-h-screen bg-gray-50 text-gray-900 mt-[64px] px-4 py-20">
    <div class="max-w-2xl mx-auto text-center">
      <h1 class="text-2xl lg:text-3xl font-bold text-center mb-4">Overview our plans</h1>
      <p class="text-gray-500 text-base mb-12">Here you can view all available subscription plans and their features</p>

      <div class="relative w-full max-w-sm mx-auto p-6 md:p-8 bg-white border border-gray-200 rounded-2xl shadow-sm text-left">
        <header class="mb-6">
          <h4 class="text-lg font-semibold text-gray-800">STANDARD</h4>
          <p class="mt-1 text-sm text-gray-500">One simple plan, everything included.</p>
        </header>

        <div class="mb-6">
          <div class="flex items-baseline gap-2">
            <span class="text-xl text-gray-500 line-through font-medium">€30.00</span>
            <span class="text-3xl font-bold text-gray-900">€19.99</span>
            <span class="text-sm text-gray-500 font-medium">EUR</span>
          </div>
          <p class="text-sm text-gray-500 mt-1">monthly for one person</p>
        </div>

        <a
          href="https://app.saynestlab.com/"
          rel="noopener noreferrer"
          class="w-full inline-flex justify-center items-center px-6 py-2.5 text-sm font-semibold rounded-md bg-[#5A3FFF] text-white hover:bg-[#4C35E6] transition"
        >
          Try It Now
        </a>

        <hr class="my-6 border-gray-200" />

        <ul class="space-y-3 text-sm text-gray-800">
          <li class="flex items-start gap-2">
            <i class="fas fa-check text-green-500 mt-1"></i>
            3-day free trial — cancel anytime
          </li>
          <li class="flex items-start gap-2">
            <i class="fas fa-check text-green-500 mt-1"></i>
            Full access to real-life scenarios
          </li>
          <li class="flex items-start gap-2">
            <i class="fas fa-check text-green-500 mt-1"></i>
            Honest AI feedback
          </li>
          <li class="flex items-start gap-2">
            <i class="fas fa-check text-green-500 mt-1"></i>
            5–10 minute speaking practice sessions
          </li>
          <li class="flex items-start gap-2">
            <i class="fas fa-check text-green-500 mt-1"></i>
            No fluff — just real practice
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  setup() {
    useSeoHead({
      title: "Pricing – Saynest Lab",
      description: "See pricing details for Saynest Lab: €19.99/month with a 3-day free trial included.",
    })

    return {}
  },
})
</script>
