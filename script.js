document.addEventListener("DOMContentLoaded", function(){
    const toggleBtn= document.getElementById("toggle-btn");
    const body =document.body;

    //check localStorage for saved theme
    const savedTheme=localStorage.getItem("theme");
    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
    }

    //Handle toggle button click//
    toggleBtn.addEventListener("click", function(){
        body.classList.toggle("dark-mode");

        //save preference to local storage 
        if (body.classList.contains("dark-mode")){
            localStorage.setItem("theme", "dark");
        }else{
            localStorage.setItem("theme", "light");
        }
    });
});