<template>
  <div>
    <section
      class="service w-full relative text-white bg-red-cargo pt-[72px] md:pt-[80px]"
      id="gallery"
      v-if="data.section_id === 'gallery'"
    >
      <div class="mx-auto max-w-6xl lg:px-0 md:px-0 px-6">
        <div class="col-span-full md:col-start-2 md:col-span-5 text-center md:text-left">
          <h2 class="h2 text-white">{{ data.section_subtitle }}</h2>
          <h3 class="relative translate-y-[-0.3em] tracking-[-0.06em] text-[51px]">
            {{ data.section_title }}
          </h3>
          <p class="body-l md:body-xl mt-[15px]">
            {{ data.section_description }}
          </p>
        </div>
      </div>
      <div class="relative pt-[40px] overflow-hidden">
        <ul class="relative flex flex-row w-max z-[2] animate-sustainable">
          <li class="max-w-[2480px]">
            <div class="grid grid-rows-2 grid-flow-col">
              <div
                v-for="(item, i) in apiData"
                :key="i"
                :id="`Gallery_Image-${i}`"
                :class="[
                  '[&:nth-child(9n+2)]:mt-[-80px] mr-[40px] [&:nth-child(9n+1)]:w-[184px] [&:nth-child(9n+1)]:h-[184px] h-[270px] [&:nth-child(9n+1)]:ml-auto [&:nth-child(9n+1)]:pt-[28px] [&:nth-child(9n+5)]:mt-[120px] [&:nth-child(9n+6)]:mt-[40px] [&:nth-child(9n+5)]:h-[184px] [&:nth-child(9n+6)]:h-[184px] [&:nth-child(9n+5)]:w-[184px] [&:nth-child(9n+6)]:w-[184px] [&:nth-child(9n+7)]:mb-0 [&:nth-child(9n+8)]:mb-0 [&:nth-child(9n+7)]:mt-[40px] [&:nth-child(9n+8)]:mt-[-40px] [&:nth-child(9n+7)]:h-[184px] [&:nth-child(9n+8)]:h-[184px] [&:nth-child(9n+7)]:w-[184px] [&:nth-child(9n+8)]:w-[184px] [&:nth-child(9n+9)]:col-span-2 [&:nth-child(9n+9)]:row-span-2 [&:nth-child(9n+9)]:w-[580px] [&:nth-child(9n+9)]:h-[580px]',
                  { 'last:mt-[120px] last:row-span-2': isLastEven }
                ]"
              >
                <a :href="generateImageLink(item.image_url)" data-type="image" class="glightbox">
                  <img
                    :src="generateImageLink(item.image_url)"
                    :alt="`Gallery_Image-${i}`"
                    loading="lazy"
                    class="object-cover w-full h-full rounded-xl aspect-square"
                  />
                </a>
              </div>
            </div>
          </li>
          <li class="max-w-[2480px]" aria-hidden="true">
            <div class="grid grid-rows-2 grid-flow-col">
              <div
                v-for="(item, i) in apiData"
                :key="i"
                :id="`Gallery_Image-${i}`"
                :class="[
                  '[&:nth-child(9n+2)]:mt-[-80px] mr-[40px] [&:nth-child(9n+1)]:w-[184px] [&:nth-child(9n+1)]:h-[184px] h-[270px] [&:nth-child(9n+1)]:ml-auto [&:nth-child(9n+1)]:pt-[28px] [&:nth-child(9n+5)]:mt-[120px] [&:nth-child(9n+6)]:mt-[40px] [&:nth-child(9n+5)]:h-[184px] [&:nth-child(9n+6)]:h-[184px] [&:nth-child(9n+5)]:w-[184px] [&:nth-child(9n+6)]:w-[184px] [&:nth-child(9n+7)]:mb-0 [&:nth-child(9n+8)]:mb-0 [&:nth-child(9n+7)]:mt-[40px] [&:nth-child(9n+8)]:mt-[-40px] [&:nth-child(9n+7)]:h-[184px] [&:nth-child(9n+8)]:h-[184px] [&:nth-child(9n+7)]:w-[184px] [&:nth-child(9n+8)]:w-[184px] [&:nth-child(9n+9)]:col-span-2 [&:nth-child(9n+9)]:row-span-2 [&:nth-child(9n+9)]:w-[580px] [&:nth-child(9n+9)]:h-[580px]',
                  { 'last:mt-[120px] last:row-span-2': isLastEven }
                ]"
              >
                <a :href="generateImageLink(item.image_url)" data-type="image" class="glightbox">
                  <img
                    :src="generateImageLink(item.image_url)"
                    :alt="`Gallery_Image-${i}`"
                    loading="lazy"
                    class="object-cover w-full h-full rounded-xl aspect-square"
                  />
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="absolute left-0 right-0 bottom-0 w-full h-[40%] bg-white z-[1]"></div>
    </section>
  </div>
</template>

<script>
import getData from '@/utils/fetchAPI'

// Import GLightbox
import 'glightbox/dist/css/glightbox.css'
import 'glightbox/dist/js/glightbox.js'
import GLightbox from 'glightbox'

export default {
  name: 'ImageGallery',
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
        const tab = 'gallery' // Replace with the actual tab name you want to fetch
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
    this.fetchData(),
      //lightbox settings
      (this.lightbox = GLightbox({
        selector: '.glightbox'
      }))
  },
  computed: {
    isLastEven() {
      return this.apiData.length % 2 === 0
    }
  }
}
</script>

<style scoped>
.bg-red-cargo {
  background: var(--bg-red-cargo);
}

.animate-reviews-mobile {
  animation: ticker-scroll 120s linear 0s infinite forwards;
}

.animate-sustainable {
  animation: ticker-scroll 100s linear 0s infinite forwards;
}

@keyframes ticker-scroll {
  0% {
    transform: translateZ(0);
  }

  to {
    transform: translate3d(-50%, 0, 0);
  }
}
</style>
