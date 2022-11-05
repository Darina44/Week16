const input = document.querySelector('input');

let nums = [];

document.addEventListener( 'keyup', sumInput => {
    if( event.code === 'Enter' ) {
    console.log('enter was pressed');
    nums.push(input.value);
    input.value = '';
    }});


// let resultsum = document.getElementById("resultsum");
// let resultsort = document.getElementById("resultsort");

// let sortedNums = nums.sort;

// resultsum = "sum";