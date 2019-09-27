<template>
  <div id="app">
    <navigation />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';

export default {
  components: {
    Navigation,
  },
};
</script>

<style lang="scss">
@import './scss/base/base';
@import './scss/base/reset';
@import './scss/base/typography';
</style>
