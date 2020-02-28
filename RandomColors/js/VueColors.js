const colorsSample = new Vue({
  el: '.random-colors',
  template: `
  <div class="container random-colors">
    <div @click="shuffleColors" :class="{ color_move: isMoving }" :style="{ 'background-color': activeColor }" class="color"></div>
  </div>
  `,
  data: {
    activeColor: '#DC143C',
    maxValue: 4,
    minValue: 1,
    isMoving: false
  },

  methods: {
    getRandomColor() {
      let value = this.minValue + Math.random() * (this.maxValue + 1 - this.minValue);
      return Math.floor(value);
    },

    changeColor() {
      let randomColor = this.getRandomColor();
      switch (randomColor) {
        case 1:
          return '#DC143C';
        case 2:
          return '#1E90FF';
        case 3:
          return '#3CB371';
        case 4:
          return '#FFD700';
        default:
          return '#DC143C';
      }
    },

    stopMoving() {
      this.isMoving = false;
    },

    Move() {
      this.isMoving = true;
      setTimeout(this.stopMoving, 1100)
    },

    shuffleColors() {
      this.Move();
      this.activeColor = this.changeColor();
    }
  }
});