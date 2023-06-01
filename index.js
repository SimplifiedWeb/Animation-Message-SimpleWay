const open = document.getElementById("open")
// console.log(open)
const close = document.getElementById("close")
// console.log(close)
const first = document.getElementById('first')
const body = document.body;
// console.log(first)

open.addEventListener("click", function(){
    first.style.display = "block"
})
close.addEventListener("click", function(){
    first.style.display = "none"
})

window.addEventListener("click", function(e) {
    if(e.target === body){
        first.style.display = "none"
    }else{
        console.log("Something went wrong", e)
    }    
    // console.log(first)
    // console.log(e.target === first)
})







