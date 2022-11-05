const input = document.querySelector('input');

let nums = [];

document.addEventListener( 'keyup', sumInput => {
    if( event.code === 'Enter' ) {
    console.log('enter was pressed');
    nums.push(input.value);
    input.value = '';
    }});

let button = document.getElementById("done");

button.onclick = function () {
    nums.sort((a, b) => a - b);
    alert(nums);
}


// let resultsum = document.getElementById("resultsum");
// let resultsort = document.getElementById("resultsort");

// resultsum = "sum";