let color=document.querySelector("input[type='color']")
color.addEventListener("input",()=>{
    document.documentElement.style.setProperty('--main-color', color.value);
    localStorage.setItem("color",color.value)
})
if(localStorage.getItem("color")){
    document.documentElement.style.setProperty('--main-color', localStorage.getItem("color"));
}