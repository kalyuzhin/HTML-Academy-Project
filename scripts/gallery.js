let previews = document.querySelectorAll('.preview-list a');
let mainPhoto = document.querySelector('.active-photo');

for (let activeImage of previews){
   activeImage.onclick = function(evt){
    let currentActive = document.querySelector('.active-item');
    currentActive.classList.remove('active-item');
    evt.preventDefault();
    mainPhoto.src = activeImage.href;
    activeImage.classList.add('active-item');
   }; 
}