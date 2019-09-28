<template>
  <div class="recipe-display">
    <img class="recipe-display__image" src="@/../public/data/images/recipe-1.jpeg" alt="Recipe Image">
    <div class="recipe-display__content">
      <a href="https://www.google.com" class="recipe-display__link">
        <h1 class="heading-1" v-text="'Some Recipe Title'" />
      </a>
      <h3 class="heading-3" v-text="'Time: 40 minutes'" />
      <ul class="recipe-display__ingredients dot-list">
        <li class="recipe-display__ingredient">Ingredient 1</li>
        <li class="recipe-display__ingredient">Ingredient 2</li>
        <li class="recipe-display__ingredient">Ingredient 3</li>
        <li class="recipe-display__ingredient">Ingredient 4</li>
        <li class="recipe-display__ingredient">Ingredient 5</li>
        <li class="recipe-display__ingredient">Ingredient 6</li>
      </ul>

      <ul class="recipe-display__instructions paren-list">
        <li class="recipe-display__instructions--step-1">Step 1</li>
        <li class="recipe-display__instructions--step-2">Step 2</li>
        <li class="recipe-display__instructions--step-3">Step 3</li>
        <li class="recipe-display__instructions--step-4">Step 4</li>
        <li class="recipe-display__instructions--step-5">Step 5</li>
        <li class="recipe-display__instructions--step-6">Step 6</li>
        <li class="recipe-display__instructions--step-7">Step 7</li>
        <li class="recipe-display__instructions--step-8">Step 8</li>
        <li class="recipe-display__instructions--step-9">Step 9</li>
        <li class="recipe-display__instructions--step-10">Step 10</li>
      </ul>

      <a href="#" class="recipe-display__edit">Edit</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {

  },
};
</script>

<style lang="scss">
  .recipe-display {
    &__image {

    }
    &__content {
      margin: 2rem;
    }
    &__link {

    }
    &__ingredients {

    }
    &__ingredient{

    }
    &__instructions{

    }
    &__instruction{

    }

    ul {
      margin: 2rem 0;
      &:first-of-type {
        margin-top: 0;
      }
    }
  }
</style>
