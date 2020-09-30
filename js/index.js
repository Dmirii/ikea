const btnBurgerr  = document.querySelector('.btn-burger');
const catalog = document.querySelector('.catalog');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.btn-close');
const catalogList = document.querySelector('.catalog-list');
const subCatalog = document.querySelector('.subcatalog')

const openMenu = () => {
    catalog.classList.add('open');
    overlay.classList.add('active');
    console.log('open');
}
const closeMenu = () => {
    catalog.classList.remove('open');
    overlay.classList.remove('active');
    console.log('close');
}

const openSubMenu = event => {
    event.preventDefault();
}

btnBurgerr.addEventListener('click', openMenu);
//

overlay.addEventListener('click',closeMenu);
//
btnClose.addEventListener('click', closeMenu);
//
document.addEventListener('keydown',event =>{
    //event.preventDefault();
    console.log(event.code)
    if(event.code =='Escape'){
        closeMenu()
    }
})
//
catalogList.addEventListener('click', openSubMenu);