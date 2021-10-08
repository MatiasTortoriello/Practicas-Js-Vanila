
/*************************************CRONÓMETRO *****************************************************/

/*<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="main.css">
    <script src="main.js"></script>
</head>
<body>
    <h1 class="title">STOPWATCH</h1>
    <h2 class="subtitle">VANILLA JAVASCRIPT STOPWATCH</h2>
    <p class="time" id="time">00:00</p>
    <div class="actions">
        <button class="btn" id="start">Start</button>
        <button class="btn" id="stop">Stop</button>
        <button class="btn" id="reset">Reset</button>
    </div>
</body>
</html>


////////////////////////////////////////////SASS
@import url('https://fonts.googleapis.com/css2?family=Stick+No+Bills:wght@400;700&display=swap');

*{
    font-family: 'Stick No Bills', sans-serif;
}

body{
    background: #0f0e17;
}
.title, .subtitle{
    color: #fffffe;
    font-weight: bold;
    text-align: center;
}
.title{
    font-size: 4rem;
}

.subtitle{
    font-size: 2rem;
}

.actions{
    display: flex;
    justify-content: center;
    gap: 1rem;
}

.btn{
    color: #fffffe;
    background: #0f0e17;
    padding: 1rem 3rem;
    border-radius: 3px;
    border: 2px solid #ff8906;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all .2s;

    &:hover{
        background: #ff8906;
        color: #0f0e17;
    }
    &:active{
        transform: scale(0.9);
    }

}

.time{
    color: #fffffe;
    text-align: center;
    font-size: 2rem;
    margin: 4rem 0;
}


//////////////////////////////////////////////////////////////////JS

function convertToTime(number){
    return number<10? '0'+number : number;
}

window.onload =  () => {
    let start = document.getElementById('start');
    let stop = document.getElementById('stop');
    let reset = document.getElementById('reset');
    let time = document.getElementById('time');
    let milliseconds = 0;
    let seconds = 0;
    let interval;

    start.onclick = e => {
        clearInterval(interval);
        interval = setInterval((e) => {
            milliseconds++;
            if (milliseconds==100) {
                milliseconds = 0;
                seconds++;
            }
            time.innerText =  convertToTime(seconds)+ ":" +convertToTime(milliseconds);
        }, 10);
    }

    stop.onclick = e => {
        clearInterval(interval);
    }

    reset.onclick = e => {
        clearInterval(interval);
        milliseconds = 0;
        seconds = 0;
        time.innerText = '00:00';
    }
}*/


