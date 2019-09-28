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

<style>

</style>
