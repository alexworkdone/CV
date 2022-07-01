<template>
  <div class="home">
    <ul class="list-preview">
      <li v-for="temp in getListTemplates()" :key="temp.id" class="list-item">
        <router-link :to="`/temp/${temp.id}`">
          <img :src="temp.preview" :alt="temp.name" />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Home',

  methods: {
    ...mapGetters(['getListTemplates']),
  },
};
</script>
