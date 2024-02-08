function calculator() {
    let num1Selector, num2Selector, resultSelector;

    function init(selector1, selector2, resultSel) {
        num1Selector = document.querySelector(selector1);
        num2Selector = document.querySelector(selector2);
        resultSelector = document.querySelector(resultSel);
    }

    function add() {
        const result = Number(num1Selector.value) + Number(num2Selector.value);
        resultSelector.value = result;
    }

    function subtract() {
        const result = Number(num1Selector.value) - Number(num2Selector.value);
        resultSelector.value = result;
    }

    return {
        init: init,
        add: add,
        subtract: subtract
    };
}

// Example usage:
const calculate = calculator();

calculate.init('#num1', '#num2', '#result');
calculate.add(); // Adds the values of num1 and num2 and displays the result in #result
calculate.subtract(); // Subtracts the value of num2 from num1 and displays the result in #result
