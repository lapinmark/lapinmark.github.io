const diceDefaultValue = 6;
const rotateDefaultValue = '';

const diceSample = new Vue({
  el: '.dice-sample',
  template: `
  <div class="container dice-sample">
        <div class="buttons-wrapper">
            <button @click="addDice" :disabled="!isAddingActive" class="button button_add">+</button>
            <button @click="removeDice" :disabled="!isRemovingActive" class="button button_remove">-</button>
        </div>
        <div @click="shuffleDice" class="dice-wrapper">
            <div v-for="dice in dices" :class="[dice.diceClass, rotateClass]" class="dice">
                <div class="dot dot_top-left"></div>
                <div class="dot dot_middle-left"></div>
                <div class="dot dot_bottom-left"></div>
                <div class="dot dot_center"></div>
                <div class="dot dot_top-right"></div>
                <div class="dot dot_middle-right"></div>
                <div class="dot dot_bottom-right"></div>
            </div>
        </div>
        <div class="dice-summ">Сумма равна <span class="dice-summ_highlight"> {{ diceSumm }} </span></div>
    </div>
  `,
  data: {
    maxValue: 6,
    minValue: 1,
    rotateClass: rotateDefaultValue,
    dices: [{ value: 6, diceClass: 'dice_six' }]
  },

  computed: {
    diceSumm() {
      return this.dices.reduce(function(accumulator, current) {
        return accumulator + current.value;
      }, 0);
    },

    isAddingActive() {
      if (this.dices.length > 8) {return false} else {return true}
    },

    isRemovingActive() {
      if (this.dices.length < 2) {return false} else {return true}
    }
  },

  methods: {
    getRandomDice() {
      let value = this.minValue + Math.random() * (this.maxValue + 1 - this.minValue);
      return Math.floor(value);
    },

    changeDiceClass() {
      let randomDice = this.getRandomDice();
      switch (randomDice) {
        case 1:
          return { value: 1, diceClass: 'dice_one' };
        case 2:
          return { value: 2, diceClass: 'dice_two' };
        case 3:
          return { value: 3, diceClass: 'dice_three' };
        case 4:
          return { value: 4, diceClass: 'dice_four' };
        case 5:
          return { value: 5, diceClass: 'dice_five' };
        case 6:
          return { value: 6, diceClass: 'dice_six' };
        default:
          return { value: 6, diceClass: 'dice_six' };
      }
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
      this.dices = this.dices.map(updateValues => this.changeDiceArray());
    },

    changeDiceArray() {
      return this.changeDiceClass();
    },

    addDice() {
      this.dices.push({ value: 6, diceClass: 'dice_six' });
    },

    removeDice() {
      this.dices.pop();
    }
  }
});