<template>
  <div>
    <div class="title">Date of Birth</div>

    <ul>
      <li>{{ date }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DateOfBirth',

  props: {
    date: {
      type: String,
      default: '',
    },
  },
};
</script>
