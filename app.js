//add to cart
let productsCountEl = document.getElementById("products-count");// at first we should find the elements
//console.log(productsCountEl);
let addToCartButtons = document.querySelectorAll(".add-to-cart");// at first we should find the elements
//console.log(addToCartButtons)
//можно задать addEventListener для одного эл., но не для неск.эл.(псевдомассива).
for(let i = 0;i < addToCartButtons.length;i++) { // перебираем все кнопки add-to-cart циклом for
    addToCartButtons[i].addEventListener("click",function() {
        productsCountEl.textContent = +productsCountEl.textContent + +quantityValue[i].value;
        quantityValue[i].value = 1;
   })
}

//modal

let modal = document.querySelector(".modal");
let moreDetailsBtns = document.querySelectorAll(".more-details");
let closeBtn = document.querySelector(".btn-close");


//forEach
moreDetailsBtns.forEach((btn) => { //на пер. moreDetailsBtns вешаем ф.forEach, где btn- текущий эл.
    btn.addEventListener("click",openModal) 
})

function openModal() {
    modal.classList.add("show");// свойство.метод classList.add добавляет класс.
    modal.classList.remove("hide");// свойство.метод classList.remove удаляет класс
}

 function closeModal() {
     modal.classList.add("hide");// свойство.метод classList.add добавляет класс.
     modal.classList.remove("show");// свойство.метод classList.remove удаляет класс
 }

closeBtn.addEventListener("click",closeModal)

modal.addEventListener("click",function(e) {
    if(e.target == modal) {
        closeModal()
    }
})

// console.log(window.pageYOffset) // сколько проскролили
// console.log(document.body.scrollHeight) // высота странички

function showModalByScroll() {
        window.removeEventListener("scroll",showModalByScroll)
    }


// function showModalByScroll() {
//     if(window.pageYOffset > document.body.scrollHeight/2) {
//         openModal();
//         window.removeEventListener("scroll",showModalByScroll)// на событии scroll удалить ф. showModalByScroll.
//     }
// }

//  window.addEventListener("scroll",showModalByScroll);
   
// change like button state

 let likeButtons = document.querySelectorAll('.heart');

 likeButtons.forEach((btn) => {
     btn.addEventListener("click",function(e) {
         this.classList.toggle("liked")
        //  console.log(e.target) // можно прописать так.
        // if(this.classList.contains("liked")) {// this указывает на эл., по которому мы кликнули.
        //     this.classList.remove("liked")
        // } else {
        //     this.classList.add("liked")
        // }
    })
 })

 //change product count
 //нашли все эл.
 let decrementButns = document.querySelectorAll(".decrement-button");
 let incrementButns = document.querySelectorAll(".increment-button");
 let quantityValue = document.querySelectorAll(".product-quantity input");

// let minCount = 1;
// let maxCount = 5;



// for(let i = 0;i < quantityValue.length;i++) {
//     let currentCount = +quantityValue[i].value;
//     toggleButtonState(currentCount,decrementButns[i],incrementButns[i])
// }

// function toggleButtonState(count,decrementButn,incrementButn) {
//     decrementButn.disabled = count <= minCount;
//     incrementButn.disabled = count >= maxCount;
// }

// for(let i = 0;i < incrementButns.length; i++) {
//     incrementButns[i].addEventListener("click",function() {
//         let currentCount = +quantityValue[i].value;
//         let nextCount = currentCount + 1;
//         quantityValue[i].value = nextCount;
    
//         toggleButtonState(nextCount,decrementButns[i],incrementButns[i])
    
//     })
// }

// for(let i = 0;i < decrementButns.length; i++) {
//     decrementButns[i].addEventListener("click",function() {
//         let currentCount = +quantityValue[i].value;
//         let nextCount = currentCount - 1;
//         quantityValue[i].value = nextCount;

//         toggleButtonState(nextCount,decrementButns[i],incrementButns[i])

//     })

// } 
 

//function constructor change product quantity

function Counter(incrementButn,decrementButn,inputField,minCount = 1,maxCount = 5) {
    // this.incrementButn = incrementButns; // this code is the same with below one.
    // this.decrementButn = decrementButns;
    // this.inputField = inputField;

    this.domRefs = {// domRefs - object. This code is the same with above one(shorthand)
        incrementButn,
        decrementButn,
        inputField,
    }

    this.toggleButtonState = function () {
        let count = this.domRefs.inputField.value;
        this.domRefs.decrementButn.disabled = count <= minCount;
        this.domRefs.incrementButn.disabled = count >= maxCount;
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

    this.domRefs.incrementButn.addEventListener("click",this.increment.bind(this));
    this.domRefs.decrementButn.addEventListener("click",this.decrement.bind(this));

    console.log(this)
}

const = counters = [];

quantityValue.forEach((counterItem,i) => (
    counter[i] = new Counter(incrementButns[0],decrementButns[0],quantityValue[0]);
)

const 


// slider slick
$(".slider-block").slick({
    dots:true, 
});



