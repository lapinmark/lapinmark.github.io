const diceDefaultValue = 6;
const rotateDefaultValue = '';

const diceSample = new Vue({
  el: '.dice-sample',
  template: `
  <div class="container dice-sample">
        
        <div @click="addDice" class="add-button-wrapper">
            <button :disabled="isThirdActive">+</button>
        </div>
        <div @click="shuffleDice" class="dice-wrapper">
            <div :class="[diceFirstClass, rotateClass]" class="dice dice_first">
                <div class="dot dot_top-left"></div>
                <div class="dot dot_middle-left"></div>
                <div class="dot dot_bottom-left"></div>
                <div class="dot dot_center"></div>
                <div class="dot dot_top-right"></div>
                <div class="dot dot_middle-right"></div>
                <div class="dot dot_bottom-right"></div>
            </div>
            <div v-if="isSecondActive" :class="[diceSecondClass, rotateClass]" class="dice dice_second">
                <div class="dot dot_top-left"></div>
                <div class="dot dot_middle-left"></div>
                <div class="dot dot_bottom-left"></div>
                <div class="dot dot_center"></div>
                <div class="dot dot_top-right"></div>
                <div class="dot dot_middle-right"></div>
                <div class="dot dot_bottom-right"></div>
            </div>
            <div v-if="isThirdActive" :class="[diceThirdClass, rotateClass]" class="dice dice_third">
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
    diceFirstValue: diceDefaultValue,
    diceSecondValue: diceDefaultValue,
    diceThirdValue: diceDefaultValue,
    rotateClass: rotateDefaultValue,
    isSecondActive: false,
    isThirdActive: false
  },

  computed: {
    diceFirstClass() {
      switch (this.diceFirstValue) {
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
        default:
          return "dice_six";
      }
    },

    diceSecondClass() {
      switch (this.diceSecondValue) {
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
        default:
          return "dice_six";
      }
    },

    diceThirdClass() {
      switch (this.diceThirdValue) {
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
        default:
          return "dice_six";
      }
    },

    diceSumm() {
      if (this.isSecondActive && this.isThirdActive) return this.diceFirstValue + this.diceSecondValue + this.diceThirdValue;
      if (this.isSecondActive && !this.isThirdActive) return this.diceFirstValue + this.diceSecondValue;
      return this.diceFirstValue;
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
      this.diceFirstValue = this.getRandomDice();
      this.diceSecondValue = this.getRandomDice();
      this.diceThirdValue = this.getRandomDice();
    },

    addDice() {
      if (!this.isSecondActive) {
        this.isSecondActive = true;
        return;
      }
      if (this.isSecondActive) {
        this.isThirdActive = true;
        return;
      }
    }
  }
});