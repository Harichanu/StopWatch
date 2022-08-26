var hr=0;
var min=0;
var sec=0;
var count=0;
var Timer = false;
let count1 = document.getElementById("count");
let sec1 = document.getElementById("sec");
let min1 = document.getElementById("min");
let hr1 = document.getElementById("hr");

function start(){
    Timer = true;
    stopwatch()
}
function stopwatch(){
    if (Timer == true){
      
        
        
        if(count<10){
            count1.innerHTML= "0"+count  ;
            
            
        }
        else{
            count1.innerHTML= count  ;
        }
        count=count+1;
        if (count==99){
            count=0;
            sec++;
           
            if (sec<10){
                sec1.innerHTML="0"+sec;
            }
            else{
                sec1.innerHTML=sec;
            }
            if (sec==59){
                sec=0;
                min++;
                if(hr<10){
                    min1.innerHTML="0"+min;

                }
                else{
                    min1.innerHTML=min;
                }
                if (min==59){
                    min=0;
                    hr++;
                    if(hr<10){
                        hr1.innerHTML="0"+hr;
    
                    }
                    else{
                        hr1.innerHTML=hr;
                    }
                    if (hr==23){
                        reset()
                    }
                }
            }
       }
        
        setTimeout(stopwatch,10) 
    }
}
function reset(){
    Timer=false;
    hr=  0;
    min= 0;
    sec= 0;
    count=0;
    count1.innerHTML="00";
    sec1.innerHTML="00";
    min1.innerHTML="00";
    hr1.innerHTML="00";
   
   
}
function stop(){
    Timer = false;
    

}


