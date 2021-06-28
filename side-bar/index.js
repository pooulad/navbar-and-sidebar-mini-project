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
const btn = document.querySelector(".toggle_btn");
const sidebar = document.querySelector(".nav_ul");
const btnImage = document.querySelector(".image");


window.addEventListener("DOMContentLoaded",function(){
    setData();
});

btn.addEventListener("click",function(){
    if(currentItem === 0){
        sidebar.classList.remove("show_sidebar");
        currentItem = 1;
    }else{
        sidebar.classList.add("show_sidebar");
        currentItem = 0;
    }
    setData();
});
function setData(){
    const item = btnType[currentItem];
    btnImage.src = item.image;
};

