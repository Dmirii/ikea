import {getData} from './getData.js'


const cartList =[
    {   id:'idd003',
        count:2},
    {   id:'idd023',
        count:4},
    {   id:'idd013',
        count:14},
];

export const loadData = ( ) => {

   

    if(location.hash){
       getData.item(location.hash.substring(1), data => console.log({hash : data}))

    }

    if(location.pathname.includes('cart')){
        getData.cart(cartList , data => console.log({cart : data}) )
    }

    //getData.catalog(data => console.log('Декор: '+data));
    //getData.subCatalog('Мебель',data => console.dir(data));

}