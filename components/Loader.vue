<template>
    <div class="loading" v-if="isLoading">
      <svg width="64px" height="48px">
        <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="back"></polyline>
        <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="front"></polyline>
      </svg>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoadingSpinner',
    props: {
      isLoading: {
        type: Boolean,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f2f0e99e;
    z-index: 9999;
  }
  
  .loading svg polyline {
    fill: none;
    stroke-width: 3;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  
  .loading svg polyline#back {
    fill: none;
    stroke: #98a2af;
  }
  
  .loading svg polyline#front {
    fill: none;
    stroke: #2C3539;
    stroke-dasharray: 48, 144;
    stroke-dashoffset: 192;
    animation: dash_682 1.4s linear infinite;
  }
  
  @keyframes dash_682 {
    72.5% {
      opacity: 0;
    }
  
    to {
      stroke-dashoffset: 0;
    }
  }
  </style>