const allButtons=document.querySelectorAll(".btn3")
const checkout=document.getElementById("checkout")
console.log(allButtons);
allButtons.forEach(function (button){
    button.addEventListener("click",addtocart)
    function addtocart(){
        const price=button.previousElementSibling.textContent
        const name=button.previousElementSibling.previousElementSibling.textContent
        const image=button.parentElement.previousElementSibling.src
        const itemincart=JSON.parse(localStorage.getItem("cart")) || []
        const newitemincart=[...itemincart,{image,name,price}]
        localStorage.setItem("cart",JSON.stringify(newitemincart))
        
        
    }
})

const itemsincart=JSON.parse(localStorage.getItem("cart"))
let display5=""
for(let i=0;i<itemsincart.length; i++){
    display5+=`
        <div class="card border-0" id="cart2g">
        <img src="${itemsincart[i].image}" class="card-img-top card2" alt="${itemsincart[i].image}" id="cartimages">
        <div class="card-body">
          <p class="card-text">${itemsincart[i].name}</p>
          <p class="card-text">${itemsincart[i].price}</p>
        </div>
      </div> `
}
let modalbody=document.querySelector(".modal-body")
modalbody.innerHTML=display5


checkout.addEventListener("click",check)
function check(){
    localStorage.clear()
    alert("checkout successful")
}