<template>
  <ul class="ingredient-list">
    <li
      v-for="(item, index) in list"
      :key="`ingredient-${index}`"
      class="ingredient-list__item"
      v-html="item" />
  </ul>
</template>

<script>
export default {
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
.ingredient-list {
    &__item {
        margin-left: 3.25%;
        &::before {
            content: "• ";
            margin-right: .5vw;
        }
    }
}
</style>
