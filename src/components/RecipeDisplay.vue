<template>
  <div class="recipe-display">
    <img class="recipe-display__image" :src="testImg" alt="Recipe Image">
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
        <template  v-for="n in 10">
          <li :key="`ins${n}`" class="recipe-display__instruction">
            <span class="number" v-text="n + ') '" />
            {{ testText }}
          </li>
        </template>
      </ul>

      <a href="#" class="recipe-display__edit">Edit</a>
    </div>
  </div>
</template>

<script>
import image from '@/../public/data/images/recipe-1.jpeg';

export default {
  props: {

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
