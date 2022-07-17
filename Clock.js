var time = document.getElementById('time')
var title = document.querySelector('h1')
setInterval(() =>{
    let date = new Date();
    var hours = date.getHours()
    var minutes = date.getMinutes()
    var seconds = date.getSeconds()
    hours < 10 ? hours = '0' + hours : hours = hours
    minutes < 10 ? minutes = '0' + minutes : minutes = minutes
    seconds < 10 ? seconds = '0' + seconds : seconds = seconds
    let rndColor1 = Math.floor(Math.random() * 256)
    let rndColor2 = Math.floor(Math.random() * 256)
    let rndColor3 = Math.floor(Math.random() * 256)
    time.style.color = `rgb(${rndColor1}, ${rndColor2}, ${rndColor3})`
    time.textContent =  `${hours} : ${minutes} : ${seconds}`
    title.style.color =  `rgb(${rndColor1}, ${rndColor2}, ${rndColor3})`
}, 1000)






