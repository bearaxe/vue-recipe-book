<template>
  <div class="recipe-card">
    <img :src="displayData.image" alt="">
    <div class="recipe-card__content">
      <h2>{{ displayData.title }}</h2>
      <h3>{{ displayData.time }}</h3>
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

  &__content {
    padding: 1.5rem 2rem;
  }
}
</style>
