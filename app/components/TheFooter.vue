<template>
  <footer class="bg-gray-900 text-gray-300 border-t border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <nav
          class="order-1 lg:order-2 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-6 text-sm items-start sm:items-center lg:justify-end lg:items-end lg:text-right lg:self-start"
        >
          <NuxtLink href="/pricing" class="hover:text-white">Pricing</NuxtLink>
          <NuxtLink href="/terms-and-conditions" class="hover:text-white">Terms & Conditions</NuxtLink>
          <NuxtLink href="/privacy-policy" class="hover:text-white">Privacy Policy</NuxtLink>
          <NuxtLink href="/refund-policy" class="hover:text-white">Refund Policy</NuxtLink>
        </nav>

        <div class="order-2 lg:order-1 space-y-3">
          <p class="text-sm text-gray-400 uppercase tracking-wider font-semibold">Contact us</p>

          <div class="flex flex-col items-start gap-2 text-sm">
            <a href="mailto:saynest.labs@gmail.com" class="inline-flex items-center gap-2 hover:text-white transition">
              <i class="fas fa-envelope text-white/80"></i>
              saynest.labs@gmail.com
            </a>
            <a
              href="https://x.com/andrii_mysliuk"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 hover:text-white transition"
            >
              <i class="fab fa-x-twitter text-white/80"></i>
              Twitter / X
            </a>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-800 mt-10 pt-4 text-center text-sm text-gray-400">© Saynest Lab 2025</div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  setup() {
    return {}
  },
})
</script>
