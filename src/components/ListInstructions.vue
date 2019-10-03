<template>
  <ul class="paren-list">
    <template  v-for="n in list.length - 1">
      <li :key="`ins${n}`" class="paren-list__item">
        <span class="paren-list_number" v-text="n + ') '" />
        {{ list[n] }}
      </li>
    </template>
  </ul>
</template>

<script>
export default {
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
.paren-list {
    &__number {
        text-align: right;
        flex: 0 0 5%;
        margin-right: .75rem;
        font-size: 2rem;
        font-weight: 600;
    }
}
</style>
