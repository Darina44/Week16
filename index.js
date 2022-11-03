let names = ["Маша", "Саша", "Женя"];
let names = new Array("Маша", "Саша", "Женя");

for (let i = 0; i < names.length; i++) {
    console.log(i);
    console.log(names[i]);
}

for(let name of names) {
    console.log(name);
}

names.forEach(function(name) {
    console.log(name);
});