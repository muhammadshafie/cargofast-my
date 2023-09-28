<template>
  <div>
    <section id="service" v-if="data.section_id">
      <div class="pt-[72px] md:pt-[80px] mb-[80px] md:mb-[60px]">
        <div
          class="mx-auto max-w-6xl lg:px-0 md:px-0 px-6 mb-8 gap-2 flex-col flex items-start lg:items-center justify-between lg:flex-row"
        >
          <div class="lg:w-3/4">
            <h2 class="text-4xl py-4 md:py-2 text-center md:text-left h2">
              {{ data.section_title }}
            </h2>
            <h3 class="text-base mt-[15px]">
              {{ data.section_description }}
            </h3>
          </div>
          <div class="flex gap-2 mt-[15px]">
            <ArrowLeftIcon
              @click="prevSwiperSlide"
              class="h-10 w-10 text-black rounded-full bg-gray-400 p-3 hover:text-white hover:bg-gray-600"
            />
            <ArrowRightIcon
              @click="nextSwiperSlide"
              class="h-10 w-10 text-black rounded-full bg-gray-400 p-3 hover:text-white hover:bg-gray-600"
            />
          </div>
        </div>
        <swiper
          class="swiper mx-auto max-w-6xl"
          :slides-per-view="1.5"
          :centeredSlides="true"
          :space-between="20"
          :loop="false"
          :breakpoints="{
            '768': {
              slidesPerView: 2.5,
              spaceBetween: 20,
              centeredSlides: false
            },
            '1024': {
              slidesPerView: 4,
              spaceBetween: 30,
              centeredSlides: false
            }
          }"
          @swiper="setSwiperRef"
          @slide-change="updateSwiperIndex"
        >
          <swiper-slide v-for="(item, index) in apiData" :key="index" class="slide pb-6 px-1">
            <div
              class="group relative bg-white overflow-hidden rounded-2xl shadow-md shadow-gray-900"
            >
              <div class="h-[200px] w-full relative overflow-hidden">
                <img
                  :src="generateImageLink(item.service_image)"
                  class="h-full w-full object-cover object-top"
                  :alt="item.service_name"
                />
              </div>
              <div class="p-2">
                <div
                  class="text-3xl font-bold text-black relative w-max after:content-[''] after:bg-black after:absolute after:h-1.5 after:w-10 after:top-1/2 after:right-[-150%]"
                >
                  0{{ index + 1 }}
                </div>
                <div
                  class="bg-black bg-opacity-75 rounded-t-lg bottom-0 text-white left-0 h-full max-h-full overflow-auto p-2 absolute right-0 group-hover:translate-y-0 translate-y-full ease-in-out duration-300"
                >
                  <h3 class="p-4 text-white">
                    {{ item.section_description }}
                  </h3>
                </div>
                <div class="">
                  <h3 class="text-base text-black">{{ item.service_name }}</h3>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'
import getData from '@/utils/fetchAPI'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/vue/24/outline'

import 'swiper/css'
// import 'swiper/css/navigation';

export default {
  name: 'Testing',
  components: {
    Swiper,
    SwiperSlide,
    ArrowRightIcon,
    ArrowLeftIcon
  },
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
        const tab = 'services' // Replace with the actual tab name you want to fetch
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
  },
  mounted() {
    this.fetchData()
  },
  setup() {
    // vertical swiper
    let SwiperRef = null
    const setSwiperRef = (swiper) => {
      SwiperRef = swiper
    }
    const SwiperIndex = ref()
    const updateSwiperIndex = () => {
      SwiperIndex.value = SwiperRef?.activeIndex
    }
    const prevSwiperSlide = () => SwiperRef?.slidePrev()
    const nextSwiperSlide = () => SwiperRef?.slideNext()

    return {
      // modules: [Navigation],

      setSwiperRef,
      SwiperIndex,
      updateSwiperIndex,
      prevSwiperSlide,
      nextSwiperSlide
    }
  }
}
</script>

<style scoped></style>
