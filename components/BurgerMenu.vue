<template>
  <div class="vertical-menu" :class="{ 'is-visible': isVisible }">
    <!-- Logo Section -->
    <div class="menu-logo">
      <router-link to="/">
        <img src="/images/logo.png" alt="Logo" class="logo" />
      </router-link>
    </div>

    <button class="close-btn" @click="toggleMenu">✖</button>
    <ul>
      <li>
        <router-link to="/">
          <div class="search-container hide-on-mobile">
            <q-input v-model="searchQuery" class="search-box" placeholder="Search..." dense standout>
              <template v-slot:prepend>
                <q-icon name="search" class="search-icon" />
              </template>
            </q-input>
          </div>
        </router-link>
      </li>
      <li><router-link to="/">Report a missing person</router-link></li>
      <li><router-link to="/">Search for a missing person</router-link></li>
      <li><router-link to="/SupportUS">Recently found</router-link></li>
      <li><router-link to="/SupportUS">Our plans</router-link></li>
      <li><router-link to="/aboutus">About Us</router-link></li>
      <li><router-link to="/SupportUS">Support Us</router-link></li>
      <li><router-link to="/contact">Contact Us</router-link></li>
    </ul>
    <button class="donate-btn">
      <router-link to="/donation">
        <q-icon name="monetization_on" />Donation
      </router-link>
    </button>
  </div>
</template>

<script>
export default {
  name: 'BurgerMenu',
  data() {
    return {
      isVisible: false,
      searchQuery: '',
    };
  },
  methods: {
    toggleMenu() {
      this.isVisible = !this.isVisible;
      document.body.style.overflow = this.isVisible ? 'hidden' : '';
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../css/BurgerMenu.scss";

/* Logo Styling */
.menu-logo {
  text-align: center;
  padding: 20px 0;
}

.logo {
  width: 120px; /* Adjust size as needed */
  height: auto;
}

/* Remove Dropdown Styles */
</style>
