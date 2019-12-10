const defaultQuery = '';

const TestInput = new Vue({
  el: '.input-test',
  data: {
    query: defaultQuery,
    fonts: ['Roboto Slab', 'Roboto Condensed', 'Roboto Mono', 'Arial', 'Reem', 'Rasa']
  },

  computed: {
    searchedFonts() {
      return this.fonts.filter(currentFont => {
        return currentFont.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
    })
    }
  },

  methods: {
    changeInputValue() {
      this.query = this.font;
    }
  }
});