<template>
  <v-app>
    <v-container>
      <div v-if="$store.state.todos.length !== 0">
        <v-row dense>
          <v-col cols="12">
            <v-card
              :color="todo.completed ? 'green' : 'blue'"
              elevation="1"
              class="m-10u"
              v-for="todo in $store.state.todos"
              :key="todo.id"
            >
              <v-card-title>TODO{{ todo.id }}</v-card-title>
              <v-card-subtitle>{{ todo.title }}</v-card-subtitle>
              <v-card-actions>
                <v-btn :to="'details' + '/' + todo.id">
                  Details
                  <v-icon left>mdi-arrow-right-bold-circle-outline</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </div>
      <div v-else>
        <v-card elevation="1">
          <v-card-text>No todos found</v-card-text>
        </v-card>
      </div>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'List',
  // eslint-disable-next-line space-before-function-paren
  created: function() {
    if (this.$store.state.todos.length === 0) {
      this.$store.dispatch('getAsyncTodods')
    }
  }
}
</script>

<style scoped>
.m-10u {
  margin: 10px 0px;
}
</style>
