<template>
  <div class="recipe-list">
    <template v-for="n in 25">
      <recipe-card
        :key="`rcard${n}`"
      />
    </template>
  </div>
</template>

<script>
import RecipeCard from '@/components/RecipeCard.vue';

export default {
  components: {
    RecipeCard,
  },
};
</script>

<style lang="scss">
  .recipe-list {
    margin: 2rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 2rem;
  }
</style>
