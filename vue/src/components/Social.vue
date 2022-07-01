<template>
  <div>
    <div class="title">Social networks</div>

    <div class="socialmedia">
      <div v-for="item in listSocialmedia" :key="item.social" class="socialmedia_item">
        <i :class="`icon-${item.social}`"></i>
        <a v-if="item.link" :href="item.link">{{ item.name }}</a>
        <template v-else>{{ item.name }}</template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Social',

  props: {
    listSocialmedia: {
      type: Array,
      default: () => {
        [];
      },
    },
  },
};
</script>
