const Itemz =[
    {
        image: "https://themewagon.github.io/stylish/images/card-item6.jpg",
        Name: "Vans",
        price:"$99"
    },
    {
        image:"https://themewagon.github.io/stylish/images/card-item7.jpg",
        Name:"Orange Nike",
        price:"$90"
    },
    {
        image:"https://themewagon.github.io/stylish/images/card-item8.jpg",
        Name:"New Balance",
        price:"$91"
    },
    {
        image:"https://themewagon.github.io/stylish/images/card-item9.jpg",
        Name:"Blueboot",
        price:"$90"
    },
    {
        image:"https://themewagon.github.io/stylish/images/card-item10.jpg",
        Name:"Whitesmoke",
        price:"$92"
    },
]
let showcase=""
for(let i=0;i<Itemz.length; i++){
    showcase+=`
      <div class="card border-0" >
        <img src="${Itemz[i].image}" class="card-img-top card2" alt="${Itemz[i].image}">
        <div class="card-body">
          <p class="card-text">${Itemz[i].Name}</p>
          <p class="card-text">${Itemz[i].price}</p>
          <button class="btn3 btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Add to Cart</button>
        </div>
      </div> `
}
const container1 =document.getElementById("container8")
container1.innerHTML=showcase
   
