const btnBurgerr  = document.querySelector('.btn-burger');
const catalog = document.querySelector('.catalog');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.btn-close');
//const catalogList = document.querySelector('.catalog-list');
const subCatalog = document.querySelector('.subcatalog');
const subcatalogHeader =document.querySelector('.subcatalog-header');

const openMenu = () => {
    catalog.classList.add('open');
    overlay.classList.add('active');
    console.log('open');
}

const closeMenu = () => {
    catalog.classList.remove('open');
    overlay.classList.remove('active');
    subCatalog.classList.remove('subopen')

    console.log('close');
}

const openSubMenu = event => {
    event.preventDefault();

    const itemTarget = event.target.closest('.catalog-list__item');
    if(itemTarget){
        subcatalogHeader.innerHTML= itemTarget.innerHTML;
        subCatalog.classList.add('subopen')
    }
}

// open main menu
btnBurgerr.addEventListener('click', openMenu);
//

//
// close main manu
// overlay clicked
overlay.addEventListener('click',closeMenu);
// button Close clicked
btnClose.addEventListener('click', closeMenu);
// button Esc pressed
document.addEventListener('keydown',event =>{
  
    if(event.code =='Escape'){
        closeMenu();
    }
})
//
catalog.addEventListener('click', openSubMenu);