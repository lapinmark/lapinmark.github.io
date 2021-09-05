const JokesApp = new Vue({
  el: '.jokes-app',

  data: {
    jokesList: [],
    search: '',
    likedJokes: []
  },

  async created() {
    this.jokesList = await this.getJokes()
    this.copyStorage()
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
    },

    copyStorage() {
      const response = localStorage.getItem('likedJokes')
      this.likedJokes = JSON.parse(response) ?? []
    },

    likeJoke(id) {
      const response = localStorage.getItem('likedJokes')
      const array = JSON.parse(response) ?? []
      const index = array.indexOf(id)
      if (index === -1) {
        array.push(id)
      }
      else {
        array.splice(index, 1)
      }
      this.likedJokes = array
      const string = JSON.stringify(array)
      localStorage.setItem('likedJokes', string)
    },

    getButtonClass(id) {
      const index = this.likedJokes.indexOf(id)
      if (index === -1) {
        return 'jokes__like_neutral'
      }
      else {
        return 'jokes__like_active'
      }
    }
  }
})