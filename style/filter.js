const nav = [{
    id: 'All Rooms',
    num: '1'
},
{
    id: 'Luxury',
    num: '2'
},
{
    id: 'White',
    num: '3'
},
{
    id: 'Black',
    num: '4'
},
{
    id: 'Cheap',
    num: '5'
},
];


const data = [{
    url: 'https://blenderartists.org/uploads/default/original/4X/9/7/f/97f719d01b3861ae6bcee365828b1996f0073100.jpeg',
    text: 'King Room',
    price: "$550",
    id: 'Luxury'

},
{
    url: 'https://www.mdmguesthouse.com/data/2560/Mdm-Luxury-Rooms-Roma-camere-28.jpg',
    text: 'Valentine Room',
    price: "$653",
    id: 'Luxury'

}, {
    url: 'https://hips.hearstapps.com/bestproducts/assets/18/03/1516305811-burj-al-arab.jpg',
    text: 'Hilton Room',
    price: "$680",
    id: 'Luxury'

}, {
    url: 'https://www.adaremanor.com/wp-content/uploads/2020/12/classic-king-bedroom-2.jpg',
    text: 'Classic Room',
    price: "$75.00",
    id: 'Cheap'

}, {
    url: 'https://media.hotelkeys.it/raphaelhotel_2015/ownimage/2016324123550.jpg',
    text: 'Small Room',
    price: "$70.00",
    id: 'Cheap'

}, {
    url: 'https://i.insider.com/57acd6efdb5ce9b20f8b6379?width=1000&format=jpeg&auto=webp',
    text: '1+1 Room',
    price: "$93.00",
    id: 'Cheap'

}, {
    url: 'https://fabellomobilya.com/wp-content/uploads/2022/07/Adad.jpg',
    text: 'Queen Room',
    price: "$400",
    id: 'White'

}, {
    url: 'https://s7d2.scene7.com/is/image/ritzcarlton/50569234-XIYRZ-Guest%20Room?$XlargeViewport100pct$',
    text: 'Perfect Room',
    price: "$430",
    id: 'White'

}, {
    url: 'https://images.charmingsardinia.com/hotels/1114/static/files/bb-delle-vittorie-sicily1.jpg',
    text: 'Concert Room',
    price: "$425",
    id: 'White'

}, {
    url: 'https://q-xx.bstatic.com/xdata/images/hotel/840x460/222122112.jpg?k=978d7fd6723fa753f958bc612af1295dd822ec72df2385fcb95c99965d4c6a74&o=',
    text: 'Dark Room',
    price: "$450",
    id: 'Black'

}, {
    url: 'https://www.mymydiy.com/wp-content/uploads/2022/05/Modern-Luxury-Bedrooms.jpeg',
    text: 'Paris Room',
    price: "$416",
    id: 'Black'

}, {
    url: 'https://i.pinimg.com/474x/47/b0/10/47b010dfa71819851467175fe05e07ef.jpg',
    text: 'Shadow Room',
    price: "$435",
    id: 'Black'

}, 
]
let filterContent = data
const cardsCountener = document.querySelector('.product_carts')
const createProduct = () =>{
cardsCountener.innerHTML = ""
filterContent.map((data) => {
const countener = document.createElement('div')
countener.classList.add('product__box')
const quick = document.createElement('div')
quick.classList.add('quick')
const quickBtn = document.createElement('button')
quickBtn.classList.add('quick__btn')
quick.append(quickBtn)
const quickBtnText = document.createElement('p')
quickBtnText.classList.add('quick__btn-text')
quickBtnText.textContent = 'Quick View'
quickBtn.append(quickBtnText)
const productImg = document.createElement('div')
productImg.classList.add('productImg')
const img = document.createElement('img')
img.src = data.url
img.classList.add('product__box-image')
productImg.append(img)
productImg.append(quick)
const p1 = document.createElement('p')
p1.textContent = data.text
p1.classList.add('product__box-title')
const p2 = document.createElement('p')
p2.textContent = data.price
p2.classList.add('product__box-price')
const a = document.createElement('a')
// a.href = ''
a.classList.add('product__box-icon')
const i1 = document.createElement('img')
i1.classList.add('product__box-heart1')
i1.src = 'https://preview.colorlib.com/theme/cozastore/images/icons/icon-heart-01.png'
a.append(i1)
const i2 =document.createElement('img')
i2.classList.add('product__box-heart2')
i2.classList.add('hidden')
i2.src = 'https://preview.colorlib.com/theme/cozastore/images/icons/icon-heart-02.png'
a.append(i2)
countener.append(productImg)
countener.append(p1)
countener.append(p2)
countener.append(a)
cardsCountener.append(countener)

})
}
createProduct()

////
const productLists = document.querySelector('.product__lists')
const ul = document.createElement('ul')
ul.classList.add('product__list')
nav.map((nav)=>{
const li = document.createElement('li')
li.classList.add('product__list-info')
li.textContent = nav.id
ul.append(li)
productLists.append(ul)
li.addEventListener('click',()=>{
if(nav.id == 'All Rooms'){
    filterContent = data
    createProduct()

}else{
    filterContent = data.filter((x)=> x.id == nav.id)
    createProduct()
}
})
})

var btna = $('#button');


$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btna.addClass('show');

  } else {
    btna.removeClass('show');
  }
});

btna.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});



