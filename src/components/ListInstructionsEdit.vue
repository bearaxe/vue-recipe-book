<template>
  <div class="wrapper">
    <textarea
      class="ingredient-edit__textarea"
      v-text="list"
      name="updatedList"
      id="uList" />
      <list-instructions :list="list" />
  </div>
</template>

<script>
import ListInstructions from '@/components/ListInstructions.vue';

export default {
  components: {
    ListInstructions,
  },
  props: {
    list: {
      type: Array,
      default: () => [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quam temporibus repellendus suscipit doloribus rerum, molestias, et dolore natus nam accusamus fugiat, id ex porro quisquam? Quo necessitatibus architecto asperiores?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quam temporibus repellendus suscipit doloribus rerum, molestias, et dolore natus nam accusamus fugiat, id ex porro quisquam? Quo necessitatibus architecto asperiores?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quam temporibus repellendus suscipit doloribus rerum, molestias, et dolore natus nam accusamus fugiat, id ex porro quisquam? Quo necessitatibus architecto asperiores?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quam temporibus repellendus suscipit doloribus rerum, molestias, et dolore natus nam accusamus fugiat, id ex porro quisquam? Quo necessitatibus architecto asperiores?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quam temporibus repellendus suscipit doloribus rerum, molestias, et dolore natus nam accusamus fugiat, id ex porro quisquam? Quo necessitatibus architecto asperiores?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quam temporibus repellendus suscipit doloribus rerum, molestias, et dolore natus nam accusamus fugiat, id ex porro quisquam? Quo necessitatibus architecto asperiores?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quam temporibus repellendus suscipit doloribus rerum, molestias, et dolore natus nam accusamus fugiat, id ex porro quisquam? Quo necessitatibus architecto asperiores?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quam temporibus repellendus suscipit doloribus rerum, molestias, et dolore natus nam accusamus fugiat, id ex porro quisquam? Quo necessitatibus architecto asperiores?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quam temporibus repellendus suscipit doloribus rerum, molestias, et dolore natus nam accusamus fugiat, id ex porro quisquam? Quo necessitatibus architecto asperiores?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quam temporibus repellendus suscipit doloribus rerum, molestias, et dolore natus nam accusamus fugiat, id ex porro quisquam? Quo necessitatibus architecto asperiores?',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quam temporibus repellendus suscipit doloribus rerum, molestias, et dolore natus nam accusamus fugiat, id ex porro quisquam? Quo necessitatibus architecto asperiores?',
      ],
    },
  },
};
</script>

<style lang="scss">

</style>
