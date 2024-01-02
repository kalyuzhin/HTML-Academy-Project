let body = document.querySelector('.page');
let lightThemeButton = document.querySelector('.theme-button-light');
let darkThemeButton = document.querySelector('.theme-button-dark');

lightThemeButton.onclick = function(){
    lightThemeButton.classList.add('active');
    darkThemeButton.classList.remove('active');
    body.classList.remove('dark');
};

darkThemeButton.onclick = function(){
    lightThemeButton.classList.remove('active');
    darkThemeButton.classList.add('active');
    body.classList.add('dark');
};

let sansSerifFontButton = document.querySelector('.font-button-sans-serif');
let serifFontButton = document.querySelector('.font-button-serif');

sansSerifFontButton.onclick = function(){
    sansSerifFontButton.classList.add('active');
    serifFontButton.classList.remove('active');
    body.classList.remove('serif');
};

serifFontButton.onclick = function(){
    serifFontButton.classList.add('active');
    sansSerifFontButton.classList.remove('active');
    body.classList.add('serif');
};

