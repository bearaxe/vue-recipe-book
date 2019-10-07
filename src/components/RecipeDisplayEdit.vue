<template>
  <div id="edit" class="recipe-edit">
    <div class="modal__overlay">
      <div class="modal__container">
        <a href="#" class="modal__close">&times;</a>
        <div class="modal__content">
          <h1>Edit Recipe</h1>
          <h2>Title: Current title</h2>
          <input type="text" placeholder="New Title" />
          <h2>Url: Current Url</h2>
          <input type="text" placeholder="New Url" />
          <h3>time: Current time</h3>
          <input type="text" placeholder="New Time" />
          <h3>ingredients:</h3>
          <ingredient-editor />
          <h3>instructions:</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ingredientEditor from '@/components/ListIngredientsEdit.vue';

export default {
  components: {
    ingredientEditor,
  },

};
</script>

<style lang="scss">
 .recipe-edit {
   opacity: 0;
   &:target {
    opacity: 1;
    .modal__overlay {
      display: block;
    }
   }
 }

 .modal {
    &__overlay {
      display: none;
      position: fixed;
      height: 100vh;
      width: 100vw;
      top: 0;
      left: 0;
      background-color: rgba($color-black, .6);
      z-index: 1;

      overflow-y: scroll;
    }

    &__container {
      position: relative;
      background-color: $color-white;
      max-width: 90%;
      top: 15vh;
      left: 50%;
      transform: translateX(-50%);
      border-radius: .5rem;
      margin-bottom: 15rem;
    }

    &__close {
      position: absolute;
      top: 0rem;
      right: 1rem;
      font-size: 4rem;
      line-height: 1;
      display: inline-block;
    }

    &__content {
      padding: 2rem;
    }
 }
</style>
