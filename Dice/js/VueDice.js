let diceSample = new Vue({
  el: '.dice-sample',
  data: {
    maxValue: 6,
    minValue: 1
  },

  computed: {
    diceClass: function () {
      diceValue = this.randomDice();

      return {
        'dice_one': diceValue === 1,
        'dice_two': diceValue === 2,
        'dice_three': diceValue === 3,
        'dice_four': diceValue === 4,
        'dice_five': diceValue === 5,
        'dice_six': diceValue === 6
      }
    }
  },

  methods: {
    randomDice() {
      let value = this.minValue + Math.random() * (this.maxValue + 1 - this.minValue);
      return Math.floor(value);
    },

    stopRotate(dice) {
      dice.classList.remove('dice_rotate');
    }
    
  }
});