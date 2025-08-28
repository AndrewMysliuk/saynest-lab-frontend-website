<template>
  <main class="bg-white text-gray-900 px-4 py-16 min-h-[80dvh] mt-[64px]">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Privacy Policy for Saynest Lab</h1>
      <p class="text-sm text-gray-500 mb-10">Last updated: June 10, 2025</p>

      <div class="space-y-8 text-[1.05rem] leading-relaxed text-gray-700">
        <section>
          <h2 class="text-xl font-semibold text-gray-900 mb-2">1. Introduction</h2>
          <p>
            This Privacy Policy explains how Saynest Lab (operated by Andrii Mysliuk as an individual entrepreneur, registered in Ukraine)
            collects, uses, and protects your personal data when you use our English speaking practice platform (“Service”).
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 mb-2">2. Data We Collect</h2>
          <p>We collect the following data:</p>
          <ul class="list-disc list-inside mt-2 space-y-1">
            <li>Text chat history with the AI interviewer</li>
            <li>Audio recordings of your spoken responses</li>
            <li>Session metadata (scenario, confidence level, errors, time, progress)</li>
            <li>Account identifiers (email address, login via Google, etc.)</li>
          </ul>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 mb-2">3. Purpose of Data Collection</h2>
          <p>We process this data to:</p>
          <ul class="list-disc list-inside mt-2 space-y-1">
            <li>Track your progress and adapt scenarios to your needs</li>
            <li>Provide you with feedback and insights</li>
            <li>Display your interaction history</li>
            <li>Improve the quality and security of the platform</li>
          </ul>
          <p class="mt-2">We do not use your data for AI training unless you explicitly opt in to that feature (not currently enabled).</p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 mb-2">4. Data Storage and Processing</h2>
          <p>
            Text data is stored in MongoDB databases hosted on Google Cloud (Europe-west1 region, Belgium). Audio recordings are stored in
            Google Cloud Storage and accessible via temporary links (up to 5 minutes). All transmissions are secured and encrypted.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 mb-2">5. Data Sharing</h2>
          <p>We may share your data with:</p>
          <ul class="list-disc list-inside mt-2 space-y-1">
            <li>OpenAI (for generating responses and analyzing text)</li>
            <li>Google Cloud (for storage and data processing)</li>
            <li>Paddle (for payment processing, once connected)</li>
          </ul>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 mb-2">6. Data Retention</h2>
          <p>
            Session history (text and audio) is stored until you delete it manually. If you don’t complete a session (no progress saved),
            data is deleted automatically within a few hours.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 mb-2">7. Your Rights</h2>
          <p>At any time, you can:</p>
          <ul class="list-disc list-inside mt-2 space-y-1">
            <li>Delete individual sessions</li>
            <li>Delete your entire interaction history</li>
          </ul>
          <p class="mt-2">You can manage these settings in your user profile.</p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 mb-2">8. Analytics and Marketing</h2>
          <p>
            We use Google Analytics and Hotjar to understand how our Service is used and to improve it. We do not currently use your data
            for marketing communications, but we may offer updates or announcements in the future.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 mb-2">9. Data Location</h2>
          <p>All data is processed and stored in Google Cloud infrastructure in the EU (Belgium).</p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 mb-2">10. Contact</h2>
          <p>
            For questions about this Privacy Policy or data handling, please contact:
            <a href="mailto:saynest.labs@gmail.com" class="text-indigo-700 hover:underline"> saynest.labs@gmail.com </a>
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 mb-2">11. Changes</h2>
          <p>
            We may update this Policy from time to time. If significant changes occur, we’ll do our best to notify you. Continued use of the
            Service after changes means you agree to the updated terms.
          </p>
        </section>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  setup() {
    useSeoHead({
      title: "Privacy Policy – Saynest Lab",
      description:
        "Read the Privacy Policy for Saynest Lab. Learn how we collect, use, store, and protect your data when using our English speaking practice platform.",
    })

    return {}
  },
})
</script>
