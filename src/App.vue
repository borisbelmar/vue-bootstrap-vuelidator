<template>
  <div id="app">
    <navigation/>
    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>

<script>
import navigation from "./components/navigation.vue";
export default {
  name: 'App',
  components: {
    navigation
  }
}
</script>


<style>
  .router-link-active {
    font-weight: 700;
    color: white;
  }
</style>
