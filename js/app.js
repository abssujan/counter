const counterDisplay = document.getElementById('counter-display');
const counterAdds = document.getElementById('counterAdd');
const counterMinuses = document.getElementById('counterMinus');

let total = 0;
const limit = 20;
counterAdds.addEventListener('click', () => {
    total += 1;
    if(total > limit){
        total = limit
    }
    document.body.style.setProperty('background-color', `rgb(${(total / limit) * 255}, 64, 0)`);
    counterDisplay.textContent = total;
});

counterMinuses.addEventListener('click', () => {
    total -= 1;
    if(total < 0 ){
        total = 0
    }
    document.body.style.setProperty('background-color', `rgb(${(total / limit) * 255}, 64, 0)`);
    counterDisplay.textContent = total;
});
document.body.style.setProperty('background-color', `rgb(${(total / limit) * 255}, 64, 0)`);