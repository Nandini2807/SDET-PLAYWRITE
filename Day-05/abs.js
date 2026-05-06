class CoffeMachine {
    #waterTemperature = 90;

    #boilWater(){
        return`Boiling water to ${this.#waterTemperature } degrees.`;
    }
    #grindBeans(){
        return "Grinding beams.";
    }
    brew(){
        const boilMessage = this.#boilWater();
        const grindMessage = this.#grindBeans();
        return `${boilMessage }${grindMessage} Brewing Coffe.`;
    }
}

const myCoffeMachine = new CoffeMachine();
console.log(myCoffeMachine.brew());