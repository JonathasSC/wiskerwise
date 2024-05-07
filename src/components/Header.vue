<template>
  <div>
    <header class="bg-zinc-800 px-5 flex items-center justify-between">
      <a><h1 class="font-bold text-2xl text-amber-500">WiskerWise</h1></a>

      <v-app-bar-nav-icon @click="openMenu" class="block sm:hidden">
        <v-icon v-if="isActive">mdi-arrow-left</v-icon>
        <v-icon v-else="isActive">mdi-menu</v-icon>
      </v-app-bar-nav-icon>

      <v-tabs
        align-btns="center"
        color="yellow-darken-3"
        class="hidden sm:block"
      >
        <v-tab class="p">Unidade</v-tab>
        <v-tab>Serviços</v-tab>
        <v-tab>Sobre nós</v-tab>
        <v-tab>Contato</v-tab>
      </v-tabs>
    </header>

    <v-navigation-drawer v-model="isActive" absolute temporary>
      <v-list-item-group class="flex flex-col pt-4 gap-5">
        <v-list-item> <v-btn class="text-right">Unidade</v-btn></v-list-item>

        <v-list-item>
          <v-btn>Serviços</v-btn>
        </v-list-item>

        <v-list-item>
          <v-btn>Sobre nós</v-btn>
        </v-list-item>

        <v-list-item>
          <v-btn>Contato</v-btn>
        </v-list-item>
      </v-list-item-group>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ref } from "vue";

let isActive = ref(true);

const openMenu = () => {
  isActive.value = !isActive.value;
};

export default defineComponent({
  el: "#app",
  setup() {
    return {
      isActive,
      openMenu,
    };
  },
});
</script>

<style></style>
