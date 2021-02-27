//add to cart

let productsCountEl = document.getElementById("products-count");// at first we should find the elements
//console.log(productsCountEl);
 let addToCartButtons = document.querySelectorAll(".add-to-cart");// at first we should find the elements
//console.log(addToCartButtons);

//можно задать addEventListener для одного эл., но не для неск.эл.(псевдомассива).
for(let i = 0;i < addToCartButtons.length;i++) {
    addToCartButtons[i].addEventListener("click",function () {
        productsCountEl.textContent = +productsCountEl.textContent + +quantityValue[i].value;
        quantityValue[i].value = 1;
    })
}


//modal

let modal = document.querySelector(".modal");//находим елемент
let moreDetailsBtns = document.querySelectorAll(".more-details");  
let closeBtn = document.querySelector(".btn-close");

console.log(modal);
console.log(moreDetailsBtns);
console.log(closeBtn);

moreDetailsBtns.forEach((btn) => { //на пер. moreDetailsBtns вешаем ф.forEach, где btn-текущий эл.
    btn.addEventListener("click",openModal) 
})

function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show"); 
}

function openModal() {
    modal.classList.add("show");// свойство.метод classList.add добавляет класс.
    modal.classList.remove("hide");// свойство.метод classList.remove удаляет класс
}

closeBtn.addEventListener("click",closeModal)

modal.addEventListener("click",function(e) {
    if(e.target == modal) {
        closeModal()
    }
})


//console.log(window.pageYOffset) // сколько проскролили
//console.log(document.body.scrollHeight) // высота странички

// function showModalByScroll() {
//     if(window.pageYOffset > document.body.scrollHeight/2) {
//         openModal();
//         window.removeEventListener("scroll",showModalByScroll)// на событии scroll удалить ф. showModalByScroll.
//     }
// } 


// window.addEventListener("scroll",showModalByScroll);
   


// change like button state

let likeButtons = document.querySelectorAll('.heart');

 likeButtons.forEach((btn) => {
     btn.addEventListener("click",function(e) {
         this.classList.toggle("liked")
    //      console.log(e.target) // можно прописать так.
    //     if(this.classList.contains("liked")) {// this указывает на эл., по которому мы кликнули.
    //         this.classList.remove("liked")
    //     } else {
    //         this.classList.add("liked")
    //     }
     })
 })

//change product count
//нашли все эл.
let decrementBtns = document.querySelectorAll(".decrement-button");
let incrementBtns = document.querySelectorAll(".increment-button");
let quantityValue = document.querySelectorAll(".product-quantity input");

// let minCount = 1;
// let maxCount = 5;

// // console.log(decrementBtns)
// // console.log(incrementBtns)
// // console.log(quantityValue)

// for(let i = 0;i < quantityValue.length;i++) {
//     let currentCount = +quantityValue[i].value;
//     toggleButtonState(currentCount,decrementBtns[i],incrementBtns[i])
// }

// function toggleButtonState(count,decrementBtn,incrementBtn) {
//     decrementBtn.disabled = count <= minCount;
//     incrementBtn.disabled = count >= maxCount;
// }

// for(let i = 0;i < incrementBtns.length; i++) {
//     incrementBtns[i].addEventListener("click",function() {
//         let currentCount = +quantityValue[i].value;
//         let nextCount = currentCount + 1;
//         quantityValue[i].value = nextCount;
    
//         toggleButtonState(nextCount,decrementBtns[i],incrementBtns[i])
    
//     })
// }

// for(let i = 0;i < decrementBtns.length; i++) {
//     decrementBtns[i].addEventListener("click",function() {
//         let currentCount = +quantityValue[i].value;
//         let nextCount = currentCount - 1;
//         quantityValue[i].value = nextCount;

//         toggleButtonState(nextCount,decrementBtns[i],incrementBtns[i])

//     })

// } 




// //function constructor change product quantity

// function Counter(incrementBtn,decrementBtn,inputField,minCount = 1,maxCount = 5) {
//     // this.incrementBtn = incrementBtns; // this code is the same with below one.
//     // this.decrementBtn = decrementBtns;
// //     // this.inputField = inputField;

function Counter(incrementBtn,decrementBtn,inputField,minCount = 1,maxCount = 5) {

    this.domRefs = {// domRefs - object. This code(shorthand) is the same with above one.
        incrementBtn,
        decrementBtn,
        inputField,
    }

    this.toggleButtonState = function () {
        let count = this.domRefs.inputField.value;
        this.domRefs.decrementBtn.disabled = count <= minCount;
        this.domRefs.incrementBtn.disabled = count >= maxCount;
    }

    this.toggleButtonState();

    this.increment = function() {
        let currentCount = +this.domRefs.inputField.value;
        let nextCount = currentCount + 1;
        this.domRefs.inputField.value = nextCount;
        
        this.toggleButtonState()
    }

    this.decrement = function() {
        let currentCount = +this.domRefs.inputField.value;
        let nextCount = currentCount - 1;
        this.domRefs.inputField.value = nextCount;
        
        this.toggleButtonState()
    }

    this.domRefs.incrementBtn.addEventListener("click",this.increment.bind(this));
    this.domRefs.decrementBtn.addEventListener("click",this.decrement.bind(this));

    console.log(this)
}

const counters = [];
//передеаем колбэк ф., где 1й пар-текущий эл.массива, 2й пар.-порядковый номер(индекс элемента), 3й пар-сам массив, но 
// 2й и 3й пар.не обязательные.
quantityValue.forEach((counterItem,i) => (
    counters[i] = new Counter(incrementBtns[i],decrementBtns[i],counterItem)   

))
  


 


// slider slick
$(".slider-block").slick({
    dots:true, 
}); 


//selectize.js

$('#select-beast').selectize({
        create: true,
        sortField: {
            field: 'text',
            direction: 'asc'
        },
        dropdownParent: 'body'
    });


    $('#select-beast').selectize({
        create: true,
        sortField: 'text'
    });
