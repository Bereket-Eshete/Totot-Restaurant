export function toggleTheme() {
    const themeToggle = document.getElementById('theme-toggle')
    themeToggle.addEventListener("click", ()=>{
        const htmlElement =document.documentElement;
        htmlElement.classList.toggle("dark");
    
        if(htmlElement.classList.contains("dark")){
            themeToggle.textContent = "☀️";
        }else{
            themeToggle.textContent =" 🌙";
        }
    });
} 