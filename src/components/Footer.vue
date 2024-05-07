<template>
  <v-footer class="bg-yellow-darken-3 text-center d-flex flex-column">
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        class="mx-4"
        variant="text"
      ></v-btn>
    </div>

    <div class="pt-0">Desde 2023 renovando o visual de cavalheiros.</div>

    <v-divider></v-divider>

    <div>{{ new Date().getFullYear() }} — <strong>WiskerWise</strong></div>
  </v-footer>
</template>

<script lang="ts">
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>

<style></style>
