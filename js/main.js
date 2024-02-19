var elInp = document.querySelector('.inp')
var elPiyoda = document.querySelector('.piyoda')
var elVelosiped = document.querySelector('.velosiped')
var elMashina = document.querySelector('.mashina')
var elSamalyot = document.querySelector('.samalyot')
function fn(){
    var val = elInp.value
    elPiyoda.textContent = val / 4
    elVelosiped.textContent = val / 20
    elMashina.textContent = val / 100
    elSamalyot.textContent = val / 800
}