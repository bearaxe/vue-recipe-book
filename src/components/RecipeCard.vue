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
  margin: 2rem;

  border-radius: 2rem;
  overflow: hidden;
  box-shadow: $box-shadow-default;
  position: relative;
  transition: all .3s;

  &__content {
    position: absolute;
    bottom: 2rem;
  }

  &__title,
  &__time {
    padding: .5rem 2rem;
    background: $color-accent-medium;
    margin-bottom: .5rem;
    clip-path: polygon(0 0, 95% 0, 100% 100%, 0 100%);
    max-width: 25rem;
  }

  &:hover {
    transform: scale(1.05);
  }
}
</style>
