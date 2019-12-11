const diceDefaultValue = 6;
const rotateDefaultValue = '';

const diceSample = new Vue({
  el: '.dice-sample',
  template: `
  <div class="container dice-sample">
        <h2 class="title">Попробуйте угадать сумму и бросьте кубики</h2>
        <div @click="changeBet" class="bet-wrapper">
            <div class="bet-less">1 - 6</div>
            <div class="bet-switch-box">
                <div :class="{ 'bet-switch_more': isMore }" class="bet-switch"></div>
            </div>
            <div class="bet-more">7 - 12</div>
        </div>
        <div @click="shuffleDice" class="dice-wrapper">
            <div class="dice dice_first" :class="[diceFirstClass, rotateClass]">
                <div class="dot dot_top-left"></div>
                <div class="dot dot_middle-left"></div>
                <div class="dot dot_bottom-left"></div>
                <div class="dot dot_center"></div>
                <div class="dot dot_top-right"></div>
                <div class="dot dot_middle-right"></div>
                <div class="dot dot_bottom-right"></div>
            </div>
            <div class="dice dice_second" :class="[diceSecondClass, rotateClass]">
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
    rotateClass: rotateDefaultValue,
    isMore: false
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
      }
    },

    diceSumm() {
      return this.diceFirstValue + this.diceSecondValue;
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
      setTimeout(this.alertResult, 1100);
    },

    changeBet() {
      this.isMore = !this.isMore;
    },

    alertResult() {
      if (this.diceSumm < 7 && this.isMore === false) alert('Вы выиграли!');
      if (this.diceSumm < 7 && this.isMore === true) alert('Вы проиграли!');
      if (this.diceSumm > 6 && this.isMore === true) alert('Вы выиграли!');
      if (this.diceSumm > 6 && this.isMore === false) alert('Вы проиграли!');
    }
  }
});