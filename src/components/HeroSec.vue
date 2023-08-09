<template>
  <div
    class="bg-white bg-[url('https://cdn.pixabay.com/photo/2021/09/16/21/27/container-ship-6631117_960_720.jpg')] bg-no-repeat bg-fixed bg-cover bg-center"
  >
    <header class="absolute inset-x-0 top-0 z-50">
      <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">CargoFast (Malaysia) Sdn Bhd</span>
            <img
              class="h-8 w-auto"
              src="../assets/img/logo.png"
              alt="CargoFast (Malaysia) Sdn Bhd"
            />
          </a>
        </div>
        <div class="flex lg:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            class="text-sm font-semibold leading-6 text-gray-900"
            >{{ item.name }}</a
          >
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            class="flex items-center rounded-full bg-green-500 px-3.5 py-2.5 text-sm font-semibold leading-6 text-gray-900"
          >
            <p>Whatsapp Now</p>
            <ChatBubbleOvalLeftIcon class="ml-2 h-6 w-6 text-gray-900" />
          </a>
        </div>
      </nav>
      <Dialog as="div" class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
        <div class="fixed inset-0 z-50" />
        <DialogPanel
          class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">CargoFast (Malaysia) Sdn Bhd</span>
              <img
                class="h-8 w-auto"
                src="../assets/img/logo.png"
                alt="CargoFast (Malaysia) Sdn Bhd"
              />
            </a>
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-700"
              @click="mobileMenuOpen = false"
            >
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >{{ item.name }}</a
                >
              </div>
              <div class="py-6">
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-green-500 hover:bg-gray-50"
                  >Whatsapp Now</a
                >
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>

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

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import {
  Bars3Icon,
  XMarkIcon,
  ArrowDownIcon,
  ChatBubbleOvalLeftIcon
} from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Gallery', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'About Us', href: '#' },
  { name: 'Contact', href: '#' }
]

const mobileMenuOpen = ref(false)
</script>
