function getDifference() {
    let inputNumber = parseFloat(document.getElementById('inputNumber').value);
    let target = document.getElementById('target');

    if (inputNumber > 13) {
        target.innerHTML = "Input number is greater than 13. Result = " + ((inputNumber - 13) * 2);
    } else {
        target.innerHTML = "Input number is smaller than 13. Result = " + (13 - inputNumber);
    }
}