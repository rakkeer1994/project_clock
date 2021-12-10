

function clock()
{

    var hours=document.getElementById("hours");
    var minutes=document.getElementById("mins");
    var seconds=document.getElementById("secs");
    var am_pm=document.getElementById("ampm");
    
    var time=new Date();
    var hrs=time.getHours();
    var min=time.getMinutes();
    var sec=time.getSeconds();
    
   
    if(hrs>12){
        am_pm.innerHTML="PM";

     }
    if(hrs>12){
        hrs = hrs-12;
    }
    
    if(hrs == 0){
        hrs = 12;
    }
    
    if(hrs<10){
        hrs = '0' + hrs;
    }
    
    if(min<10){
        min = '0' + min;
    }
    if(sec<10){
        sec = '0' + sec;
    }
    
   
     hours.innerHTML=hrs;
     minutes.innerHTML=min;
     seconds.innerHTML=sec;
    
     var i=document.getElementById('wakeuptimeselector').value;
     var j=document.getElementById('lunchtimeselector').value;
     var k=document.getElementById('naptimeselector').value;
     var hourr=new Date().getHours();
     
     if(i==hourr){
         document.getElementById('right-lb2').style.backgroundImage="url(./picture/breakfast.jpg)";
         document.getElementById('right-lb1').innerHTML="lets have some breakfast!!";
     }
 
     else if(j==hourr){
         document.getElementById('right-lb2').style.backgroundImage="url(./picture/lunch.jpg)";
         document.getElementById('right-lb1').innerHTML="lets have some lunch!!";
     }
     else if(k==hourr){
         document.getElementById('right-lb2').style.backgroundImage="url(./picture/dinner.jpg)";
         document.getElementById('right-lb1').innerHTML="lets have some dinner!!";
     }
}
setInterval(clock,1000);   


function makediv(){
    var container=document.createElement('div');
    container.className="display-sedule";
    container.id="dynamic-block";
    document.getElementById('inside-sedule').appendChild(container);

    // var wakevalue=document.getElementById("wakeuptimeselector");
    // var value=wakevalue.options[wakevalue.selectedIndex].text;
    // document.getElementById("dynamic-block").innerHTML="Wake Up Time"+value;

    // var lunchvalue=document.getElementById("lunchtimeselector");
    // var value=lunchvalue.options[lunchvalue.selectedIndex].text;
    // document.getElementById("dynamic-block").innerHTML="Lunch Time"+value;

    // var napvalue=document.getElementById("naptimeselector");
    // var value=lunchvalue.options[napvalue.selectedIndex].text;
    // document.getElementById("dynamic-block").innerHTML="Nap Time"+value;
}

var count=0;
function settime(){
   if(count==0){
    makediv(); 
    count++;
   }

   var W=document.getElementById("wakeuptimeselector").value;
    var L=document.getElementById("lunchtimeselector").value;
    var N=document.getElementById("naptimeselector").value;

    var wake=document.getElementById("wakeup-time");
    var lunch=document.getElementById("lunch-time");
    var nap=document.getElementById("dinner-time");
   
    //    wake-time
   if(W==24) wake.innerHTML=("Wake up time : "+(W-12)+" AM - "+(01)+"AM");
   else if(W==12) wake.innerHTML=("Wake up time : "+(W)+" PM - "+"01PM");
   else if(W==11) wake.innerHTML=("Wake up time : "+(W)+" AM - "+(12)+"PM");
   else if(W>12) wake.innerHTML=("Wake up time : "+(W-12)+" PM - "+(W-11)+"PM");
   else if(W>0) wake.innerHTML=("Wake up time : "+(W)+" AM - "+(parseInt(W)+1)+"AM");
   else wake.innerHTML=("Wake up time :      --      ");
    // lunch-time
   if(L==24) lunch.innerHTML=("Lunch time : "+(L-12)+" AM - "+(01)+"AM");
   else if(L==12) lunch.innerHTML=("Lunch time : "+(L)+" PM - "+"01PM");
   else if(L==11) lunch.innerHTML=("Lunch time : "+(L)+" AM - "+(12)+"PM");
   else if(L>12) lunch.innerHTML=("Lunch time : "+(L-12)+" PM - "+(L-11)+"PM");
   else if(L>0) lunch.innerHTML=("Lunch time : "+(L)+" AM - "+(parseInt(L)+1)+"AM");
   else lunch.innerHTML=("Lunch time :      --      ");
    // NAP-TIME
   if(N==24) nap.innerHTML=("Nap time : "+(N-12)+" AM - "+(01)+"AM");
   else if(N==12) nap.innerHTML=("Nap time : "+(N)+" PM - "+"01PM");
   else if(N==11) nap.innerHTML=("Nap time : "+(N)+" AM - "+(12)+"PM");
   else if(N>12) nap.innerHTML=("Nap time : "+(N-12)+" PM - "+(N-11)+"PM");
   else if(N>0)nap.innerHTML=("Nap time : "+(N)+" AM - "+(parseInt(N)+1)+"AM");
   else nap.innerHTML=("Nap time :      --      ");
    
}
