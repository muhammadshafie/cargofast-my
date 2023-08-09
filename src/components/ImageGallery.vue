<template>
  <div>
    <section class="service section" id="gallery">
      <!-- <div class="gallery__container container">
        <span class="section__subtitle">Proven Experience</span>
        <h2 class="section__title">Our Gallery<span>.</span></h2>
      </div> -->

      <!-- <div class="gallery">
        <div class="gallery_img">
          <a
            href="https://drive.google.com/uc?id=1b1ZE7N_Hno8OBQt2n_a03q1MgfmNi0zT"
            class="glightbox"
            data-type="image"
            ><img
              src="https://drive.google.com/uc?id=1b1ZE7N_Hno8OBQt2n_a03q1MgfmNi0zT"
              alt="Image"
          /></a>
        </div>
      </div> -->
      <div class="mx-auto max-w-6xl">
        <div class="grid grid-cols-3 gap-3">
          <div
            v-for="(imagePath, index) in imagePaths"
            :key="index"
            class="[&:nth-child(7n+1)]:row-span-2 [&:nth-child(7n+1)]:col-span-2 relative overflow-hidden"
          >
            <img :src="imagePath.src" alt="Image" class="object-cover h-full w-full rounded-xl" />
          </div>
        </div>
      </div>
      <!-- <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
        <div class="-m-1 flex flex-wrap md:-m-2">
          <div class="flex w-1/2 flex-wrap">
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"
              />
            </div>
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              />
            </div>
          </div>
          <div class="flex w-1/2 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
              />
            </div>
          </div>
        </div>
      </div> -->
    </section>
  </div>
</template>

<script>
// Import GLightbox
import 'glightbox/dist/css/glightbox.css'
import 'glightbox/dist/js/glightbox.js'
import GLightbox from 'glightbox'

export default {
  name: 'ImageGallery',
  data() {
    return {
      imagePaths: [
        { src: '/src/assets/img/gallery/gallery1.jpg' },
        { src: '/src/assets/img/gallery/gallery2.jpg' },
        { src: '/src/assets/img/gallery/gallery3.jpg' },
        { src: '/src/assets/img/gallery/gallery4.jpg' },
        { src: '/src/assets/img/gallery/gallery5.jpg' },
        { src: '/src/assets/img/gallery/gallery6.jpg' },
        { src: '/src/assets/img/gallery/gallery7.jpg' },
        { src: '/src/assets/img/gallery/gallery8.jpg' },
        { src: '/src/assets/img/gallery/gallery9.jpg' },
        { src: '/src/assets/img/gallery/gallery10.jpg' },
        { src: '/src/assets/img/gallery/gallery11.jpg' },
        { src: '/src/assets/img/gallery/gallery12.jpg' }
        // Add the paths for the rest of your images here
      ]
    }
  },
  mounted() {
    //lightbox settings
    this.lightbox = GLightbox({
      selector: '.glightbox'
    })
  }
}
</script>

<style scoped></style>
