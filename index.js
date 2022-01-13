var audio = new Audio('sound.mp3');
var sound = false;
function increase(time)
{
    var time_str = document.getElementById(time).innerHTML;
    var time_int = parseInt(time_str);

    if(time_int < 59)
    {
        time_int = (++time_int).toString();
        if(time_int <= 9)
        document.getElementById(time).innerHTML = "0"+time_int;
        else
        document.getElementById(time).innerHTML = time_int;
    }
    else if(time_int == 59)
    {
        time_int = ("00").toString();
        document.getElementById(time).innerHTML = time_int;
    }
}

function decrease(time)
{
    var time_str = document.getElementById(time).innerHTML;
    var time_int = parseInt(time_str);
    if(time_int == 0)
    {
        time_int = (59).toString();
        document.getElementById(time).innerHTML = time_int;
    }
    else if(time_int <= 59 && time_int != 0)
    {
        time_int = (--time_int).toString();
        if(time_int <= 9)
        document.getElementById(time).innerHTML = "0"+time_int;
        else
        document.getElementById(time).innerHTML = time_int;
    }   
}

function time_start_now()
{
    var hr_time = document.getElementById("hour").innerHTML;
    var hr_int = parseInt(hr_time);
    var min_time = document.getElementById("min").innerHTML;
    var min_int = parseInt(min_time);
    var sec_time = document.getElementById("sec").innerHTML;
    var sec_int = parseInt(sec_time);
    var actual_time = hr_int*3600 + min_int*60 + sec_int;
    if(actual_time <= 0)
    {
        audio.play();
        sound = true;
        clearInterval(start_motion);
    }
    else
    {
        --actual_time;
        var remain_hr = Math.floor(actual_time/3600);
        var remain_min = Math.floor(actual_time/60);
        var remain_sec = actual_time % 60;
        if(remain_hr <= 9)
            remain_hr = "0" + remain_hr;
        if(remain_min <= 9)
            remain_min = "0" + remain_min;
        if(remain_sec <= 9)
            remain_sec = "0" + remain_sec;
        document.getElementById("hour").innerHTML = remain_hr;
        document.getElementById("min").innerHTML = remain_min;
        document.getElementById("sec").innerHTML = remain_sec;
    }
}

function time_start()
{
    start_motion = setInterval(time_start_now , 1000);
}

function time_pause()
{
    clearInterval(start_motion);
}

function time_stop()
{
    clearInterval(start_motion);
    
    document.getElementById("hour").innerHTML = "0" + 0;
    document.getElementById("min").innerHTML = "0" + 0;
    document.getElementById("sec").innerHTML = "0" + 0;
}

function sound_stop()
{
    if(sound)
    {
        audio.pause();
        audio.currentTime = 0;
        sound = false;
    }
}



