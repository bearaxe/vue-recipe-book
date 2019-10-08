<template>
  <div class="modal__overlay">
    <div class="modal__container">
      <a href="#" class="modal__close">&times;</a>
      <div class="modal__content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
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
