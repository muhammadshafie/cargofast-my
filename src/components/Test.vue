<template>
  <div>
    <div v-for="(item, index) in items" :key="index" class="accordion-item">
      <div class="accordion-header" @click="toggleAccordion(index)">
        {{ item.title }}
        <span class="accordion-icon">{{ isOpen(index) ? '-' : '+' }}</span>
      </div>
      <div v-if="isOpen(index)" class="accordion-content">
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: null,
      items: [
        {
          title: 'Efficient',
          content:
            'We handle our clients professionally and put 100% of our effort into every service we provide using the knowledge and skills we have in this area of the logistics industry.'
        },
        {
          title: 'Guaranted for Best Services',
          content:
            'We will make certain that we recruit qualified, industrious, creative, customer-focused individuals that are eager to contribute to the success of our company (owner, workforce and customers).'
        },
        {
          title: 'Provide Best Prices',
          content:
            'Price we provides is the best for you, we guarantee no price changes on every service that we provide.'
        },
        {
          title: 'We protect your Privacy',
          content:
            'In every CargoFast service, we care about your privacy and we will take 100% responsible for it.'
        }
      ]
    }
  },
  methods: {
    toggleAccordion(index) {
      if (this.activeIndex === index) {
        this.activeIndex = null
      } else {
        this.activeIndex = index
      }
    },
    isOpen(index) {
      return this.activeIndex === index
    }
  }
}
</script>

<style>
.accordion-item {
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  cursor: pointer;
}

.accordion-content {
  padding: 10px;
  border-top: 1px solid #ccc;
}
</style>
