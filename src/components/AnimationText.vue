<template>
  <div class="hero bg-blue-500 text-white p-20">
    <h1 class="text-4xl mb-8">Welcome to Our Website!</h1>
    <h2 class="text-2xl">
      {{ displayText }}
      <span v-if="showCursor" class="cursor">|</span>
    </h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: ['We are awesome.', 'Join our community.', 'Let’s explore together.'],
      displayText: '',
      currentMessageIndex: 0,
      currentLetterIndex: 0,
      typing: true,
      showCursor: true
    }
  },
  mounted() {
    this.typeMessage()
    setInterval(() => {
      this.showCursor = !this.showCursor
    }, 500)
  },
  methods: {
    typeMessage() {
      const currentMessage = this.messages[this.currentMessageIndex]
      if (this.typing) {
        if (this.currentLetterIndex < currentMessage.length) {
          this.displayText += currentMessage[this.currentLetterIndex]
          this.currentLetterIndex++
          setTimeout(this.typeMessage, 100)
        } else {
          this.typing = false
          setTimeout(this.typeMessage, 2000) // Wait 2 seconds before deleting
        }
      } else {
        if (this.currentLetterIndex > 0) {
          this.displayText = currentMessage.substring(0, this.currentLetterIndex - 1)
          this.currentLetterIndex--
          setTimeout(this.typeMessage, 100)
        } else {
          this.typing = true
          this.currentMessageIndex = (this.currentMessageIndex + 1) % this.messages.length
          setTimeout(this.typeMessage, 500)
        }
      }
    }
  }
}
</script>

<style scoped>
.cursor {
  animation: blink 0.5s infinite;
}

@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
