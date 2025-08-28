<template>
  <main class="min-h-screen bg-white text-gray-900 px-4 py-16 mt-[64px]">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Terms & Conditions for Saynest Lab</h1>
      <p class="text-sm text-gray-500 mb-10">Last updated: July 12, 2025</p>

      <div class="space-y-8 text-[1.05rem] leading-relaxed text-gray-700">
        <section>
          <h2 class="text-xl font-semibold text-gray-900 mb-2">1. Introduction</h2>
          <p>
            Welcome to Saynest Lab! These Terms & Conditions (“Terms”) govern your use of our AI-powered English speaking practice platform
            (“Service”). By accessing or using Saynest Lab, you agree to these Terms. Operator: Andrii Mysliuk, acting as an individual
            entrepreneur (Sole Proprietor) under the working name Saynest Lab.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 mb-2">2. Eligibility</h2>
          <p>Our Service is available to all users aged 18 and above. By using the Service, you confirm that you meet this requirement.</p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 mb-2">3. Your Responsibilities</h2>
          <p>You agree to use the Service only for lawful purposes and not to:</p>
          <ul class="list-disc list-inside mt-2 space-y-1">
            <li>Violate any applicable laws or regulations.</li>
            <li>Infringe on our rights or the rights of other users.</li>
            <li>Attempt to disrupt or interfere with the Service’s security or functionality.</li>
          </ul>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 mb-2">4. Payments and Free Trial</h2>
          <p>Our Service is provided on a subscription basis:</p>
          <ul class="list-disc list-inside mt-2 space-y-1">
            <li>€19.99/month subscription fee.</li>
            <li>3-day free trial, which includes: 20 sessions, 20 reviews, and 20 tasks.</li>
            <li>After the trial, the subscription automatically starts unless canceled before the trial ends.</li>
            <li>We reserve the right to update pricing in the future as the product evolves.</li>
          </ul>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 mb-2">5. Disclaimer & Limitation of Liability</h2>
          <p>
            Saynest Lab is provided “as is” without warranties of any kind. We do our best to ensure the Service works smoothly, but we
            cannot guarantee uninterrupted availability or that it will meet your specific needs.
          </p>
          <p class="mt-2">
            To the maximum extent permitted by law, we disclaim liability for any indirect, incidental, or consequential damages arising
            from your use of the Service.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 mb-2">6. Account Suspension and Data Deletion</h2>
          <p>
            We reserve the right to suspend or limit access to your account if you violate these Terms, misuse the Service, or engage in
            activities that breach applicable laws or our policies. In most cases, accounts are not permanently deleted but may be
            temporarily deactivated or restricted.
          </p>
          <p class="mt-2">
            You also have the ability to permanently delete your personal usage history, including AI-generated conversation data and any
            stored audio recordings, at any time via the Service interface. However, this does not affect your account status or any active
            subscriptions, which remain governed by these Terms and our billing policies.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 mb-2">7. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. We’ll do our best to notify you about significant changes. Continued use of the
            Service after changes means you agree to the updated Terms.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-gray-900 mb-2">8. Contact</h2>
          <p>
            For any questions about these Terms, please reach out to us at:
            <a href="mailto:saynest.labs@gmail.com" class="text-indigo-700 hover:underline"> saynest.labs@gmail.com </a>
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
      title: "Terms & Conditions – Saynest Lab",
      description:
        "Read the Terms & Conditions for Saynest Lab. Learn about user eligibility, responsibilities, subscription payments, liability limitations, and account policies.",
    })

    return {}
  },
})
</script>
