<template>
  <div class="recipe-list">
    <div class="scroll-container">
      <template v-for="n in 25">
        <recipe-card
          :key="`rcard${n}`"
        />
      </template>
    </div>
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
    display: flex;
    flex-direction: column;
    @media only screen and (min-width: $bp-smallest) {
      overflow: hidden;
      position: relative;
      .scroll-container {
        position: absolute;
        height: 100%;
        overflow-y: auto;
      }
    }
  }
</style>
