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
      // display: grid;
      // grid-template-columns: 1fr 1fr;
      // grid-gap: 1.5rem;

      > div {
        flex: 1 1 50%;
        &.recipe-display {
          order: 1;

          grid-column: 2 / -1;
        }

        &.recipe-list {
          grid-column: 1 / 2;
        }
      }
    }
  }
</style>
