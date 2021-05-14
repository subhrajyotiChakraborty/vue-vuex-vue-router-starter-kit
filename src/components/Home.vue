<template>
    <v-app>
        <v-container>
          <v-parallax dark src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
            <v-row align="center" justify="center">
              <v-col cols="12">
                <h1 class="display-1">
                  HOME
                </h1>
                <h3 v-if="totalCount !== 0">
                  Total TODOS are {{totalCount}}
                </h3>
              </v-col>
            </v-row>
          </v-parallax>
        </v-container>
    </v-app>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    // eslint-disable-next-line space-before-function-paren
    totalCount() {
      return this.$store.state.todos.length
    }
  }
}
</script>

<style scoped></style>
