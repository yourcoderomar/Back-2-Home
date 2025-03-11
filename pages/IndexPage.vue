<template>
  <div>
    <NavBar />
    <q-page-container>
      <BigText />
      <TopSection />
      <section class="q-mb-md">
      <HeroSection title="How Many Go Missing Every Day?" subtitle="" />
      <LostPeopleSection />
      </section>
      <router-view />
      <HaveYouSeen />
    </q-page-container>
    <FooterComponent />
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue';
import TopSection from '../components/TopSection.vue';
import HaveYouSeen from '../components/HaveYouSeen.vue';
import FooterComponent from '../components/Footer.vue';
import LostPeopleSection from 'src/components/LostPeopleSection.vue';
import HeroSection from 'src/components/HeroSection.vue';
import BigText from 'src/components/BigText.vue';
</script>
