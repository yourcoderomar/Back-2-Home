<template>
  <q-page class="flex flex-center">
    <div class="container">
      <div class="area area-1" data-aos="fade-up">
        <div class="placeholder"><h1>We never Stop Caring.</h1></div>
        <img src="images/search.jpg" alt="Hero image" />

      </div>
      <router-link to="/OurPlans" class="area area-2 link" data-aos="fade-up" data-aos-delay="100">
        <div class="placeholder"><h1>Our plans</h1></div>

      </router-link>

      <div class="area area-3" data-aos="fade-up" data-aos-delay="200">
        <div class="placeholder"><h1>Recently found</h1></div>
      </div>
      <router-link to="ReportMissing" class="area area-4 link" data-aos="fade-up" data-aos-delay="300">
        <div class="placeholder"><h1>Report a missing person</h1></div>
      </router-link>
      <div class="area area-5" data-aos="fade-up" data-aos-delay="400">
        <div class="placeholder"><h1>Search for a missing person</h1></div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  mounted() {
    // Initialize AOS
    this.$nextTick(() => {
      this.$root.AOS.refresh()
    })
  }
}
</script>

<style lang="scss" scoped>
@import "../css/TopSection.scss";
.link {
  display: block;  /* Make it behave like a div */
  text-decoration: none;  /* Remove underline */
  color: inherit;  /* Keep text color */
}

</style>