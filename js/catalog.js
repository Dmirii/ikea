import generateSubCatalog from './generateSubCatalog.js'
import { getData } from './getData.js';

export const catalog = () => {

    const updateSubCataloge = generateSubCatalog();
    //
    const btnBurgerr  = document.querySelector('.btn-burger');
    const catalog = document.querySelector('.catalog');
    //const overlay = document.querySelector('.overlay');
    const btnClose = document.querySelector('.btn-close');
    //const catalogList = document.querySelector('.catalog-list');
    const subCatalog = document.querySelector('.subcatalog');
    const subcatalogHeader =document.querySelector('.subcatalog-header');
    const btnReturn = document.querySelector('.btn-return');

    //
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    //document.body.insertAdjacentElement('beforeend',overlay);
    document.body.append(overlay);

    //
    // func
    const openMenu = () => {
        catalog.classList.add('open');
        overlay.classList.add('active');    
    }

    const closeMenu = () => {
        catalog.classList.remove('open');
        overlay.classList.remove('active'); 
        closeSubMenu();
    }

    const closeSubMenu =() => {
        subCatalog.classList.remove('subopen');
    }

    const openSubMenu = event => {
        event.preventDefault();
        const target =event.target;
        const itemTarget = target.closest('.catalog-list__item');
        if(itemTarget){
            getData.subCatalog(target.textContent, data =>{
                updateSubCataloge(target.textContent,data);
                subCatalog.classList.add('subopen');

            })
           // subcatalogHeader.innerHTML= itemTarget.innerHTML;
           // subCatalog.classList.add('subopen')
          
        }
    }

    //
    // event

    // open main menu
    btnBurgerr.addEventListener('click', openMenu);
    //
    // close main menu:
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
    subCatalog.addEventListener('click', event => {
        const btnReturn = event.target.closest('.btn-return');
        if(btnReturn){
            closeSubMenu();

        }

    })
    //btnReturn.addEventListener('click', closeSubMenu);

}

export default catalog;