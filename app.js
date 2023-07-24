let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".sec");
let dayy = document.querySelector(".day");
let month = document.querySelector(".mnth");


function clock() {
    let today = new Date();
    let hr = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    let dy = today.getDay();
    let mnth = today.getMonth();

    hr = hr < 10 ? "0" + hr : hr;
    min = min < 10 ? "0" + min: min;
    sec = sec < 10 ? "0" + sec : sec;
    dy = dy < 10 ? "0" + dy : dy;
    mnth= mnth < 10 ? "0" + mnth: mnth;

    hour.textContent = hr;
    minute.textContent = min;
    second.textContent = sec;
    dayy.textContent = dy;
    month.textContent=mnth

    
    switch (today.getDay()) {
        case 00:
            dayy.textContent = "sun"
            break;
            case 01:
                dayy.textContent="mon"
            break;
            case 02:
                dayy.textContent="tue"
            break;
            case 03:
                dayy.textContent="wed"
            break;
            case 04:
            dayy.textContent = "Thr"
            break;
            case 05:
                dayy.textContent="fri"
            break;
            case 06:
                dayy.textContent="sat"
            break;
        default:
            break;
    }
    switch (today.getMonth()) {
        case 00:
            month.textContent = "Jan"
            break;
        case 01:
            month.textContent = "Feb"
            break;
        case 02:
            month.textContent = "Mar"
            break;
        case 03:
            month.textContent = "Apr"
            break;
        case 04:
            month.textContent = "May"
            break;
        case 05:
            month.textContent = "Jun"
            break;
        case 06:
            month.textContent = "Jul"
            break;
        case 07:
            month.textContent = "Aug"
            break;
        case 08:
            month.textContent = "Sept"
            break;
        case 09:
            month.textContent = "Oct"
            break;
        case 10:
            month.textContent = "Nov"
            break;
        case 11:
            month.textContent = "Dec"
            break;
        default:
            break;
        
        
    }
    
   

}

setInterval(() => {
    clock()
}, 1000);