/* FR/EN */

let displayButton = document.querySelector("button");
    displayButton.addEventListener('click', function() {
        if (displayButton.textContent === 'English'){
            displayButton.textContent = 'Français';
            document.location.href="article1English.html"; 
        }else {
            displayButton.textContent === 'Français';
            displayButton.textContent = 'English';
            document.location.href="article1.html"; 
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

// carrousel 1

    const imgs = document.getElementById("img");
    const img = document.querySelectorAll ("#img img");
    
    let i=0;
    
    function carrousel(){
        i++;
        if(i > img.length -1){
            i=0;
        }
        imgs.style.transform = `translateX(${-i *500}px)`;
    }
    setInterval(carrousel, 3000);

// carrousel 3

const imgs2 = document.getElementById("img2");
const img2 = document.querySelectorAll ("#img img");

let j=0;

function carrousel2(){
    j++;
    if(j > 4 -1){
        j=0;
    }
    imgs2.style.transform = `translateX(${-j *500}px)`;
}
setInterval(carrousel2, 3000);

// carrousel 2

const imgs3 = document.getElementById("img4");
const img3 = document.querySelectorAll ("#img img");

let k=0;

function carrousel3(){
    k++;
    if(k > img3.length -1){
        k=0;
    }
    imgs3.style.transform = `translateX(${-k *400}px)`;
}
setInterval(carrousel3, 3000)