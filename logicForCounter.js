var a=0

document.getElementById("inc").onclick=function(){
    a=a+1
    document.getElementById("count").innerHTML=a
}
document.getElementById("dec").onclick=function(){
    a=a-1
    document.getElementById("count").innerHTML=a
}
document.getElementById("rest").onclick=function(){
    a=0
    document.getElementById("count").innerHTML=a
}
