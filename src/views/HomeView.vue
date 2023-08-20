<script setup>
import Navbar from '../components/Navbar.vue'
import HeroSec from '../components/HeroSec.vue'
import ClientSec from '../components/ClientSec.vue'
import ImageGallery from '../components/ImageGallery.vue'
import Service from '../components/Service.vue'
// import AboutUs from '../components/AboutUs.vue'
// import Test from '../components/Test.vue'

window.addEventListener('scroll', function () {
  var header = document.querySelector('.header')
  header.classList.toggle('scroll-header', scrollY > 50)
})
</script>

<template>
  <Navbar />
  <HeroSec />
  <Service />
  <!-- <ClientSec /> -->
  <ImageGallery />
  <!-- <AboutUs /> -->
  <!-- <Test /> -->
</template>
