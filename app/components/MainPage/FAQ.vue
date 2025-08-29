<template>
  <section class="max-w-5xl mx-auto px-4 py-16 lg:py-24">
    <h2 class="text-2xl lg:text-3xl font-bold text-center mb-8 lg:mb-10">FAQs</h2>

    <div class="space-y-4">
      <div v-for="(item, index) in faqs" :key="index" class="border-b border-gray-200 pb-5">
        <button
          :aria-expanded="openIndex === index ? 'true' : 'false'"
          :aria-controls="`faq-answer-${index}`"
          @click="toggle(index)"
          class="w-full flex justify-between items-center text-left text-[1.1rem] lg:text-[1.15rem] font-semibold text-gray-900"
        >
          {{ item.question }}
          <i
            class="fas fa-chevron-down transform transition-transform duration-200 text-base"
            :class="{ 'rotate-180': openIndex === index }"
          />
        </button>

        <div
          v-show="openIndex === index"
          class="overflow-hidden transition-all duration-300 ease-in-out max-h-0 opacity-0 pt-0"
          :class="{
            'max-h-96 opacity-100 pt-4': openIndex === index,
          }"
        >
          <p class="text-gray-700 text-[1rem] lg:text-[1.05rem] leading-relaxed">
            {{ item.answer }}
          </p>
        </div>
      </div>
    </div>

    <div class="mt-10 lg:mt-12 flex justify-center">
      <a
        href="https://app.saynestlab.com/"
        rel="noopener noreferrer"
        class="min-w-[200px] text-center bg-[#5A3FFF] text-white hover:bg-[#4C35E6] px-6 py-3 rounded-md font-medium transition"
      >
        Start Your Free Trial
      </a>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"

export default defineComponent({
  setup() {
    const openIndex = ref<number | null>(null)

    const toggle = (index: number) => {
      openIndex.value = openIndex.value === index ? null : index
    }

    const faqs = [
      {
        question: "What is Saynest Lab?",
        answer:
          "Saynest Lab is an AI-powered speaking trainer. You practice by going through short conversational scenarios with instant feedback and smart hints.",
      },
      {
        question: "How does the AI tutor work?",
        answer:
          "You select a module or jump straight into a scenario. During the session, you speak with the AI. After that, you review the conversation, see your mistakes, and get a short recap. Extra mini-tasks are provided to help you work on your weak points.",
      },
      {
        question: "Is there a free trial?",
        answer:
          "Yes, you can try Saynest Lab in two ways: access a few free scenarios right away, or start a 3-day free trial of the full version by subscribing. No charges will be made if you cancel before the trial ends — you can unsubscribe anytime.",
      },
      {
        question: "Which languages are supported?",
        // answer: "Saynest Lab currently supports seven major European languages: English, Spanish, German, French, Italian, Portuguese, and Dutch — with more coming soon.",
        answer: "Saynest Lab currently supports four European languages: English, Spanish, German, Bulgarian — with more coming soon.",
      },
      {
        question: "Can I track my progress?",
        answer:
          "Yes, you can view a detailed history for each completed scenario, as well as an overall progress page that gives you a clear summary of your improvement over time.",
      },
    ]

    return { faqs, openIndex, toggle }
  },
})
</script>
