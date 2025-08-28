<template>
  <main class="bg-white text-gray-900 px-4 py-16 flex items-center justify-center min-h-[80dvh] mt-[64px]">
    <div class="max-w-3xl w-full">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Refund Policy for Saynest Lab</h1>
      <p class="text-sm text-gray-500 mb-10">Last updated: June 16, 2025</p>

      <div class="space-y-6 text-[1.05rem] leading-relaxed text-gray-700">
        <p>
          We offer a 3-day free trial so you can explore the platform and decide if it’s right for you. During the trial, you can use up to
          20 sessions (any activity), 20 AI-generated conversation reviews, and 20 AI-generated tasks. After the trial ends and your
          subscription begins, all payments are <span class="font-semibold">non-refundable</span>.
        </p>

        <p>
          If you believe a charge was made in error, please contact us at
          <a href="mailto:saynest.labs@gmail.com" class="text-indigo-700 hover:underline"> saynest.labs@gmail.com </a>
          within 7 days of the charge and we’ll review your case. Refunds for mistaken charges are not guaranteed and will be issued at our
          discretion.
        </p>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  setup() {
    useSeoHead({
      title: "Refund Policy – Saynest Lab",
      description:
        "Refund Policy for Saynest Lab. Learn about our free trial and non-refundable payment terms, as well as how to contact us in case of billing errors.",
    })

    return {}
  },
})
</script>
