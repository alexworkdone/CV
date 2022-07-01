<template>
  <div>
    <div class="box_title">Languages</div>

    <ul class="status-lang">
      <li v-for="item in listLang" :key="item.name" :data-tooltip="getTooltip(item.percentage)">
        <span>{{ item.name }}</span>

        <div class="status-lang-dot">
          <div v-for="i in 5" :key="i" :class="{ 'ok': i * 20 <= item.percentage }"></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UserLang',

  props: {
    listLang: {
      type: Array,
      default: () => {
        [];
      },
    },
  },

  methods: {
    getTooltip(percent) {
      let tooltip = 'Native';

      if (percent <= 90 && percent > 55) {
        tooltip = 'Reading level of technical documentation';
      } else if (percent <= 55 && percent > 25) {
        tooltip = 'I read and write';
      } else if (percent <= 25) {
        tooltip = 'Learning';
      }

      return tooltip;
    },
  },
};
</script>
