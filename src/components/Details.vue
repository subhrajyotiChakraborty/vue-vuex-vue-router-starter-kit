<template>
    <v-app>
        <v-container grid-list-xs>
            <v-breadcrumbs :items="links" divider=">"></v-breadcrumbs>
            <p v-if="!todoDetaisl.id">
                Loading...
            </p>
            <v-card v-else elevation="2">
                <v-card-title primary-title>
                    {{todoDetaisl.title.toUpperCase()}}
                </v-card-title>
                <v-card-text>
                    Task status is {{todoDetaisl.completed ? 'completed' : 'pending'}}
                </v-card-text>
            </v-card>
        </v-container>
    </v-app>
</template>

<script>
export default {
  name: 'Details',
  // eslint-disable-next-line space-before-function-paren
  created: function() {
    console.log('[details] created', this.$store.getters)
    this.$store.dispatch('getTodoDetailsAsync', this.$route.params.id)
  },
  // eslint-disable-next-line space-before-function-paren
  destroyed: function() {
    console.log('[details] destroyed')
    this.$store.commit('resetTodoDetails')
  },
  // eslint-disable-next-line space-before-function-paren
  data() {
    return {
      links: [
        {
          text: 'List',
          disabled: false,
          href: '/#/list'
        },
        {
          text: `TODO_${this.$route.params.id}`,
          disabled: true,
          href: ''
        }
      ]
    }
  },
  computed: {
    // eslint-disable-next-line space-before-function-paren
    todoDetaisl() {
      return this.$store.getters.todoDetails
    }
  }
}
</script>

<style scoped>
</style>
