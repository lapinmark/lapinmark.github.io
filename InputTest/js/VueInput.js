const diceSample = new Vue({
  el: '.input-test',
  data: {
    query: 'Roboto',
    fonts: ['Roboto Slab', 'Roboto Condensed', 'Roboto Mono']
  },

  computed: {
    searchedFonts(query) {
      return this.fonts.filter(function(currentFont) {
        return currentFont.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })
    }
  },

  methods: {
  }
});