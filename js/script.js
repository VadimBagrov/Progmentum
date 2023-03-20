// Dinamic Matrix background

const s = window.screen;
const width = q.width = s.width;
const height = q.height = s.height;
const letters = Array(256).join(1).split('');

const draw = function () {
    q.getContext('2d').fillStyle="rgba(0,0,0,.05)";
    q.getContext('2d').fillRect(0,0,width,height);
    q.getContext('2d').fillStyle='#0F0';
    letters.map(function(y_pos, index){
        text = String.fromCharCode(65+Math.random()* 33);
        kpos = index = 10;
        q.getContext('2d').fillText(text, x_pow, y__pos);

    })
    setInterval(draw, 33);
}
