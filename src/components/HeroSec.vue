<template>
  <div
    class="bg-white bg-[url('https://cdn.pixabay.com/photo/2021/09/16/21/27/container-ship-6631117_960_720.jpg')] bg-no-repeat bg-fixed bg-cover bg-center"
  >
    <!-- Header HERE -->

    <!-- Hero Section Here -->
    <div class="relative isolate px-6 pt-14 lg:px-8">
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div class="text-center">
          <h1 class="capitalize text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            your trusted logistics partner
          </h1>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            Effortless Transports, Limitless Reach: Sea, Air, Land – We Deliver Each! Your Moving
            Experts for Home and Cargo, Reliable Logistics, Smoothly on the go!
          </p>

          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              class="flex items-center rounded-full bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <p>Explore Now</p>
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

export default {
  name: 'HeroSection',
  components: {
    ArrowDownIcon
  }
}
</script>
