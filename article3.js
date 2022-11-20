/* FR/EN */

let displayButton = document.querySelector("button");
    displayButton.addEventListener('click', function() {
        if (displayButton.textContent === 'English'){
            displayButton.textContent = 'Français';
            document.location.href="article3English.html"; 
        }else {
            displayButton.textContent === 'Français';
            displayButton.textContent = 'English';
            document.location.href="article3.html"; 
        }
    });

let logo = document.getElementById("logo");
    logo.addEventListener('click',function() {
        if (displayButton.textContent === 'English'){
            displayButton.textContent = 'Français';
            document.location.href="home.html"; 
        }else {
            displayButton.textContent = 'English';
            document.location.href="homeEnglish.html"; 
        }
    });