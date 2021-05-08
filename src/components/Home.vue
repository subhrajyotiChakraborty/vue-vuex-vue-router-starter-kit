<template>
    <v-app>
        <v-container>
            <p>HOME</p>
            <p>{{totalCount}}</p>
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
