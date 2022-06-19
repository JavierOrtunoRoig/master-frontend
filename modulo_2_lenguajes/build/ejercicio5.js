"use strict";
var Ejercicio5;
(function (Ejercicio5) {
    class SlotMachine {
        constructor() {
            this.coins = 0;
            this.slots = [false, false, false];
        }
        play() {
            this.pay();
            this.randomSlots();
            this.checkWin();
        }
        pay() { this.coins++; }
        randomSlots() { for (let i = 0; i < this.slots.length; i++)
            this.slots[i] = Math.random() < 0.6; }
        checkWin() {
            if (this.slots[0] && this.slots[1] && this.slots[2]) {
                console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
                this.coins = 0;
            }
            else
                console.log("Good luck next time!!");
        }
    }
    let machine = new SlotMachine();
    machine.play();
    machine.play();
    machine.play();
    machine.play();
    machine.play();
})(Ejercicio5 || (Ejercicio5 = {}));
