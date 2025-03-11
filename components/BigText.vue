<template>
  <div class="fullscreen-text">
    <span 
      class="glow-text" 
      :class="{ 'fully-visible': isFullyVisible }"
    >
      <span 
        v-for="(char, index) in splitText" 
        :key="index" 
        class="char" 
        :style="{ animationDelay: `${index * 0.1}s` }"
        @mouseenter="hoverLetter" 
        @mouseleave="resetLetter"
      >
        {{ char === " " ? '\u00A0' : char }}
      </span>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "WE NEVER STOP CARING.",
      isFullyVisible: false, // Controls whole-word appearance
    };
  },
  computed: {
    splitText() {
      return this.text.split(""); // Splits text into individual letters
    }
  },
  mounted() {
    // Make the whole sentence appear smoothly after letter animation ends
    setTimeout(() => {
      this.isFullyVisible = true;
    }, this.text.length * 100 + 500); // Adjust timing to match letter animation
  },
  methods: {
    hoverLetter(event) {
      event.target.classList.add("glow-hover");
    },
    resetLetter(event) {
      event.target.classList.remove("glow-hover");
    }
  }
};
</script>

<style scoped>
/* Centering the text */
.fullscreen-text {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70vh;
  background: #f2f0e9;
  color: #2C3539;
  font-size: 10vw;
  font-weight: bold;
  position: relative;
  overflow: hidden;
  text-align: center;
}

/* General text appearance */
.glow-text {
  display: inline-block;
  opacity: 0.3;
  transition: opacity 0.8s ease-in-out;
}

/* When the full text is ready, fade it in */
.glow-text.fully-visible {
  opacity: 1;
}

/* Each letter pops in sequence */
.char {
  display: inline-block;
  opacity: 0;
  transform: scale(0.5);
  animation: popIn 0.4s forwards ease-out;
  transition: text-shadow 0.3s ease-in-out, transform 0.2s ease-in-out;
}

/* Hover effect: only the hovered letter glows */
.char.glow-hover {
  text-shadow: 0 0 15px rgba(44, 53, 57, 0.8);
  transform: scale(1.2);
}

/* Smooth pop-in animation */
@keyframes popIn {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  60% {
    opacity: 1;
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

/* Delay each letter’s appearance */
.char:nth-child(1) { animation-delay: 0.1s; }
.char:nth-child(2) { animation-delay: 0.2s; }
.char:nth-child(3) { animation-delay: 0.3s; }
.char:nth-child(4) { animation-delay: 0.4s; }
.char:nth-child(5) { animation-delay: 0.5s; }
.char:nth-child(6) { animation-delay: 0.6s; }
.char:nth-child(7) { animation-delay: 0.7s; }
.char:nth-child(8) { animation-delay: 0.8s; }
.char:nth-child(9) { animation-delay: 0.9s; }
.char:nth-child(10) { animation-delay: 1s; }
.char:nth-child(11) { animation-delay: 1.1s; }
.char:nth-child(12) { animation-delay: 1.2s; }
.char:nth-child(13) { animation-delay: 1.3s; }
.char:nth-child(14) { animation-delay: 1.4s; }
.char:nth-child(15) { animation-delay: 1.5s; }
.char:nth-child(16) { animation-delay: 1.6s; }
</style>
