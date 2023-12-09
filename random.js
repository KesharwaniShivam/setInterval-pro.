// console.log(Math.floor(Math.random()*10 ))   // this gives values from 0 to 9

// random hex code 


const randomColor = function() {

    const hex = "0123456789ABCDEF"  // TOTAL 16 VALUES 

    let color = "#"

    for(let i = 0 ; i<6 ; i++){
    color += hex[Math.floor(Math.random()*16)]  // this gives values from 0 to 15  

   
    }
    // console.log(color)
    return color
}

let interval; // global variable , so that we can access it anywhere
const startChanging = function (){
    if(!interval){                          // agar interval nhi hai to ,interval me ye value dal do ,or agr hai to kuch mt karo 
   interval = setInterval(changeColor, 1000)
    }
    function changeColor() {
        document.body.style.backgroundColor = randomColor()
    }
}
const stopChanging = function() {
    clearInterval(interval)
    interval = null // for clean code , taki wo jada memory use na kre 
}


// console.log(randomColor())

const start = document.querySelector("#start")
// start.innerHTML = "shivam"

const stop = document.querySelector("#stop")
// stop.innerHTML = "ruk jao bhaisaab"

// let interval   // global variable , thats why we can access it anywhere , and also change its value because of let 

// start.addEventListener("click", () => {
//  interval= setInterval(randomColor, 2000)
//  document.body.style.backgroundColor = randomColor()
// })

// stop.addEventListener("click" , () => {
//     // stop.innerHTML ="hey stop"
//     clearInterval(interval)
// })

start.addEventListener("click", startChanging)
stop.addEventListener("click", stopChanging)