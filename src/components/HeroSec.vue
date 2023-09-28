<template>
  <div
    v-for="item in apiData"
    :key="item.id"
    :style="{ backgroundImage: `url(${item.bg_image})` }"
    class="bg-white bg-no-repeat bg-fixed bg-cover bg-center"
  >
    <!-- Header HERE -->

    <!-- Hero Section Here -->
    <div class="relative isolate px-6 pt-14 lg:px-8 bg-red-cargo bg-opacity-50">
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div class="text-center">
          <h1 class="capitalize text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {{ item.main_title }}
          </h1>
          <p class="mt-6 text-lg leading-8 text-gray-900">
            {{ item.main_description }}
          </p>

          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              class="flex items-center rounded-full bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <p>{{ item.cta }}</p>
              <ArrowDownIcon class="h-4 w-4 text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ArrowDownIcon } from '@heroicons/vue/24/outline'
import getData from '@/utils/fetchAPI'

export default {
  name: 'HeroSection',
  components: {
    ArrowDownIcon
  },
  data() {
    return {
      apiData: []
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      try {
        const tab = 'home' // Replace with the actual tab name you want to fetch
        const result = await getData(tab)
        // console.log(result)
        this.apiData = result
        // console.log(result);
      } catch (error) {
        console.error(error)
      }
    },
    /* ============  Generate Image Link combine with data ============ */
    generateImageLink(imageId) {
      return `https://drive.google.com/uc?export=view&id=${imageId}`
    }
  }
}
</script>

<style>
.bg-red-cargo {
  background: var(--bg-red-cargo-op);
}
</style>
