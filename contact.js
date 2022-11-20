// FR/EN 

let displayButton = document.querySelector("button");
    displayButton.addEventListener('click', function() {
        if (displayButton.textContent === 'English'){
            displayButton.textContent = 'Français';
            document.location.href="contactEnglish.html"; 
        }else {
            displayButton.textContent === 'Français';
            displayButton.textContent = 'English';
            document.location.href="contact.html"; 
        }
    });

let logo = document.getElementById("logo");
    logo.addEventListener('click',function() {
        if (displayButton.textContent === 'English'){
            displayButton.textContent = 'Français';
            document.location.href="homeEnglish.html"; 
        }else {
            displayButton.textContent = 'English';
            document.location.href="home.html"; 
        }
    });


