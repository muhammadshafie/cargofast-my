<template>
  <div>
    <header class="header" id="header">
      <nav class="nav container">
        <a href="" class="nav__logo"> CargoFast <img src="../assets/img/icon.png" alt="" /> </a>

        <div class="nav__menu">
          <ul class="nav__list">
            <li class="nav__item">
              <a href="#home" class="nav__link active-link">
                <i class="bx bxs-home-alt-2"></i>
                <span>Home</span>
              </a>
            </li>

            <li class="nav__item">
              <a href="#gallery" class="nav__link">
                <i class="bx bx-images"></i>
                <span>Our Gallery</span>
              </a>
            </li>

            <li class="nav__item">
              <a href="#service" class="nav__link">
                <i class="bx bxs-ship"></i>
                <span>Our Services</span>
              </a>
            </li>

            <li class="nav__item">
              <a href="/about" class="nav__link">
                <i class="bx bxs-award"></i>
                <span>About Us</span>
              </a>
            </li>

            <li class="nav__item">
              <a href="#contact" class="nav__link">
                <i class="bx bxs-phone"></i>
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>

        <!---Theme change button--->
        <i class="bx bx-moon change-theme" id="theme-button"></i>

        <a
          href="https://api.whatsapp.com/send?phone=60179349794&text=Hi%20CargoFast,%20I%20would%20like%20to%20have%20a%20quotation%20for%20your%20services"
          target="_blank"
          class="button nav__button"
        >
          Whatsapp Now
        </a>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}

window.addEventListener('scroll', function () {
  var header = document.querySelector('.header')
  header.classList.toggle('scroll-header', scrollY > 50)
})
</script>

<style lang="scss" scoped></style>
