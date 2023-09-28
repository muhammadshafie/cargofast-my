<template>
  <div>
    <section class="pt-[72px] md:pt-[80px] mb-[80px] md:mb-[60px]">
      <div class="mx-auto max-w-6xl lg:px-0 md:px-0 px-6">
        <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <h3
              class="bg-red-cargo inline-block px-3 py-px mb-4 text-xs font-semibold uppercase rounded-full"
            >
              {{ data.section_title }}
            </h3>
          </div>
          <h2
            class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
          >
            <span class="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="27df4f81-c854-45de-942a-fe90f7a300f9"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7"></circle>
                  </pattern>
                </defs>
                <rect
                  fill="url(#27df4f81-c854-45de-942a-fe90f7a300f9)"
                  width="52"
                  height="24"
                ></rect>
              </svg>
              <h2 class="relative">{{ data.section_subtitle }}</h2>
            </span>
          </h2>
          <h3 class="text-base text-gray-700 md:text-lg">
            {{ data.section_description }}
          </h3>
        </div>
        <div class="grid max-w-screen-lg gap-8 row-gap-10 mx-auto lg:grid-cols-2">
          <div
            v-for="(item, index) in apiData"
            :key="index"
            class="flex flex-col max-w-md sm:mx-auto border-2 border-blue-400 rounded-xl p-4"
          >
            <div class="flex flex-row items-center">
              <div
                class="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50 mr-4"
              >
                <component :is="getIconComponent(item.icon)" class="h-6 w-6 text-gray-900" />
              </div>
              <div>
                <h6 class="mb-3 text-xl font-bold leading-5">{{ item.section_title }}</h6>
              </div>
            </div>
            <div>
              <h3 class="mb-3 text-sm text-gray-900">
                {{ item.section_description }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import getData from '@/utils/fetchAPI'
import * as HeroIcons from '@heroicons/vue/24/outline'

export default {
  name: 'AboutUs',
  props: {
    data: Object
  },
  data() {
    return {
      apiData: []
    }
  },
  methods: {
    async fetchData() {
      try {
        const tab = 'about_us' // Replace with the actual tab name you want to fetch
        const result = await getData(tab)
        console.log(result)
        this.apiData = result
      } catch (error) {
        console.error(error)
      }
    },
    getIconComponent(iconName) {
      // Find the icon component by name
      return HeroIcons[iconName] || null // Handle the case where the icon is not found
    }
  },
  mounted() {
    this.fetchData()
  }
}
</script>
