<script setup>
  import CreatureView from "../components/creature-view";

  const route = useRoute()
  const { data } = await useFetch(`/api/creatures/${route.params.name}`);
</script>

<template>
  <div>
    <nuxt-link to="/">back</nuxt-link>
    <div style="width: 400px">
      <creature-view :creature="data"></creature-view>
    </div>
  </div>
</template>
