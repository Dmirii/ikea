import {getData} from './getData.js'

const wishList = ['idd005','idd025','idd035','idd015'];
const cartList =[
    {   id:'idd003',
        count:2},
    {   id:'idd023',
        count:4},
    {   id:'idd013',
        count:14},
];

export const loadData = ( ) => {

    if(location.search){
        const search = decodeURI(location.search);
        const prop = search.split('=')[0].slice(1);
        const value = search.split('=')[1];
        //console.log('prop: '+ prop + 'val: ' + value);

        if(prop == 's'){
            getData.serch(value,  data => console.log({serch : data}))

        } else if(prop == 'wishlist'){
            getData.wishlist(wishList, data => {
                console.log({wish : data})
            });

        } else if(prop === 'cat' || prop === 'subcat') {
            getData.category(prop, value, data => console.log({cat_subcat : data}))
          
        }
    }
    if(location.hash){
       getData.item(location.hash.substring(1), data => console.log({hash : data}))

    }

    if(location.pathname.includes('cart')){
        getData.cart(cartList , data => console.log({cart : data}) )
    }

    //getData.catalog(data => console.log('Декор: '+data));
    //getData.subCatalog('Мебель',data => console.dir(data));

}