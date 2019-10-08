<template>
  <div class="home">
    <!-- <recipe-display /> -->
    <recipe-gallery />
  </div>
</template>

<script>
// @ is an alias to /src
// import RecipeDisplay from '@/components/RecipeDisplay.vue';
import RecipeGallery from '@/components/RecipeGallery.vue';

export default {
  name: 'home',
  components: {
    // RecipeDisplay,
    RecipeGallery,
  },
};
</script>

<style lang="scss">
  .home {

  }
</style>
