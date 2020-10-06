import { getData } from "./getData.js";
import userData from "./userData.js"; 

const generateCartPage = () => {

    const cartList = document.querySelector('.cart-list');
    const cartTotalPrice = document.querySelector('.cart-total-price')

    const generateCart = (data) => {
        cartList.textContent='';
        let totalPrice ='';
        
        data.forEach(item => {
            

            
           

            const { category, count, subcategory, name:itemName, img , description , price , id } = item;
            let option ='';
            let countUser = userData.cartList.find(item => item.id === id).count;
             if(countUser > count){
                countUser = count;
            }

            for (let i =1; i<= count; i++){
                option += ` <option value=${i} ${ countUser ===i ? 'selected' : ''}>${i}</option>`
            }

            cartList.insertAdjacentHTML('beforeend', `
            <li class="cart-item">
				<div class="product">
					<div class="product__image-container">
						<img src=${img[0]} alt=${itemName} >
					</div>
					<div class="product__description">
						<h3 class="product__name">
							<a href="card.html#${id}">${itemName}</a></h3>
						<p class="product_description-text">${description}</p>
					</div>
					<div class="product__prices">
						<div class="product__price-type product__price-type-regular">
                            <div>
                            <div class="product__total product__total-regular">${price*countUser}</div>
                            ${
                                countUser > 1 ? `
                                <div class="product__price-regular">${price}.-</div>
                                ` :
                                ``
                            }							
							
							</div>
						</div>
					</div>
					<div class="product__controls">

						<div class="product-controls__remove">
							<button type="button" class="btn btn-remove" data-idd=${id}>
								<img src="image/remove-thin-24.16c1cc7a.svg" alt="Удалить товар">
							</button>
						</div>
						<div class="product-controls__quantity">
							<select title="Выберите количество" aria-label="Выберите количество" data-idd=${id}>
                                ${option}

							</select>
						</div>
					</div>
				</div>
			</li>
            `)
            
        });    
    

    };

    if(location.pathname.includes('cart')){
        getData.cart(userData.cartList , generateCart );
        cartList.addEventListener('change', event => {
            console.log(event.target.dataset.idd);
            console.log(parseInt(event.target.value))
            userData.changeCountCartList = {
                id: event.target.dataset.idd,
                count: parseInt(event.target.value),
            }
            getData.cart(userData.cartList , generateCart );
        })
    }

};

export default generateCartPage;