<template>
  <div class="recipe-card">
    <img :src="displayData.image" alt="">
    <h2>{{ displayData.title }}</h2>
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

<style>

</style>
