<template>
  <div class="q-pa-md container pattern">
    <div class="text-section">
      <h2 ref="heading">Have you seen someone?</h2>
      <q-btn
        label="Report a missing person"
        flat
        to="/ReportMissing"
        class="q-mt-md btn"
      ><q-icon name="arrow_right" class="arrow-icon" /></q-btn>
    </div>
    <q-carousel
      swipeable
      animated
      v-model="slide"
      :autoplay="{ delay: 15000 }"
      ref="carousel"
      infinite
      class="slideshow"
    >
      <q-carousel-slide :name="1">
        <img src="/images/layout1.jpg" class="carousel-img" />
      </q-carousel-slide>
      <q-carousel-slide :name="2">
        <img src="/images/layout1.jpg" class="carousel-img" />
      </q-carousel-slide>
      <q-carousel-slide :name="3">
        <img src="/images/layout1.jpg" class="carousel-img" />
      </q-carousel-slide>
      <q-carousel-slide :name="4">
        <img src="/images/layout1.jpg" class="carousel-img" />
      </q-carousel-slide>

      <template v-slot:control>
        <q-carousel-control
          position="bottom-right"
          :offset="[25, 25]"
          class="q-gutter-xs"
        >
          <q-btn
            push round dense text-color="#49596b" icon="arrow_left"
            @click="$refs.carousel.previous()"
            style="background: #f2f0e9; color: #49596b;"
          />
          <q-btn
            push round dense text-color="#49596b" icon="arrow_right"
            @click="$refs.carousel.next()"
            style="background: #f2f0e9; color: #49596b;"
          />
        </q-carousel-control>
      </template>
    </q-carousel>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default {
  data() {
    return {
      slide: 1,
      autoplay: true
    };
  },
  mounted() {
    // GSAP animation for the heading
    gsap.fromTo(this.$refs.heading, 
      { text: "" }, 
      {
        duration: 3,
        text: "Have you seen someone?",
        ease: "power3.out",
        scrollTrigger: {
          trigger: this.$refs.heading,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none"
        }
      }
    );
  }
};
</script>

<style scoped>
.text-section {
  margin: 0px 15px 10px 15px;
}
.text-section h2 {
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 5px;
  color: #49596b;
}

.btn-1 {
  border-radius: 8px;
  padding: 10px 20px;
  background-color: #49596b;
  color: white;
  transition: background-color 0.3s ease;
  font-size: 18px;
}

.btn-1:hover {
  background-color: white !important;
  color: rgba(233, 39, 104, 0.894);
}

/* From Uiverse.io by themrsami */
.pattern {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0000 18.75%, rgba(73, 89, 107, 0.263) 0 31.25%, #0000 0),
    linear-gradient(45deg, #0000 18.75%, rgba(73, 89, 107, 0.119) 0 31.25%, #0000 0),
    linear-gradient(135deg, #0000 18.75%, rgba(73, 89, 107, 0.11) 0 31.25%, #0000 0),
    linear-gradient(45deg, #0000 18.75%, rgba(73, 89, 107, 0.167) 0 31.25%, #0000 0);

  background-size: 60px 60px;
  background-position:
    0 0,
    0 0,
    30px 30px,
    30px 30px;
  animation: slide 4s linear infinite;
}

@keyframes slide {
  to {
    background-position:
      60px 0,
      60px 0,
      90px 30px,
      90px 30px;
  }
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.text-section {
  width: 40%;
  padding-right: 20px;
}

.slideshow {
  width: 40%;
  height: 300px;
}

.carousel-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}

.q-carousel {
  border-radius: 20px;
  overflow: hidden;
}

@media screen and (max-width: 600px) {
  .container {
    flex-direction: column;
    align-items: center;
  }

  .text-section,
  .slideshow {
    width: 100%;
    text-align: center;
  }
  .btn-1 {
    font-size: 12px;
  }
}
</style>