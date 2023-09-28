<script setup>
import { ref, onMounted, computed, onBeforeMount, onUnmounted } from 'vue'
import getData from '@/utils/fetchAPI'

import Navbar from '@/components/Navbar.vue'
import HeroSec from '@/components/HeroSec.vue'
// import ClientSec from '@/components/ClientSec.vue'
import ImageGallery from '@/components/ImageGallery.vue'
import Service from '@/components/Service.vue'
import AboutUs from '@/components/AboutUs.vue'
import ContactUs from '../components/ContactUs.vue'
import FooterSec from '../components/FooterSec.vue'

const apiData = ref([])

async function fetchData() {
  try {
    const tab = 'section_content' // Replace with the actual tab name you want to fetch
    const result = await getData(tab)
    apiData.value = result
    console.log(apiData.value)
  } catch (error) {
    console.error(error)
  }
}

onMounted(fetchData)

// const homeData = computed(() => apiData.value.find((item) => item.section_id === 'home'))
const galleryData = computed(() => apiData.value.find((item) => item.section_id === 'gallery'))
const serviceData = computed(() => apiData.value.find((item) => item.section_id === 'service'))
const aboutData = computed(() => apiData.value.find((item) => item.section_id === 'about'))
const contactData = computed(() => apiData.value.find((item) => item.section_id === 'contact'))

onBeforeMount(() => {
  window.addEventListener('scroll', function () {
    var header = document.querySelector('.header')
    header.classList.toggle('scroll-header', scrollY > 50)
  })
})

// Remember to remove the listener when the component unmounts to prevent memory leaks
onUnmounted(() => {
  window.removeEventListener('scroll', function () {
    var header = document.querySelector('.header')
    header.classList.toggle('scroll-header', scrollY > 50)
  })
})
</script>

<template>
  <Navbar />
  <HeroSec />
  <Service v-if="serviceData" :data="serviceData" />
  <!-- <ClientSec /> -->
  <ImageGallery v-if="galleryData" :data="galleryData" />
  <AboutUs v-if="aboutData" :data="aboutData" />
  <ContactUs v-if="contactData" :data="contactData" />
  <FooterSec />
</template>
