var hour_span =document.getElementById('hour');
var minute_span =document.getElementById('min');
var second_span =document.getElementById('sec');
var am_pm_span=document.getElementById('ampm');
var date_span=document.getElementById('date');
var month_span=document.getElementById('month');
var day_span = document.getElementById('day');


function digitalClock (){
    var currentDate = new Date();
    var days_arr = ['Mon','Tue','Wed','Thu','Fri','Sut','Sun'];
    var months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    var date = currentDate.getDate();
    var month = currentDate.getMonth();
    var day = currentDate.getDay();
    var am_pm = '';
    hour_span.innerText = hours;
    minute_span.innerText = minutes;
    second_span.innerText = seconds;
    date_span.innerText = date;
    month_span.innerText = months_arr[month];
    day_span.innerText = days_arr[day - 1]

    // seconds 0 fix         ////////////
    if(seconds <= 9){
        second_span.innerText = '0'+seconds;  
    }
    else{
        second_span.innerText = seconds;  
    }
    // minutes 0 fix           ////////////
    if(minutes <= 9){
        minute_span.innerText = '0'+minutes;
        
    }
    else{
        minute_span.innerText = minutes;
        
    }
    // hours 0 fix           ////////////
    if(hours <= 9){
        hour_span.innerText = '0'+hours;
        
    }
    else{
        hour_span.innerText = hours;
        if(hours > 12){
         hour_span.innerText = '0' + (hours - 12) ;
        }
        
    }
    // AM PM ////////
    if(hours <= 11){
        am_pm = 'am'
    }
else if(hours >= 12 ){
    am_pm = 'pm'
    
}
am_pm_span.innerText = am_pm
}

setInterval(digitalClock, 1000);
   