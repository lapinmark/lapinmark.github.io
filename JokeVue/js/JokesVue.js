const JokesApp = new Vue({
  el: '.jokes-app',

  data: {
    jokesList: []
  },

  async created() {
    this.jokesList = await this.getJokes()
  },

  methods: {
    async getJokes() {
      const response = await fetch("https://v2.jokeapi.dev/joke/Any?amount=10")
      const data = await response.json()
      return data.jokes
    }
  }
})