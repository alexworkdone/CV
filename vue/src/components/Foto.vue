<template>
  <div class="foto">
    <img src="../assets/images/foto.jpg" :alt="name" />
  </div>
</template>

<script>
export default {
  name: 'Foto',

  props: {
    name: {
      type: String,
      default: '',
    }
  },
};
</script>
