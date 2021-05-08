<template>
  <div id="app">
    <v-app>
      <v-container>
        <v-toolbar dense color="indigo">
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          <v-toolbar-title>DEMO_APP_VUE</v-toolbar-title>
        </v-toolbar>
        <v-navigation-drawer v-model="drawer" absolute bottom temporary>
          <v-list nav dense>
            <v-list-item-group
              v-model="group"
              active-class="deep-green--text text--accent-4"
            >
              <v-list-item to="/">
                <v-list-item-title>Home</v-list-item-title>
              </v-list-item>

              <v-list-item to="/list">
                <v-list-item-title>List</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
      </v-container>
      <router-view />
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  // eslint-disable-next-line space-before-function-paren
  data() {
    return {
      drawer: false,
      group: null
    }
  },
  watch: {
    // eslint-disable-next-line space-before-function-paren
    group() {
      this.drawer = false
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
