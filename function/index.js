const input = document.querySelector('input');
const resultsort = document.getElementById('resultsort');
const resultsum = document.getElementById('resultsum');

let nums = [];

input.addEventListener( 'change', () => {
    if(input.value !== '' && !/[^0-9\.]/g.test(input.value)) {
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
