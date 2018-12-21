/*
document.querySelector("button").addEventListener("click",handleClick);

function handleClick(){
    alert("I got clicked!");
}

*/

/*
document.querySelector("button").addEventListener("click",function (){
    alert("I got clicked!");
});
*/
//==================================================================================================
// var drumLength = document.querySelectorAll(".drum");

// for(var i=0;i<drumLength.length;i++){
//                                                   //監聽事件，匿名函式，false                     
//     document.querySelectorAll("button")[i].addEventListener("click",function(){

//         this.style.color="white";

//         var audio = new Audio('sounds/tom-1.mp3');
//         audio.play();
//         //當按鈕點擊到這邊所會做的事
//     });
// }

//==================================================================================================
var drumLength = document.querySelectorAll(".drum");

for(var i=0;i<drumLength.length;i++){
                                                  //監聽事件，匿名函式，false                     
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        
        //按下畫面上的按鈕
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
    });
}
    //按下鍵盤上的按鈕
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    //該事件包含一個屬性代碼鍵，告訴我們按下了哪個鍵盤鍵
    //然後我們將它發送到我們的函數發出聲音，以便發出我們想要的聲音

    //console.log(event);
    // alert("ddd");

    buttonAnimation(event.key);
});


function makeSound(key){
    
    //會在此做切換
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
        break;

        case "a":
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;

        case "s":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;

        case "d":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;

        case "j":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;

        case "k":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;

        case "l":
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;

        default:
            console.log(buttonInnerHTML);
            break;
    }
}

//動畫
function buttonAnimation(currentKey){
//產生動畫
    var activeButton = document.querySelector("."+currentKey);
    //添加pressed這個類別
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100)
}