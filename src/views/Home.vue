<template>
  <div class="home">
    <recipe-display />
    <div class="recipe-list">Component Recipe List</div>
  </div>
</template>

<script>
// @ is an alias to /src
import RecipeDisplay from '@/components/RecipeDisplay.vue';

export default {
  name: 'home',
  components: {
    RecipeDisplay,
  },
};
</script>

<style lang="scss">
  .home {
    @media only screen and (min-width: $bp-smallest) {
      display: flex;

      > div {
        flex: 1 1 50%;
        &.recipe-display {
          order: 1;
        }
      }
    }
  }
</style>
