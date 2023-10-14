// document.onkeydown = function(event){
//     if(event.code == "ArrowRight"){
//         document.getElementById("main").style.justifyContent = "flex-end";
//         var mover = document.getElementById("child").getBoundingClientRect();
//         var target = document.getElementById("targetRight").getBoundingClientRect();
//         console.log("mover on right is",mover);
//         console.log("targetRight is",target);
//     }else if(event.code == "ArrowLeft"){
//         document.getElementById("main").style.justifyContent = "flex-start";
//         var mover = document.getElementById("child").getBoundingClientRect();
//         var target = document.getElementById("targetLeft").getBoundingClientRect();
//         console.log("mover on left is",mover);
//         console.log("targetLeft is",target);
//     }
// }
// document.onkeyup = function(){
//     document.getElementById("main").style.justifyContent = "center";
//     // var mover = document.getElementById("child").getBoundingClientRect();
//     // console.log("mover on keyUp",mover); 
// } 

// let score = 0;
// while(true){
//     let random = Math.random();
//     let randomNo = Math.round(random);
//     if(randomNo){
//         document.getElementById("targetLeft").style.display = "none";
//         document.addEventListener("keydown",function(event){
//             if(event.code == "ArrowRight"){
//                 score++;
//                 console.log("Score is",score);
//             }else if(event.code == "ArrowLeft"){
//                 score--
//                 console.log("Score is",score);
//             }
//         })
//     }else{
//         document.getElementById("targetRight").style.display = "none";
//         document.addEventListener("keydown",function(event){
//             if(event.code == "ArrowLeft"){
//                 score++;
//                 console.log("Score is",score);
//             }else if(event.code == "ArrowRight"){
//                 score--
//                 console.log("Score is",score);
//             }
//         })
//     }
// }

let score = 0;
let random ;
let randomNo ;
document.onkeyup = function(event){
    if(event.code == "ArrowRight" || event.code == "ArrowLeft"){
    document.getElementById("main").style.justifyContent = "center";
    random = Math.random();
    randomNo = Math.round(random);
    if(randomNo){
        document.getElementById("targetLeft").style.display = "none";
        document.getElementById("targetRight").style.display  = "block";
    }else{
        document.getElementById("targetRight").style.display  = "none";
        document.getElementById("targetLeft").style.display = "block";
    }
  }
}

document.onkeydown = function(event){
    if(randomNo && event.code == "ArrowRight"){
        document.getElementById("main").style.justifyContent = "flex-end";
        score++;
        console.log("Score is",score);
        document.getElementById("score").innerText = score;
    }else if(randomNo && event.code == "ArrowLeft"){
        document.getElementById("main").style.justifyContent = "flex-start";
        score--;
        console.log("Score is",score);
        document.getElementById("score").innerText = score;
    }else if(!randomNo && event.code == "ArrowLeft"){
        document.getElementById("main").style.justifyContent = "flex-start";
        score++;
        console.log("Score is",score);
        document.getElementById("score").innerText = score;
    }else if(!randomNo && event.code == "ArrowRight"){
        document.getElementById("main").style.justifyContent = "flex-end";
        score--;
        console.log("Score is",score);
        document.getElementById("score").innerText = score;
    }
}