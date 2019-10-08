<template>
  <div id="edit" class="recipe-edit">
    <modal>
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
      <instructions-editor />
    </modal>
  </div>
</template>

<script>
import IngredientEditor from '@/components/ListIngredientsEdit.vue';
import InstructionsEditor from '@/components/ListInstructionsEdit.vue';
import Modal from '@/components/BaseModal.vue';

export default {
  components: {
    IngredientEditor,
    InstructionsEditor,
    Modal,
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
</style>
