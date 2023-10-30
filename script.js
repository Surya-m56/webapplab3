document.addEventListener('DOMContentLoaded', function () {

// here we have to refer to the html elements 

    const billalInput = document.getElementById('bill');
    const percentInput = document.getElementById('tip');
    const chargesOutput = document.getElementById('charges');
    const chargesOut = document.getElementById('percent');
    const totalbillOutput = document.getElementById('totalbill');
    const form_tip = document.getElementById('form_tip');

    form_tip.addEventListener('input', calculateTip);

// main calculation function
    function calculateTip() {
        const billValue = parseFloat(billalInput.value);
        const percentValue = parseInt(percentInput.value);
        const tippercentVAlue=parseInt(chargesOut.value)
        if (!isNaN(billValue)) {
            const tip = (billValue * percentValue) / 100;
            const total = billValue + tip;
            chargesOutput.value = tip.toFixed(2);
            totalbillOutput.value = total.toFixed(2);
            chargesOut.value=percentValue;
        } else {
            chargesOutput.value = '';
            totalbillOutput.value = '';
        }
    }
});