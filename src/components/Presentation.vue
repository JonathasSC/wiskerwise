<template>
  <v-app
    style="
      background-image: url('./src/assets/background.png');
      background-size: cover;
      background-position: center;
    "
  >
    <div class="h-full flex flex-col items-start justify-center p-4 pb-40 gap-4">
      <h1 class="font-mohave font-bold text-6xl w-80 text-amber-500 sm:w-2/3 sm:text-8xl" >
        MANTENHA-SE
        <br />
        NO ESTILO
      </h1>
      <span class="w-52 h-0.5 bg-gray-300 sm:w-64"></span>

      <p class="text-sm sm:text-base text-gray-300">
        Tradição e elegância em cada corte.
      </p>
    </div>
  </v-app>
</template>

<script lang="ts">
export default {};
</script>

<style>
.presentation__text {
  font-size: 32pt;
  max-width: 30rem;
  line-height: 3rem;
}
</style>
