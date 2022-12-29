function active(key){
    switch(key){
        case "w" :  
            var au = new Audio("sounds/tom-1.mp3");
            au.play();
            break;
        case "a" :
            var au = new Audio("sounds/tom-2.mp3");
            au.play();
            break;
        case "s" :
            var au = new Audio("sounds/tom-3.mp3");
            au.play();
            break;
        case "d" :
            var au = new Audio("sounds/tom-4.mp3");
            au.play();
            break;
        case "j" :
            var au = new Audio("sounds/snare.mp3");
            au.play();
            break;
        case "k" :
            var au = new Audio("sounds/crash.mp3");
            au.play();
            break;
        case "l" :
            var au = new Audio("sounds/kick.mp3");
            au.play();
            break;
    }
}
function animate(key){
    document.querySelector("."+key).classList.add("activ");
    setTimeout(() => {
        document.querySelector("."+key).classList.remove("activ");
    }, 100);
}
for (let i = 0; i < document.querySelectorAll("button").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        let k = this.innerHTML;
        active(k);
        animate(k);
    });
    
}
document.addEventListener("keydown",function(e){
    active(e.key);
    animate(e.key);
});