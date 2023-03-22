// Dinamic Matrix background

const s = window.screen;
const width = q.width = s.width;
const height = q.height = s.height;
const letters = Array(256).join(1).split('');

const draw = function () {
    q.getContext('2d').fillStyle="rgba(0,0,0,.05)";
    q.getContext('2d').fillRect(0,0,width,height);
    q.getContext('2d').fillStyle='#C2C2C2';
    letters.map(function(y_pos, index,){
        text = String.fromCharCode(65 + Math.random() * 33);
        x_pos = index * 10;
        q.getContext('2d').fillText(text, x_pos, y_pos);
        letters[index] = ( y_pos > 758 + Math.random() * 1e4) ? 0 : y_pos + 10;
    });
};
setInterval(draw , 43);

// Date and time

setInterval(function() {
    const time = document.querySelector('.time') //Получаем time из html
    const date = new Date(); //Получаем текущую дату и время
    const currentTime = date.toLocaleTimeString(); //Получаем только время

    time.textContent = currentTime;
}, 1000) // Время

setInterval(function() {
    const dateNow = document.querySelector('.date')  //Получаем date из html
    date = new Date(); //Получаем текущую дату и время
    const options = { weekday: 'long', month: 'long', day: 'numeric' }; //опции для даты
    const currentDate = date.toLocaleDateString('en-Us', options); //текущая дата

    dateNow.textContent = currentDate;
}, 1000) //Дата и день недели
