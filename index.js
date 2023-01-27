const btnView = document.getElementById("btn-view")
const postElements = document.querySelectorAll(".post")
const hamburger = document.querySelector(".fa-bars")
const navMobile = document.querySelector(".nav-bar-mobile") 


hamburger.addEventListener("click",function(){
    navMobile.classList.toggle("hide")    
})


if(btnView){
    btnView.addEventListener("click",function(){
        postElements.forEach(el => el.classList.remove("hide"))
        this.classList.add("hide")
    })
}