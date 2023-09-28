<template>
  <section class="py-6 bg-red-cargo" id="contact_us" v-if="data.section_id">
    <div
      class="md:container lg:container xl:container flex flex-col items-center justify-center p-4 mx-auto sm:p-10"
    >
      <p class="p-2 text-sm font-medium tracki text-white text-center uppercase">
        {{ data.section_title }}
      </p>
      <h2 class="text-4xl font-bold leadi text-center sm:text-5xl">
        {{ data.section_subtitle }}
      </h2>
      <h3 class="p-2 text-white text-center">{{ data.section_description }}</h3>
      <div class="flex flex-row flex-wrap justify-center mt-8">
        <div
          v-for="(item, index) in apiData"
          :key="index"
          class="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-100 dark:text-gray-800"
        >
          <div class="flex-1 my-4">
            <p class="text-xl font-semibold leadi">{{ item.person_name }}</p>
            <p v-if="item.designation !== null">{{ item.designation }}</p>
          </div>
          <div class="flex items-center justify-center p-3 space-x-3 border-t-2">
            <a
              rel="noopener noreferrer"
              target="_blank"
              :href="`mailto:${item.email}`"
              title="Email"
              v-if="item.email !== null"
            >
              <EnvelopeIcon class="w-6 h-6 text-gray-900 hover:text-red-500" />
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              :href="`tel:+${item.contact_no}`"
              title="Call"
              v-if="item.contact_no !== null"
            >
              <PhoneIcon class="w-5 h-5 text-gray-900 hover:text-violet-400" />
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              :href="`https://api.whatsapp.com/send?phone=${item.contact_no}&text=Hi%20CargoFast,%20I%20would%20like%20to%20have%20a%20quotation%20for%20your%20services`"
              title="Whatsapp"
              v-if="item.contact_no !== null"
            >
              <ChatBubbleOvalLeftIcon class="w-6 h-6 text-gray-900 hover:text-green-500" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { PhoneIcon, EnvelopeIcon, ChatBubbleOvalLeftIcon } from '@heroicons/vue/24/outline'
import getData from '@/utils/fetchAPI'

export default {
  name: 'ContactUs',
  props: {
    data: Object
  },
  components: {
    PhoneIcon,
    EnvelopeIcon,
    ChatBubbleOvalLeftIcon
  },
  data() {
    return {
      apiData: []
    }
  },
  methods: {
    async fetchData() {
      try {
        const tab = 'contact_us' // Replace with the actual tab name you want to fetch
        const result = await getData(tab)
        // console.log(result)
        this.apiData = result
      } catch (error) {
        console.error(error)
      }
    }
  },
  mounted() {
    this.fetchData()
  }
}
</script>
<style scoped>
.first-color {
  color: hsl(228, 66%, 53%);
}
.bg-blue-cargo {
  background-color: #202a44;
}

.bg-red-cargo {
  background: var(--bg-red-cargo);
}
</style>
