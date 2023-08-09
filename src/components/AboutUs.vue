<template>
  <div>
    <section class="value section" id="value">
      <div class="value__container container grid">
        <div class="value__images">
          <div class="value__orbe"></div>

          <div class="value__img">
            <img src="https://drive.google.com/uc?id=1smU4lS3ce-VuS_HiHb_IKSNjfqicINiO" alt="" />
          </div>
        </div>

        <div class="value__content">
          <div class="value__data">
            <span class="section__subtitle">Our Value</span>
            <h2 class="section__title">Value We Give To You<span>.</span></h2>
            <p class="value__description">
              We always ready to help by providing the best service for you. We believe a satisfied
              customer is the best business strategy of all.
            </p>
          </div>

          <div class="value__accordion">
            <div class="value__accordion-item">
              <header class="value__accordion-header">
                <i class="bx bx-shield-quarter value__accordion-icon"></i>
                <h3 class="value__accordion-title">Efficient</h3>
                <div class="value__accordion-arrow">
                  <i class="bx bxs-down-arrow"></i>
                </div>
              </header>

              <div class="value__accordion-content">
                <p class="value__accordion-description">
                  We handle our clients professionally and put 100% of our effort into every service
                  we provide using the knowledge and skills we have in this area of the logistics
                  industry.
                </p>
              </div>
            </div>

            <div class="value__accordion-item">
              <header class="value__accordion-header">
                <i class="bx bxs-minus-square value__accordion-icon"></i>
                <h3 class="value__accordion-title">Guaranted for Best Services</h3>
                <div class="value__accordion-arrow">
                  <i class="bx bxs-down-arrow"></i>
                </div>
              </header>

              <div class="value__accordion-content">
                <p class="value__accordion-description">
                  We will make certain that we recruit qualified, industrious, creative,
                  customer-focused individuals that are eager to contribute to the success of our
                  company (owner, workforce and customers).
                </p>
              </div>
            </div>

            <div class="value__accordion-item">
              <header class="value__accordion-header">
                <i class="bx bxs-bar-chart-square value__accordion-icon"></i>
                <h3 class="value__accordion-title">Provide Best Prices</h3>
                <div class="value__accordion-arrow">
                  <i class="bx bxs-down-arrow"></i>
                </div>
              </header>

              <div class="value__accordion-content">
                <p class="value__accordion-description">
                  Price we provides is the best for you, we guarantee no price changes on every
                  service that we provide.
                </p>
              </div>
            </div>

            <div class="value__accordion-item">
              <header class="value__accordion-header">
                <i class="bx bxs-check-square value__accordion-icon"></i>
                <h3 class="value__accordion-title">We protect your Privacy</h3>
                <div class="value__accordion-arrow">
                  <i class="bx bxs-down-arrow"></i>
                </div>
              </header>

              <div class="value__accordion-content">
                <p class="value__accordion-description">
                  In every CargoFast service, we care about your privacy and we will take 100%
                  responsible for it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

export default {
  name: 'AboutUs'
}

const accordionItems = document.querySelectorAll('.value__accordion-item')

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector('.value__accordion-header')

  accordionHeader.addEventListener('click', () => {
    const openItem = document.querySelector('.accordion-open')

    toggleItem(item)

    if (openItem && openItem !== item) {
      toggleItem(openItem)
    }
  })
})

const toggleItem = (item) => {
  const accordionContent = item.querySelector('.value__accordion-content')

  if (item.classList.contains('accordion-open')) {
    accordionContent.removeAttribute('style')
    item.classList.remove('accordion-open')
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + 'px'
    item.classList.add('accordion-open')
  }
}
</script>

<style scoped></style>
