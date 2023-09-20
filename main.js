// mobile navigation
const menu = document.getElementById('menu');
const navLink = document.querySelector('.links');
const closeNav = document.getElementById('closeNav');
const blur = document.getElementById('blur');

menu.addEventListener('click', e => {
    navLink.classList.add('mobile');
    blur.style.display = 'block';
})

closeNav.addEventListener('click', e => {
    navLink.classList.remove('mobile');
    blur.style.display = 'none';
})



// adding and removing items from the cart

const Cart = document.getElementById('cart');
const addCart = document.getElementById('addCart');
const addItem = document.getElementById('addItem');
const removeItem = document.getElementById('removeItem');
const itemCount = document.getElementById('itemCount');

const itemPopup = document.getElementById('itemPopup');
const cartBox = document.getElementById('cartBox');
const cartDts = document.querySelector('.cartDts');

const itemPrice = document.getElementById('itemPrice');
const total = document.getElementById('total');
const amount = document.getElementById('amount');
const deleteBtn = document.getElementById('deleteBtn');

const emptyCart = document.querySelector('.emptyCart');
const checkOut = document.getElementById('checkOut');




// increase and reduce the item number

addItem.addEventListener('click', () => {
    itemCount.innerText ++
});

removeItem.addEventListener('click', () => {
    if(itemCount.innerText > 0) {
        itemCount.innerText --
    } else {
        itemCount.innerText = 0
    }
    
});


// add item to cart

addCart.addEventListener('click', () => {

    //popup icon
    if(itemCount.innerText > 0) {
        itemPopup.style.display = 'block';
        itemPopup.textContent = itemCount.innerText;
    } else {
        itemPopup.style.display = 'none';
    }
   
})


// cart popup

Cart.addEventListener('click', () => {
   cartBox.classList.toggle('open');

    if(itemCount.innerText > 0) {
        cartDts.style.display = 'flex';
        checkOut.style.display = 'block';

        emptyCart.style.display = 'none';
    }  else {
        cartDts.style.display = 'none';
        checkOut.style.display = 'none';

        emptyCart.style.display = 'block';
    }

    //get item amounts
    amount.innerText = itemCount.innerText
    amount.style.fontStyle = 'normal';

    //get total price 
    itemPrice.innerText = 125.00;
    total.innerText = itemPrice.innerText * amount.innerText; 

    amount.style.marginRight = '4px';
    amount.style.marginLeft = '4px';
    total.style.fontStyle = 'normal';
    itemPrice.style.fontStyle = 'normal';

})

// clear cart
deleteBtn.addEventListener('click', (e) => {
    cartDts.style.display = 'none';
    emptyCart.style.display = 'block';
    checkOut.style.display = 'none';
    itemPopup.style.display = 'none';
    itemCount.innerText = 0 ;


})


// mobile slide 

const slide = document.querySelector('.slide');
const slideImg = document.querySelectorAll('.slideImg');

const prev = document.getElementById('prev');
const next = document.getElementById('next');

const auto = true;
const intervalTime = 5000;
let slideInterval;



if(auto) {
    clearInterval(slideInterval)
    slideInterval = setInterval((nextSlide), intervalTime);
}


next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

function nextSlide (){
    const current = document.querySelector('.current');

    current.classList.remove('current');

    if(current.nextElementSibling) {
        current.nextElementSibling.classList.add('current');
    } else {
        slideImg[0].classList.add('current');
    }
    
    
    setTimeout(() => current.classList.remove('current'));
    if(auto) {
        clearInterval(slideInterval)
        slideInterval = setInterval((nextSlide), intervalTime);
    }
}


function prevSlide () {
    const current = document.querySelector('.current');

    current.classList.remove('current');

    if(current.previousElementSibling) {
        current.previousElementSibling.classList.add('current');
    } else {
        slideImg[slideImg.length -1].classList.add('current')
    }

    setTimeout(() => current.classList.remove('current'));

    if(auto) {
        clearInterval(slideInterval)
        slideInterval = setInterval((nextSlide), intervalTime);
    }
}



// blur display for destop 
const flexImages = document.querySelector('.flex-images');
const flexImg = document.querySelectorAll('#flexImg');
const active = document.querySelector('.active');

const blurDisplay = document.querySelector('.blurDisplay');
const closeBTn = document.getElementById('closeBtn');

flexImg.forEach((img) => {
    img.addEventListener('click', (e) => {
        blur.style.display = 'block';       
        blurDisplay.style.display = "block";

    });
});

closeBTn.addEventListener('click', () => {
    blur.style.display = 'none';
    blurDisplay.style.display = "none";

});


// blur display slide

const blurDsp = document.querySelectorAll('.blurdsp');
const prevBlur = document.getElementById('prevBlur');
const nextBlur = document.getElementById('nextBlur');
const spotLight = document.querySelector('.spotLight');



nextBlur.addEventListener('click', () => {
    const highlight = document.querySelector('.highLight');


    if(highlight.nextElementSibling) {
        highlight.classList.remove('highLight');
        highlight.nextElementSibling.classList.add('highLight');

        spotLight.src = highlight.src

    } else {
        blurDsp[0].classList.add('highLight');
    }
    
});








prevBlur.addEventListener('click', () => {
    const highlight = document.querySelector('.highLight');
    highlight.classList.remove('highLight');

    if(highlight.previousElementSibling) {
        highlight.previousElementSibling.classList.add('highLight');
        spotLight.src = highlight.src
    } else {
        blurDsp[blurDsp.length -1].classList.add('highLight');
    }
})
