<template>
  <div>
    <div class="title">Contacts</div>

    <ul>
        <li>{{ contacts.residence }}</li>
        <li><a :href="`tel:${contacts.tel}`">+ {{ contacts.tel }}</a></li>
        <li><a :href="`mailto:${contacts.email}`">{{ contacts.email }}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Contacts',

  props: {
    contacts: {
      type: Object,
      required: true,
    }
  }
}
</script>