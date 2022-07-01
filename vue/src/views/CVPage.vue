<template>
  <div>
    <a href="/">Back</a>
    <div v-html="temp"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CVPage',

  props: {
    tempId: {
      type: String,
      required: true,
    },
  },

  data: () => ({
    temp: null,
    user: null,
  }),

  created() {
    const listTemp = this.getListTemplates();
    this.temp = listTemp.find((item) => item.id == this.tempId).temp || null;

    console.log(this.temp);

    this.user = this.getUserData()[0];
  },

  methods: {
    ...mapGetters(['getListTemplates', 'getUserData']),
  },
};
</script>
