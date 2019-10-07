<template>
  <div class="wrapper">
    <textarea
      class="ingredient-edit__textarea"
      v-text="list"
      name="updatedList"
      id="uList" />
      <list-ingredients :list="list" />
  </div>
</template>

<script>
import ListIngredients from '@/components/ListIngredients.vue';

export default {
  components: {
    ListIngredients,
  },
  props: {
    list: {
      type: Array,
      default() {
        return [
          'ingredient 1',
          'ingredient 2',
          'ingredient 3',
          'ingredient 4',
          'ingredient 5',
          'ingredient 6',
        ];
      },
    },
  },
};
</script>

<style lang="scss">

</style>
