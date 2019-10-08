<template>
  <div class="recipe-card">
    <img class="recipe-card__image" :src="displayData.image" alt="">
    <div class="recipe-card__content">
      <h2 class="recipe-card__title">{{ displayData.title }}</h2>
      <h3 class="recipe-card__time">{{ displayData.time }}</h3>
    </div>
  </div>
</template>

<script>
import testData from '@/../public/data/recipes';
import image1 from '@/../public/data/images/recipe-1.jpg';
import image2 from '@/../public/data/images/recipe-2.jpg';

const hackyTest = [image1, image2];

export default {
  data() {
    return {
      displayData: {},
      dataId: Math.round(Math.random()),
    };
  },
  mounted() {
    this.displayData = {
      ...testData.recipes[this.dataId],
      image: hackyTest[this.dataId],
    };
  },
};
</script>

<style lang="scss">
.recipe-card {
  border-radius: 2rem;
  margin: 2rem;
  overflow: hidden;
  position: relative;

  box-shadow: $box-shadow-default;
  transition: all .3s;

  &__content {
    position: absolute;
    bottom: 2rem;
  }

  &__title,
  &__time {
    background: $color-accent-medium;
    clip-path: polygon(0 0, 95% 0, 100% 100%, 0 100%);
    margin-bottom: .5rem;
    max-width: 25rem;
    padding: .5rem 2rem;
  }

  &:hover {
    transform: scale(1.05);
  }
}
</style>
