<script setup>
  const route = useRoute()
  const { data } = await useFetch(`/api/creatures/${route.params.name}`);
</script>

<template>
  <div>
    <nuxt-link to="/bestiary">back</nuxt-link>
    <div style="width: 400px">
      <creature-view :creature="data"></creature-view>
    </div>
  </div>
</template>
