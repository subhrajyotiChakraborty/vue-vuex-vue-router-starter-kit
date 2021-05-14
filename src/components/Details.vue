<template>
    <v-app>
        <v-container grid-list-xs>
            <p>Details</p>
        </v-container>
    </v-app>
</template>

<script>
export default {
  name: 'Details',
  // eslint-disable-next-line space-before-function-paren
  created: function() {
    console.log('[details] created')
  },
  // eslint-disable-next-line space-before-function-paren
  destroyed: function() {
    console.log('[details] destroyed')
  }
}
</script>

<style scoped>
</style>
