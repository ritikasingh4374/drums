
var length = document.querySelectorAll(".drum").length;

for(var i = 0 ;i < length; i++){
   document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var button = this.innerHTML;
       switch (button) {
        case "w":
            var link = ("sounds/crash.mp3");
          var audio1 = new Audio(link);
          audio1.play();
            break;
        case "a":
            var link = ("sounds/kick-bass.mp3");
            var audio2 = new Audio(link);
            audio2.play();
            break;
        case "s":
            var link = ("sounds/snare.mp3");
            var audio3 = new Audio(link);
            audio3.play();
            break;
        case "d":
            var link = ("sounds/tom-1.mp3");
            var audio4 = new Audio(link);
            audio4.play();
            break;
        case "j":
            var link = ("sounds/tom-2.mp3");
            var audio5 = new Audio(link);
            audio5.play();
            break;

        case "k":
            var link = ("sounds/tom-3.mp3");
            var audio6 = new Audio(link);
            audio6.play();
            break;

        case "l":
            var link = ("sounds/tom-4.mp3");
            var audio7 = new Audio(link);
            audio7.play();
            break;
        default:
            break;
       }
   }
);
}


