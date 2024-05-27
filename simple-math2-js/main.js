function getSum() {
    let numOne = parseFloat(document.getElementById('inputNumberOne').value);
    let numTwo = parseFloat(document.getElementById('inputNumberTwo').value);
    let target = document.getElementById('target');

    if (numOne === numTwo) {
        target.innerHTML = "Input numbers are equal. Sum: " + ((numOne + numTwo) * 3);
    } else {
        target.innerHTML = "Input numbers are not equal. Sum: " + (numOne + numTwo);
    }
}