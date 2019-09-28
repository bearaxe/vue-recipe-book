<template>
  <div class="home">
    <recipe-display />
    <recipe-list />
  </div>
</template>

<script>
// @ is an alias to /src
import RecipeDisplay from '@/components/RecipeDisplay.vue';
import RecipeList from '@/components/RecipeList.vue';

export default {
  name: 'home',
  components: {
    RecipeDisplay,
    RecipeList,
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
