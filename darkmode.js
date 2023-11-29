function changeOfTheme(){
    var element = document.body;
    element.classList.toggle("dark-mode");
    
   
    var isDarkMode = element.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode);
    updateThemeIcon(isDarkMode);

  }

  function applySavedTheme() {
  
 
  var isDarkMode = localStorage.getItem("darkMode") === "true";


  
  if (isDarkMode) {
    document.body.classList.add("dark-mode");
    
  }else {
    document.body.classList.remove("dark-mode");
    

}

// Update the theme icon based on the saved theme
updateThemeIcon(isDarkMode);

}

function updateThemeIcon(isDarkMode) {
  var mainImage = document.getElementById("main-image");
    var sunIcon = document.querySelector(".sun");
    var moonIcon = document.querySelector(".moon");

    if (isDarkMode) {
        sunIcon.style.transform = "scale(1) rotate(360deg)";
        sunIcon.style.display = "block";
        moonIcon.style.display = " none";
        mainImage.src = "Best-Black-and-white-pictures.jpg";
      
    } else {
       
        moonIcon.style.transform = "scale(1) rotate(360deg) ";
        sunIcon.style.display = "none";
        moonIcon.style.display = "block";
        mainImage.src = "AboutmeIrenePhoto.JPG";
    }
}




window.addEventListener("load", applySavedTheme);