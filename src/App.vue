<template>
  <div id="app">
    <md-app>
      <md-app-toolbar class="md-primary" md-elevation="0">
        <md-button
          class="md-icon-button"
          @click="toggleMenu"
          v-if="!$store.state.menuVisible"
        >
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Single Line Diagram Generator</span>
      </md-app-toolbar>

      <md-app-drawer
        :md-active.sync="$store.state.menuVisible"
        md-persistent="mini"
      >
        <md-toolbar class="md-transparent" md-elevation="0">
          <span>Navigation</span>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <md-list>
          <template v-if="$route.fullPath === '/'">
            <md-list-item
              @click="$store.commit('toggleInputDialog')"
              md-divider
            >
              <md-icon>add</md-icon>
              <span class="md-list-item-text">Insert Data</span>
            </md-list-item>
            <md-divider></md-divider>
          </template>
          <md-list-item @click="$router.push('/')">
            <md-icon>apps</md-icon>
            <span class="md-list-item-text">Diagram</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view />
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  methods: {
    toggleMenu() {
      this.$store.commit("toggleMenuVisible");
    },
  },
};
</script>
