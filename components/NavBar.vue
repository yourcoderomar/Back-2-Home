<template>
  <header>
  <Transition name="fade-slide">
    <StickyNav />
  </Transition>
    <div class="header-title">
      <router-link to="/section-home" class="link">
        <img src="/images/logo.png" alt="Logo" class="logo" />
      </router-link>
    </div>

    <nav>
      <ul>
        <li class="hide-on-desktop">
          <div class="search-container">
            <q-icon name="search" class="search-icon" />
            <q-input v-model="searchQuery" class="search-box" placeholder="Search..." dense standout />
          </div>
        </li>

        <!-- Get Help Dropdown -->
        <li class="dropdown" @click.stop="toggleDropdown('help')">
          <span>
            Get help
            <q-icon name="arrow_right" class="arrow-icon" :class="{ rotated: openDropdown === 'help' }" />
          </span>
          <ul v-show="openDropdown === 'help'" class="dropdown-menu">
            <li><router-link to="/">Being missing</router-link></li>
            <li><router-link to="/missingperson">My loved ones are missing</router-link></li>
            <li><router-link to="/ReportMissing">Report a missing person</router-link></li>
          </ul>
        </li>

        <!-- Help Us Find Dropdown -->
        <li class="dropdown" @click.stop="toggleDropdown('find')">
          <span>
            Help us find
            <q-icon name="arrow_right" class="arrow-icon" :class="{ rotated: openDropdown === 'find' }" />
          </span>
          <ul v-show="openDropdown === 'find'" class="dropdown-menu">
            <li><router-link to="/ReportMissing">File a report</router-link></li>
            <li><router-link to="/missingperson">Find a missing person</router-link></li>
          </ul>
        </li>

        <li>
          <router-link to="/SupportUS" class="right_nav">
            Support us 
            <q-icon name="arrow_right" class="arrow-icon" />
          </router-link>
        </li>
        <li>
          <router-link to="/aboutus" class="right_nav">
            About us 
            <q-icon name="arrow_right" class="arrow-icon" />
          </router-link>
        </li>
        <li>
          <router-link to="/donation" class="donate-btn">
            <q-icon name="monetization_on" /> Donation
          </router-link>
        </li>
        <li class="hide-on-desktop">
          <router-link to="/" class="phone-hover">
            <q-icon name="phone" /> Contact us
          </router-link>
        </li>
      </ul>
    </nav>

    <div class="header-right">
      <div class="search-container hide-on-mobile">
        <q-icon name="search" class="search-icon" />
        <q-input v-model="searchQuery" class="search-box" placeholder="Search..." dense standout />
      </div>
      <div class="user-dropdown">
        <q-icon name="account_circle" class="user-logo" />
      </div>
      <div>
        <router-link to="/" class="phone-hover hide-on-mobile">
          <q-icon name="phone" /> Contact us
        </router-link>
        <button class="menu-btn hide-on-desktop" @click="toggleMenu">☰</button>
      </div>
    </div>
    <BurgerMenu ref="burgerMenu" />
  </header>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import BurgerMenu from "./BurgerMenu.vue";
import StickyNav from "./StickyNav.vue";

export default {
  components: {
    BurgerMenu,
    StickyNav
  },
  setup() {
    const searchQuery = ref("");
    const burgerMenu = ref(null);
    const openDropdown = ref(null);

    const toggleMenu = () => {
      if (burgerMenu.value) {
        burgerMenu.value.toggleMenu();
      }
    };

    const toggleDropdown = (menu) => {
      openDropdown.value = openDropdown.value === menu ? null : menu;
    };

    const closeDropdown = (event) => {
      if (!event.target.closest(".dropdown")) {
        openDropdown.value = null;
      }
    };

    onMounted(() => {
      document.addEventListener("click", closeDropdown);
    });

    onUnmounted(() => {
      document.removeEventListener("click", closeDropdown);
    });

    return {
      searchQuery,
      toggleMenu,
      burgerMenu,
      openDropdown,
      toggleDropdown
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../css/NavBar.scss";

.menu-btn {
  background: none;
  border: none;
  color: $black;
  font-size: 24px;
  cursor: pointer;
}

/* Arrow icon rotation */
.arrow-icon {
  transition: transform 0.3s ease;
}

.arrow-icon.rotated {
  transform: rotate(90deg);
}

/* Dropdown styling */
.dropdown {
  position: relative;
  cursor: pointer;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 0;
  margin: 0;
  min-width: 200px;
  z-index: 10;
}

.dropdown-menu li span {
  display: block;
  padding: 10px 15px;
  text-decoration: none;
  color: #49596B;
  font-weight: 500;
}

.dropdown-menu li span:hover {
  background: #f2f2f2;
}

/* Transition Effects */
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-slide-enter-from, .fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
