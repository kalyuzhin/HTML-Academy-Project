let gridViewButton = document.querySelector('.card-view-button-grid');
let listViewButton = document.querySelector('.card-view-button-list');
let cards = document.querySelector('.cards');

gridViewButton.onclick = function(){
    gridViewButton.classList.add('active');
    listViewButton.classList.remove('active');
    cards.classList.remove('list');
};

listViewButton.onclick = function(){
    listViewButton.classList.add('active');
    gridViewButton.classList.remove('active');
    cards.classList.add('list');
};
