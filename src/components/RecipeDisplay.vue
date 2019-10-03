<template>
  <div class="recipe-display">
    <img class="recipe-display__image" :src="testImg" alt="Recipe Image">
    <div class="recipe-display__content">
      <a href="https://www.google.com" class="recipe-display__link">
        <h1 class="heading-1" v-text="'Some Recipe Title'" />
      </a>
      <h3 class="heading-3" v-text="'Time: 40 minutes'" />

      <list-ingredients />
      <list-instructions />

      <a href="#edit" class="recipe-display__edit">Edit</a>

      <recipe-display-edit />
    </div>
  </div>
</template>

<script>
import image from '@/../public/data/images/recipe-1.jpg';

import RecipeDisplayEdit from '@/components/RecipeDisplayEdit.vue';
import ListIngredients from '@/components/ListIngredients.vue';
import ListInstructions from '@/components/ListInstructions.vue';

export default {
  components: {
    RecipeDisplayEdit,
    ListIngredients,
    ListInstructions,
  },
  data() {
    return {
      testText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quam temporibus repellendus suscipit doloribus rerum, molestias, et dolore natus nam accusamus fugiat, id ex porro quisquam? Quo necessitatibus architecto asperiores?',
      testImg: image,
    };
  },
};
</script>

<style lang="scss">
  .recipe-display {
    &__content {
      padding: .5rem 1rem;
      margin: 0 auto;
      max-width: 80rem;
    }
    &__link {
      h1 {
        padding-bottom: 0;
        border-bottom: 2px solid $color-accent-medium;
        margin-bottom: 1rem
      }
    }

    ul {
      box-shadow: $box-shadow-default;
      margin: 2rem 0;

      &:first-of-type {
        margin-top: 0;
      }
    }
  }
</style>
