<template>
  <div>
    <section id="service ">
      <div class="pt-[72px] md:pt-[80px] mb-[80px] md:mb-[60px]">
        <div
          class="mx-auto max-w-6xl lg:px-0 md:px-0 px-6 mb-8 gap-2 flex-col flex items-start lg:items-center justify-between lg:flex-row"
        >
          <div class="lg:w-3/4">
            <h2 class="text-4xl py-4 md:py-2 text-center md:text-left h2">Our Services</h2>
            <h3 class="text-base mt-[15px]">
              Streamline Your Supply Chain with Our Logistics Services. As a trusted partner in the
              industry, we offer a wide array of logistic solutions to meet your shipping,
              warehousing, and distribution needs. Explore our comprehensive range of services and
              let us optimize your supply chain for seamless operations and increased efficiency.
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
          <swiper-slide class="slide pb-6 px-1">
            <div
              class="group relative bg-white overflow-hidden rounded-2xl shadow-md shadow-gray-900"
            >
              <div class="h-[200px] w-full relative overflow-hidden">
                <img
                  src="../assets/img/service/service5.jpg"
                  class="h-full w-full object-cover object-top"
                  alt="Image Title"
                />
              </div>
              <div class="p-2">
                <div
                  class="text-3xl font-bold text-black relative w-max after:content-[''] after:bg-black after:absolute after:h-1.5 after:w-10 after:top-1/2 after:right-[-150%]"
                >
                  01
                </div>
                <div
                  class="bg-black bg-opacity-75 rounded-t-lg bottom-0 text-white left-0 h-full max-h-full overflow-auto p-2 absolute right-0 group-hover:translate-y-0 translate-y-full ease-in-out duration-300"
                >
                  <h3 class="p-4 text-white">
                    CargoFast offer freighting for both air & sea freight to Sabah & sarawak (vice
                    versa). We provides a safely ship cargo using LCL Service from East Malaysia to
                    West Malaysia. If shipper does not have enough goods to accommodate in a fully
                    loaded container, CargoFast will arrange with a consolidator to book shipment
                    for your cargo by sharing space with other's cargo container to minimize your
                    cost.
                  </h3>
                </div>
                <div class="">
                  <h3 class="text-base text-black">Air Freight</h3>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="slide pb-6 px-1">
            <div
              class="group relative bg-white overflow-hidden rounded-2xl shadow-md shadow-gray-900"
            >
              <div class="h-[200px] w-full relative overflow-hidden">
                <img
                  src="../assets/img/service/service5.jpg"
                  class="h-full w-full object-cover object-top"
                  alt="Image Title"
                />
              </div>
              <div class="p-2">
                <div
                  class="text-3xl font-bold text-black relative w-max after:content-[''] after:bg-black after:absolute after:h-1.5 after:w-10 after:top-1/2 after:right-[-150%]"
                >
                  01
                </div>
                <div
                  class="bg-black bg-opacity-75 rounded-t-lg bottom-0 text-white left-0 h-full max-h-full overflow-auto p-2 absolute right-0 group-hover:translate-y-0 translate-y-full ease-in-out duration-300"
                >
                  <h3 class="p-4 text-white">
                    CargoFast offer freighting for both air & sea freight to Sabah & sarawak (vice
                    versa). We provides a safely ship cargo using LCL Service from East Malaysia to
                    West Malaysia. If shipper does not have enough goods to accommodate in a fully
                    loaded container, CargoFast will arrange with a consolidator to book shipment
                    for your cargo by sharing space with other's cargo container to minimize your
                    cost.
                  </h3>
                </div>
                <div class="">
                  <h3 class="text-base text-black">Air Freight</h3>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="slide pb-6 px-1">
            <div
              class="group relative bg-white overflow-hidden rounded-2xl shadow-md shadow-gray-900"
            >
              <div class="h-[200px] w-full relative overflow-hidden">
                <img
                  src="../assets/img/service/service5.jpg"
                  class="h-full w-full object-cover object-top"
                  alt="Image Title"
                />
              </div>
              <div class="p-2">
                <div
                  class="text-3xl font-bold text-black relative w-max after:content-[''] after:bg-black after:absolute after:h-1.5 after:w-10 after:top-1/2 after:right-[-150%]"
                >
                  01
                </div>
                <div
                  class="bg-black bg-opacity-75 rounded-t-lg bottom-0 text-white left-0 h-full max-h-full overflow-auto p-2 absolute right-0 group-hover:translate-y-0 translate-y-full ease-in-out duration-300"
                >
                  <h3 class="p-4 text-white">
                    CargoFast offer freighting for both air & sea freight to Sabah & sarawak (vice
                    versa). We provides a safely ship cargo using LCL Service from East Malaysia to
                    West Malaysia. If shipper does not have enough goods to accommodate in a fully
                    loaded container, CargoFast will arrange with a consolidator to book shipment
                    for your cargo by sharing space with other's cargo container to minimize your
                    cost.
                  </h3>
                </div>
                <div class="">
                  <h3 class="text-base text-black">Air Freight</h3>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="slide pb-6 px-1">
            <div
              class="group relative bg-white overflow-hidden rounded-2xl shadow-md shadow-gray-900"
            >
              <div class="h-[200px] w-full relative overflow-hidden">
                <img
                  src="../assets/img/service/service5.jpg"
                  class="h-full w-full object-cover object-top"
                  alt="Image Title"
                />
              </div>
              <div class="p-2">
                <div
                  class="text-3xl font-bold text-black relative w-max after:content-[''] after:bg-black after:absolute after:h-1.5 after:w-10 after:top-1/2 after:right-[-150%]"
                >
                  01
                </div>
                <div
                  class="bg-black bg-opacity-75 rounded-t-lg bottom-0 text-white left-0 h-full max-h-full overflow-auto p-2 absolute right-0 group-hover:translate-y-0 translate-y-full ease-in-out duration-300"
                >
                  <h3 class="p-4 text-white">
                    CargoFast offer freighting for both air & sea freight to Sabah & sarawak (vice
                    versa). We provides a safely ship cargo using LCL Service from East Malaysia to
                    West Malaysia. If shipper does not have enough goods to accommodate in a fully
                    loaded container, CargoFast will arrange with a consolidator to book shipment
                    for your cargo by sharing space with other's cargo container to minimize your
                    cost.
                  </h3>
                </div>
                <div class="">
                  <h3 class="text-base text-black">Air Freight</h3>
                </div>
              </div>
            </div>
          </swiper-slide>
          <!-- <swiper-slide class="service__card slide">
              <img src="../assets/img/service/service1.jpg" alt="" class="service__img" />
              <div class="service__data">
                <h3 class="service__title">RORO Service</h3>
                <p class="service__description">
                  CargoFast is specialize in vehicle shipping from your home, up to destination door
                  We offer service using Roll-On/Roll-Off (RORO) shipment as it designed to carry
                  wheeled cargo such as car, trucks, semi-trailer truck or even motorcycle.
                </p>
              </div>
            </swiper-slide>
            <swiper-slide class="service__card slide">
              <img src="../assets/img/service/service2.jpg" alt="" class="service__img" />
              <div class="service__data">
                <h3 class="service__title">Land Transportation</h3>
                <p class="service__description">
                  CargoFast offer logistics-related transportation services such as truckload and
                  less-than-load (LTL) services that meet logistics needs for regional and domestic
                  shipments that are dependable and efficient.
                </p>
              </div>
            </swiper-slide>
            <swiper-slide class="service__card slide">
              <img src="../assets/img/service/service3.jpg" alt="" class="service__img" />
              <div class="service__data">
                <h3 class="service__title">Households Removal</h3>
                <p class="service__description">
                  CargoFast is committed to offering a Moving Plan that suits the demands of all of
                  its clients We understand that every customer request is unique, therefore we
                  attempt to give a wide range of moving resources to deliver a more profesional
                  moving experience.
                </p>
              </div>
            </swiper-slide>
            <swiper-slide class="service__card slide">
              <img src="../assets/img/service/service4.jpg" alt="" class="service__img" />
              <div class="service__data">
                <h3 class="service__title">Sea Freight</h3>
                <p class="service__description">
                  CargoFast offer freighting for both air & sea freight to Sabah & sarawak (vice
                  versa). We provides a safely ship cargo using LCL Service from East Malaysia to West
                  Malaysia. If shipper does not have enough goods to accommodate in a fully loaded
                  container, CargoFast will arrange with a consolidator to book shipment for your
                  cargo by sharing space with other's cargo container to minimize your cost
                </p>
              </div>
            </swiper-slide> -->
        </swiper>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'
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
