let diceSample = new Vue({
  el: '.dice-sample',
  data: {
    maxValue: 6,
    minValue: 1
  },

  computed: {
    diceClass: {

      get: function () {
        diceValue = this.randomDice();

        switch (diceValue) {
          case 1:
            diceClassValue = 'dice_one';
            break;
          case 2:
            diceClassValue = 'dice_two';
            break;
          case 3:
            diceClassValue = 'dice_three';
            break;
          case 4:
            diceClassValue = 'dice_four';
            break;
          case 5:
            diceClassValue = 'dice_five';
            break;
          case 6:
            diceClassValue = 'dice_six';
            break;
        }

        return diceClassValue;

      },

      set: function () {
        diceValue = this.randomDice();

        switch (diceValue) {
          case 1:
            diceClassValue = 'dice_one';
            break;
          case 2:
            diceClassValue = 'dice_two';
            break;
          case 3:
            diceClassValue = 'dice_three';
            break;
          case 4:
            diceClassValue = 'dice_four';
            break;
          case 5:
            diceClassValue = 'dice_five';
            break;
          case 6:
            diceClassValue = 'dice_six';
            break;
        }
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
    },

    changeDiceValue() {
      diceSample.diceClass = '';
    }
  }
});