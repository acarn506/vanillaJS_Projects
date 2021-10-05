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
        this.currOperand = this.currOperand.toString().slice(0, -1)
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
        let computation
        const prev = parseFloat(this.prevOperand)
        const curr = parseFloat(this.currOperand)
        if (isNaN(prev) || isNaN(curr)) return
        
        switch (this.operation) {
            case '+':
                computation = prev + curr
                break
            case '-':
                computation = prev - curr
                break
            case '/':
                computation = prev / curr
                break
            case 'x':
                computation = prev * curr
                break
            default:
                return 
        }

        this.currOperand = computation
        this.operation = undefined
        this.prevOperand = ''
    }

    getDisplayNUmber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]

       let integerDisplay
       if (isNaN(integerDigits)) {
           integerDisplay = ''
       } else {
           integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits : 0 })
       }

       if (decimalDigits !== undefined) {
           return `${integerDisplay}.${decimalDigits}`
       } else {
           return integerDisplay
       }

    }

    updateDisplay() {
        this.currOperandText.innerText = this.getDisplayNUmber(this.currOperand)

        if (this.operation !== undefined) {
            this.prevOperandText.innerText = `${this.getDisplayNUmber(this.prevOperand)} ${this.operation}`
        } else {
            this.prevOperandText.innerText = ''
        }
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

equal.addEventListener('click', () => {
    calculator.calculate()
    calculator.updateDisplay()
})