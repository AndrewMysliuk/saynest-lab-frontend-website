<template>
  <header class="w-full border-b border-gray-200 bg-white fixed top-0 left-0 right-0 z-50 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
      <div class="flex items-center space-x-10">
        <button aria-label="Go to top" class="text-xl font-bold text-[#5A3FFF] focus:outline-none" @click="scrollToTop">Saynest Lab</button>

        <nav class="hidden lg:flex items-center space-x-8 text-base text-gray-700 font-medium">
          <NuxtLink
            to="/"
            :class="
              isActive('/')
                ? 'border-b-2 border-gray-900'
                : 'border-b-2 border-transparent hover:border-gray-900 hover:text-gray-900 transition'
            "
          >
            Home
          </NuxtLink>

          <NuxtLink
            to="/pricing"
            :class="
              isActive('/pricing')
                ? 'border-b-2 border-gray-900'
                : 'border-b-2 border-transparent hover:border-gray-900 hover:text-gray-900 transition'
            "
          >
            Pricing
          </NuxtLink>

          <div class="relative" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
            <button
              :class="
                isLegalActive()
                  ? 'border-b-2 border-gray-900 text-gray-900'
                  : 'border-b-2 border-transparent hover:border-gray-900 hover:text-gray-900 transition'
              "
            >
              Legal
            </button>

            <Transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 -translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-2"
            >
              <div v-if="isOpen" class="absolute left-0 mt-2 flex flex-col bg-white border border-gray-200 rounded-md shadow-md w-48 z-50">
                <NuxtLink
                  href="/terms-and-conditions"
                  :class="isActive('/terms-and-conditions') ? 'bg-gray-100' : 'hover:bg-gray-100'"
                  class="px-4 py-3 text-base text-gray-700"
                >
                  Terms & Conditions
                </NuxtLink>
                <NuxtLink
                  href="/privacy-policy"
                  :class="isActive('/privacy-policy') ? 'bg-gray-100' : 'hover:bg-gray-100'"
                  class="px-4 py-3 text-base text-gray-700"
                >
                  Privacy Policy
                </NuxtLink>
                <NuxtLink
                  href="/refund-policy"
                  :class="isActive('/refund-policy') ? 'bg-gray-100' : 'hover:bg-gray-100'"
                  class="px-4 py-3 text-base text-gray-700"
                >
                  Refund Policy
                </NuxtLink>
              </div>
            </Transition>
          </div>
        </nav>
      </div>

      <div class="hidden lg:flex items-center gap-3">
        <a
          href="https://app.saynestlab.com/auth/login"
          rel="noopener noreferrer"
          class="text-sm px-5 py-2.5 rounded-md font-semibold border border-gray-300 text-gray-800 hover:bg-gray-50 transition"
        >
          Log in
        </a>
        <a
          href="https://app.saynestlab.com/auth/signup"
          rel="noopener noreferrer"
          class="text-sm px-5 py-2.5 rounded-md font-semibold bg-[#5A3FFF] text-white hover:bg-[#4C35E6] transition"
        >
          Sign up
        </a>
      </div>

      <div class="lg:hidden">
        <button aria-label="Open navigation menu" @click="toggleMobileMenu" class="text-gray-700 focus:outline-none">
          <i class="fas fa-bars text-2xl"></i>
        </button>
      </div>
    </div>

    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="isMobileMenuOpen" class="absolute top-16 left-0 w-full bg-white shadow-md border-t border-gray-200 z-40 lg:hidden">
        <div class="px-4 pb-4">
          <nav class="flex flex-col space-y-3 text-base text-gray-700 font-medium pt-4">
            <NuxtLink href="/" class="hover:text-gray-900" @click="closeMobileMenu">Home</NuxtLink>
            <NuxtLink href="/pricing" class="hover:text-gray-900" @click="closeMobileMenu">Pricing</NuxtLink>
            <NuxtLink href="/terms-and-conditions" class="hover:text-gray-900" @click="closeMobileMenu">Terms & Conditions</NuxtLink>
            <NuxtLink href="/privacy-policy" class="hover:text-gray-900" @click="closeMobileMenu">Privacy Policy</NuxtLink>
            <NuxtLink href="/refund-policy" class="hover:text-gray-900" @click="closeMobileMenu">Refund Policy</NuxtLink>
          </nav>

          <div class="mt-4 grid grid-cols-2 gap-3">
            <a
              href="https://app.saynestlab.com/auth/login"
              rel="noopener noreferrer"
              class="text-center border border-gray-300 text-gray-800 px-4 py-2.5 rounded-md font-semibold hover:bg-gray-50 transition"
              @click="closeMobileMenu"
            >
              Log in
            </a>
            <a
              href="https://app.saynestlab.com/auth/signup"
              rel="noopener noreferrer"
              class="text-center bg-[#5A3FFF] text-white px-4 py-2.5 rounded-md font-semibold hover:bg-[#4C35E6] transition"
              @click="closeMobileMenu"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import { useRoute } from "vue-router"

export default defineComponent({
  setup() {
    const route = useRoute()
    const isOpen = ref(false)
    const isMobileMenuOpen = ref(false)
    let timeout: ReturnType<typeof setTimeout> | null = null

    const handleMouseEnter = () => {
      if (timeout) clearTimeout(timeout)
      isOpen.value = true
    }

    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value
    }

    const handleMouseLeave = () => {
      timeout = setTimeout(() => {
        isOpen.value = false
      }, 300)
    }

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }

    const normalize = (p: string) => (p.endsWith("/") && p !== "/" ? p.slice(0, -1) : p)

    const isActive = (path: string) => normalize(route.path) === normalize(path)

    const isLegalActive = () => {
      return ["/terms-and-conditions", "/privacy-policy", "/refund-policy"].some((p) => isActive(p))
    }

    const closeMobileMenu = () => {
      isMobileMenuOpen.value = false
    }

    return {
      isOpen,
      isMobileMenuOpen,
      isActive,
      isLegalActive,
      handleMouseEnter,
      handleMouseLeave,
      scrollToTop,
      toggleMobileMenu,
      closeMobileMenu,
    }
  },
})
</script>
