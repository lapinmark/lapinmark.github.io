let diceSample = new Vue({
  el: '.dice-sample',
  data: {
    maxValue: 6,
    minValue: 1
  },
  methods: {
    randomDice() {
      let value = this.minValue + Math.random() * (this.maxValue + 1 - this.minValue);
      return Math.floor(value);
    },

    stopRotate(dice) {
      dice.classList.remove('dice_rotate');
    },

    changeValue() {
      let dice = document.getElementById('dice');
      dice.classList.add('dice_rotate');
      dice.classList.remove('dice_one', 'dice_two','dice_three', 'dice_four','dice_five', 'dice_six');
      diceValue = this.randomDice();

      switch(diceValue) {
        case 1: 
          dice.classList.add('dice_one');
          break;
        case 2: 
          dice.classList.add('dice_two');
          break;
        case 3: 
          dice.classList.add('dice_three');
          break;
        case 4: 
          dice.classList.add('dice_four');
          break;
        case 5: 
          dice.classList.add('dice_five');
          break;
        case 6: 
          dice.classList.add('dice_six');
          break;
      };

      setTimeout(this.stopRotate, 1100, dice);
    }
  }
});