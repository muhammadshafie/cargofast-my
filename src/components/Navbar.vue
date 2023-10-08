<template>
  <div>
    <header class="header absolute inset-x-0 top-0 z-50">
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
            v-if="!mobileMenuOpen"
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
            @click.prevent="scrollToSection(item.href)"
            class="text-sm font-semibold leading-6 text-gray-900 cursor-pointer"
            >{{ item.name }}</a
          >
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="https://api.whatsapp.com/send?phone=60179349794&text=Hi%20CargoFast,%20I%20would%20like%20to%20have%20a%20quotation%20for%20your%20services"
            target="_blank"
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
            <img
              class="h-8 w-auto"
              src="../assets/img/logo.png"
              alt="CargoFast (Malaysia) Sdn Bhd"
            />
            <button
              v-if="mobileMenuOpen"
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
                  href="https://api.whatsapp.com/send?phone=60179349794&text=Hi%20CargoFast,%20I%20would%20like%20to%20have%20a%20quotation%20for%20your%20services"
                  target="_blank"
                  class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-green-500 hover:bg-gray-50"
                  >Whatsapp Now</a
                >
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  </div>
</template>

<script>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import {
  Bars3Icon,
  XMarkIcon,
  ArrowDownIcon,
  ChatBubbleOvalLeftIcon
} from '@heroicons/vue/24/outline'

export default {
  name: 'Navbar',
  components: {
    Dialog,
    DialogPanel,
    Bars3Icon,
    XMarkIcon,
    ArrowDownIcon,
    ChatBubbleOvalLeftIcon
  },
  setup() {
    const mobileMenuOpen = ref(false)

    const navigation = [
      { name: 'Gallery', href: '#gallery' },
      { name: 'Services', href: '#service' },
      { name: 'About Us', href: '#about' },
      { name: 'Contact', href: '#contact_us' }
    ]

    const scrollToSection = (hash) => {
      const element = document.querySelector(hash)
      if (element) {
        const top = element.getBoundingClientRect().top + window.pageYOffset - 90
        window.scrollTo({
          top: top,
          behavior: 'smooth'
        })
      }
    }
    return {
      mobileMenuOpen,
      navigation,
      scrollToSection
    }
  }
}
</script>

<style lang="scss" scoped></style>
