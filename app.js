function myfun() {
    const a = parseInt(document.getElementById('foot').value);
    const b = parseInt(document.getElementById('rent').value);
    const c = parseInt(document.getElementById('clothes').value);
    const e = document.getElementById('result').innerHTML = a + b + c;
    const d = parseInt(document.getElementById('salare').value);
    document.getElementById('balance').innerHTML = d - e;
}
// function myfunA() {
// const d = parseInt(document.getElementById('salare').value);
// const e = parseInt(document.getElementById('result').value);
    // document.getElementById('balance').innerHTML = d - myfun;
// }

