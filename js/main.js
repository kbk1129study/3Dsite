let circle = document.querySelector("#circle");
let article = circle.querySelectorAll("article");

for(let el of article){
    el.addEventListener("mouseenter",e=>{
        circle.style.animationPlayState ="paused";
    });
    el.addEventListener("mouseleave",e=>{
        circle.style.animationPlayState ="running";
    });
}



/*circle 변수저장, 
article 변수저장
각 요소에 반복문 실행
articledp akdntm 올라가면 애니메이션 중지
벗어나면, 다시실행*/