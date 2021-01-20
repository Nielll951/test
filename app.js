//add to cart
let productsCountEl = document.getElementById("products-count");// at first we should find the elements
//console.log(productsCountEl);
let addToCartButtons = document.querySelectorAll(".add-to-cart");// at first we should find the elements
//console.log(addToCartButtons)
//можно задать addEventListener для одного эл., но не для неск.эл.(псевдомассива).
for(let i = 0;i < addToCartButtons.length;i++) { // перебираем все кнопки add-to-cart циклом for
    addToCartButtons[i].addEventListener("click",function() {
        productsCountEl.textContent = +productsCountEl.textContent + 1; 
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


function showModalByScroll() {
    if(window.pageYOffset > document.body.scrollHeight/2) {
        openModal();
        window.removeEventListener("scroll",showModalByScroll)// на событии scroll удалить ф. showModalByScroll.
    }
}

 window.addEventListener("scroll",showModalByScroll);
   
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



