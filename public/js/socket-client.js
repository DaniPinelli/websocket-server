//Ref HTML
const onLine = document.querySelector('#online');
const offLine = document.querySelector('#offline');
const txtMsg = document.querySelector('#txt-msg');
const btnSend = document.querySelector('#btn-send');

const socket = io();

socket.on('connect', () => {
    offLine.style.display = 'none';
    onLine.style.display = '';
 console.log('Connected');
});

socket.on('disconnect', () => {
    onLine.style.display = 'none';
    offLine.style.display = '';
    console.log('Disconnected');
   });

   btnSend.addEventListener('click', () => {
        const msg = txtMsg.value;
        const payload = {
            msg,
            id: '123ABC',
            date: new Date().getTime()
        }
        
        socket.emit('send-msg', payload)
   });

