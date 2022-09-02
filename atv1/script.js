function Nome(){
let nome = document.querySelector('input').value;
const paragrafo = document.createElement('p');

paragrafo.innerText = nome
InputDeviceInfo.value=""
document.body.appendChild(paragrafo);

}