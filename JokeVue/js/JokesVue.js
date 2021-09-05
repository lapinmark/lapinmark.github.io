const JokesApp = new Vue({
  el: '.jokes-app',

  data: {
    jokesList: [],
    search: ''
  },

  async created() {
    this.jokesList = await this.getJokes()
  },

  computed: {
    searchedJokes() {
      return this.jokesList.filter(joke => {
        if (joke.setup) {
          return joke.setup.toLowerCase().includes(this.search.toLowerCase()) || joke.delivery.toLowerCase().includes(this.search.toLowerCase())
        }
        else {
          return joke.joke.toLowerCase().includes(this.search.toLowerCase())
        }
      })
    }
  },

  methods: {
    async getJokes() {
      const response = await fetch("https://v2.jokeapi.dev/joke/Any?amount=10")
      const data = await response.json()
      return data.jokes
    }
  }
})