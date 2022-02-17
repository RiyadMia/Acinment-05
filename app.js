function myIncome() {
    const foot = parseInt(document.getElementById('foot').value);
    const rent = parseInt(document.getElementById('rent').value);
    const clothes = parseInt(document.getElementById('clothes').value);
    const getResult = document.getElementById('result').innerHTML = foot + rent + clothes;
    const salare = parseInt(document.getElementById('salare').value);
    document.getElementById('balance').innerHTML = salare - getResult;
};

// savaing amount

function myIncomeSave() {
    const salare = parseInt(document.getElementById('salare').value);
    const save = salare / 100;
    const percantis = parseInt(document.getElementById('percantis').value);
    document.getElementById('save-amount').innerHTML = save * percantis;
}


