let navigation = document.querySelector(".navigation");
let idyBtn =document.querySelector(".idy-btn")
let menuBtn = document.querySelector("#btn-menu");
  menuBtn.onclick = function(){
    if(navigation.style.right === "-350px"){
        navigation.style.right = "0";
    }else{
        navigation.style.right = "-350px"
    }
  }