const input = document.querySelector('input');
const resultsort = document.getElementById('resultsort');

let nums = [];

document.addEventListener( 'keyup', sumInput => {
    if( event.code === 'Enter' ) {
    console.log('enter was pressed');
    let number = input.value;
    nums.push(+number);
    input.value = '';
    }});

let button = document.getElementById("done");

button.onclick = function () {
    nums.sort((a, b) => a - b);
    resultsort.innerText = `Массив: ${nums}`;

    let sum = 0;
    
    for (let number of nums) {
        sum = sum + number;
    }

    resultsum.innerText = `Сумма элементов массива: ${sum}`;
}
