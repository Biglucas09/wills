const Items =[
    {
        image: "https://themewagon.github.io/stylish/images/card-item1.jpg",
        Name: "Vans",
        price:"$99"
    },
    {
        image:"https://themewagon.github.io/stylish/images/card-item2.jpg",
        Name:"Airforce1",
        price:"$90"
    },
    {
        image:"https://themewagon.github.io/stylish/images/card-item3.jpg",
        Name:"Redboot",
        price:"$91"
    },
    {
        image:"https://themewagon.github.io/stylish/images/card-item4.jpg",
        Name:"Pinkboot",
        price:"$90"
    },
    {
        image:"https://themewagon.github.io/stylish/images/card-item5.jpg",
        Name:"Blackboot",
        price:"$92"
    },
]
let display=""
for(let i=0;i<Items.length; i++){
    display+=`
      <div class="card border-0" >
        <img src="${Items[i].image}" class="card-img-top card2" alt="${Items[i].image}">
        <div class="card-body">
          <p class="card-text" id="card1i">${Items[i].Name}</p>
          <p class="card-text" id="card1ii">${Items[i].price}</p>
          <button class="btn3 btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" id="card1iii">Add to Cart</button>
        </div>
      </div> `
}
const container =document.getElementById("container5")
container.innerHTML=display

