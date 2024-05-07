<template>
  <div>
    <v-app-bar :elevation="0" scroll-behavior="hide" scroll-threshold="1">
      <v-app-bar-title class="text-h5 text-yellow-darken-3 font-weight-black">
        WiskerWise
      </v-app-bar-title>

      <v-app-bar-nav-icon @click="openMenu" class="d-flex d-sm-none">
        <v-icon v-if="isActive">mdi-arrow-left</v-icon>
        <v-icon v-else="isActive">mdi-menu</v-icon>
      </v-app-bar-nav-icon>

      <template v-slot:append>
        <v-tabs
          align-btns="center"
          color="yellow-darken-3"
          class="d-none d-sm-flex"
        >
          <v-tab>Unidade</v-tab>
          <v-tab>Serviços</v-tab>
          <v-tab>Sobre nós</v-tab>
          <v-tab>Contato</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-navigation-drawer v-model="isActive" absolute temporary>
      <v-list-item-group>
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
