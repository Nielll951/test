//add to cart
let productsCountEl = document.getElementById("products-count");// at first we should find the elements
//console.log(productsCountEl);
let addToCartButtons = document.querySelectorAll(".add-to-cart");// at first we should find the elements
//console.log(addToCartButtons)
//нельзя задать addEventListener для псевдомассива
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
moreDetailsBtns.forEach((btn) => {
    btn.addEventListener("click",function() {
        modal.classList.add("show");
        modal.classList.remove("hide");

    })
})

function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
}

closeBtn.addEventListener("click",closeModal)

modal.addEventListener("click",function(e) {
    if(e.target == modal) {
        closeModal()
    }
})
    
