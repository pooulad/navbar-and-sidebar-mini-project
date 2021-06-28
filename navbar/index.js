const btnType = [
    {
        id: 0,
        image: "./images/error.webp",
    },
    {
        id: 1,
        image: "./images/list.webp",
    },
]


let currentItem = 1;
const btnImage = document.querySelector(".image");
const links = document.querySelector(".nav_ul");
const nav_toggle = document.querySelector(".toggle_btn");

window.addEventListener("DOMContentLoaded",function(){
    setImage();
});

function setImage(){
    const item = btnType[currentItem];
    btnImage.src = item.image
};


nav_toggle.addEventListener("click",function(){
    if(links.classList.contains("show_ul")){
        links.classList.remove("show_ul");
        currentItem = 1;
    }else{
        links.classList.add("show_ul");
        currentItem = 0;
    }
    setImage();
    //we can use this code =>  links.classList.toggle("show_ul");
});