const form = document.querySelector('.form');
const auction = document.querySelector('.auction');
const services = document.querySelectorAll('.inputServices')
const result = document.querySelector('.result');

const auditionalPrice = {
    KIA: 3,
    Toyota: 5,
    Mazda:7,
};

form.onsubmit = (evt) => {
    evt.preventDefault();
    let total;
    const status = auction.value;
    total = +status;
    console.log(total);
    
    for (let i = 0; i < services.length; i++) {
        if (services[i].checked) {
            total = total + Number(services[i].value);
        }
    }
    result.innerHTML = total;
}