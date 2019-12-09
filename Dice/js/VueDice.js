const diceDefaultValue = 6;
const rotateDefaultValue = '';

const diceSample = new Vue({
  el: '.dice-sample',
  template: `
  <div class="container dice-sample" @click="shuffleDice">
        <div class="dice" id="dice" :class="[diceClass, rotateClass]">
            <div class="dot dot_top-left"></div>
            <div class="dot dot_middle-left"></div>
            <div class="dot dot_bottom-left"></div>
            <div class="dot dot_center"></div>
            <div class="dot dot_top-right"></div>
            <div class="dot dot_middle-right"></div>
            <div class="dot dot_bottom-right"></div>
        </div>
    </div>
  `,
  data: {
    maxValue: 6,
    minValue: 1,
    diceValue: diceDefaultValue,
    rotateClass: rotateDefaultValue
  },

  computed: {
    diceClass() {
      switch (this.diceValue) {
        case 1:
          return 'dice_one';
        case 2:
          return 'dice_two';
        case 3:
          return 'dice_three';
        case 4:
          return 'dice_four';
        case 5:
          return 'dice_five';
        case 6:
          return 'dice_six';
      }
    }
  },

  methods: {
    getRandomDice() {
      let value = this.minValue + Math.random() * (this.maxValue + 1 - this.minValue);
      return Math.floor(value);
    },

    stopRotation() {
      this.rotateClass = '';
    },

    rotateDice() {
      this.rotateClass = 'dice_rotate';
      setTimeout(this.stopRotation, 1100)
    },

    shuffleDice() {
      this.rotateDice();
      this.diceValue = this.getRandomDice();
    }
  }
});