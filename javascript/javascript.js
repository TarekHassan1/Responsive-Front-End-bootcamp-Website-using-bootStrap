

const scrollbtn=document.querySelector(".scroll-to-top");
window.addEventListener("scroll", () => {
    scrollHeight=window.scrollY;
    if(scrollHeight > 310){
        scrollbtn.classList.remove("hide");
    }
    if(scrollHeight < 310){
        scrollbtn.classList.add("hide");
    }

})