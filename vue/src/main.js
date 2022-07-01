import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

const components = {
  'g-foto': () => import('@/components/Foto.vue'),
  'g-contacts': () => import('@/components/Contacts.vue'),
  'g-knowledge-skills': () => import('@/components/KnowledgeSkills.vue'),
  'g-date-of-birth': () => import('@/components/DateOfBirth.vue'),
  'g-social': () => import('@/components/Social.vue'),
  'g-user-lang': () => import('@/components/UserLang.vue'),
};
Object.entries(components).forEach(([name, component]) => Vue.component(name, component));

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
