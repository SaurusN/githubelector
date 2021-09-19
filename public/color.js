const socket = io()


let btnColor = document.querySelector('#elector');

const color = btnColor.addEventListener('click', () => btnColor.style.backgroundColor='#337ab7');


socket.emit('cambiar-color', {colro:[color,]});
