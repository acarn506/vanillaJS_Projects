// Calculator Class
class Calculator {
    constructor(prevOperandText, currOperandText) {
        this.prevOperandText = prevOperandText
        this.currOperandText = currOperandText
        this.clear()
    }

    clear() {
        this.prevOperand = ''
        this.currOperand = ''
        this.operation = undefined
    }

    delete() {
        if (this.currOperand) {
            const number = Math.floor(this.currOperand / 10)
            this.currOperand =  number === 0 ? '' : number
        }
    }

    addNumber(number) {
        if (number === '.' && this.currOperand.includes('.')) return 
        this.currOperand = this.currOperand.toString() + number.toString()
    }

    selectedOperator(operation) {
        if (this.currOperand === '') return

        if (this.prevOperand !== '') {
            this.calculate()
        }
        
        this.operation = operation
        this.prevOperand = this.currOperand
        this.currOperand = ''
    }

    calculate() {

    }

    updateDisplay() {
        this.currOperandText.innerText = this.currOperand
        this.prevOperandText.innerText = this.prevOperand
    }
}

const numberBtns = document.querySelectorAll('[data-number]')
const operatorBtns = document.querySelectorAll('[data-operator]')
const del = document.querySelector('[data-del]')
const equal = document.querySelector('[data-equal]')
const reset = document.querySelector('[data-reset]')
const prevOperandText = document.querySelector('[data-previous]')
const currOperandText = document.querySelector('[data-current]')
// calculator instance 
const calculator = new Calculator(prevOperandText, currOperandText)

numberBtns.forEach( btn => {
    btn.addEventListener('click', () => {
        calculator.addNumber(btn.innerText)
        calculator.updateDisplay()
    })
})

operatorBtns.forEach( btn => {
    btn.addEventListener('click', () => {
        calculator.selectedOperator(btn.innerText)
        calculator.updateDisplay()
    })
})

del.addEventListener('click', () => {
    calculator.delete()
    calculator.updateDisplay()
})

reset.addEventListener('click', () => {
    calculator.clear()
    calculator.updateDisplay()
})