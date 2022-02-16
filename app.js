var sec=0
var min=0
var hour=0
var interv
function twodigitos(digit){
    if(digit<10){
        return('0'+digit)
    }else{
        return(digit)
}
}
    function start(){
        counter()
        interv= setInterval(counter,1000)
}
    function pause(){
    clearInterval(interv)
}
function stop(){
    clearInterval(interv)
    sec=0
    min=0
    document.getElementById('counter').innerText="00:00:00"
}

function counter(){
    sec++
    if(sec==60){
        min++
        sec=0
        
            }
    if(min==60){
        min=0
        hour++
    }
    
    document.getElementById('counter').innerText=twodigitos(hour)+':'+twodigitos(min)+':'+twodigitos(sec)
}   
    