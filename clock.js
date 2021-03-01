setInterval(function(){
    var day_time_string;
    var months =["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    
    var d = new Date();  //Date Object is created
    var hr = d.getHours();

    var time = d.toLocaleTimeString('en-US'); // getting current time in 12-hour format
    var date = `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
    
    if(hr >= 00 && hr < 12)
        time_day_string="Good Morning";
    else if(hr >= 12  && hr <16 )
        day_time_string="Good Afternoon";
    else if(hr >= 16  && hr <20)
        day_time_string="Good Evening";
    else
        day_time_string="Good Night";
    
    document.getElementById('time-of-day').innerHTML = day_time_string;
    document.getElementById('time').innerHTML = time;
    document.getElementById('date').innerHTML = date;
    
},1000);
