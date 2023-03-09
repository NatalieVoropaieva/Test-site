AOS.init();
const targetDate = Date.parse("2032-11-08T12:00:00");

const copyClipboard = () => {
    const promocode = document.getElementById("promo-code");
    window.navigator.clipboard.writeText(promocode.innerText).then(()=>{
        
    })
}

const timerTick = () =>{
    const now = new Date();
    let diff = targetDate - now.getTime();
    const days = (diff / (24 * 60 * 60 * 1000)).toFixed(0);
    diff = diff % (24 * 60 * 60 * 1000);
    const hours = (diff / (60 * 60 * 1000)).toFixed(0);
    diff = diff % (60 * 60 * 1000);
    const minutes = (diff / (60 * 1000)).toFixed(0);
    renderTimer(days, hours, minutes);
}
const renderTimer = (d, h, m) => {
    const day = document.getElementById('days');
    const hour = document.getElementById('hours');
    const minute = document.getElementById('minutes');
    if (day) {
        day.innerText=`${d}`
    }
    if (hour) {
        hour.innerText=`${h}`
    }
    if (minute) {
        minute.innerText=`${m}`
    }
}
setInterval(timerTick, 1000);
