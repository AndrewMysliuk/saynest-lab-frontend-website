<template>
  <TheHeader />

  <NuxtPage />

  <TheFooter />
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  components: {
    TheHeader: defineAsyncComponent(() => import("~/components/TheHeader.vue")),
    TheFooter: defineAsyncComponent(() => import("~/components/TheFooter.vue")),
  },
})
</script>
