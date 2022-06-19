namespace Ejercicio5 {

  class SlotMachine {

    private coins: number;
    private slots: boolean[];

    constructor() {
      this.coins = 0;
      this.slots = [false, false, false];
    }

    public play(): void {
      this.pay();
      this.randomSlots();
      this.checkWin();
    }

    private pay(): void { this.coins++; }

    private randomSlots(): void { for (let i = 0; i < this.slots.length; i++) this.slots[i] = Math.random() < 0.6 }

    private checkWin(): void {
      if (this.slots[0] && this.slots[1] && this.slots[2]) {
        console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
        this.coins = 0;
      }
      else console.log("Good luck next time!!")
    }
  }

  let machine = new SlotMachine();
  machine.play();
  machine.play();
  machine.play();
  machine.play();
  machine.play();

}