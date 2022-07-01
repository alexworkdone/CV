<template>
  <div>
    <div class="box_title">Knowledge and skills</div>

    <ul v-for="(list, index) in listsSkills" :key="index" class="list-inline m-b-12">
      <li v-for="skill in list" :key="skill">{{ skill }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'KnowledgeSkills',

  props: {
    listsSkills: {
      type: Array,
      default: () => {
        [];
      },
    },
  },
};
</script>
