const products=[
{name:"Cloud Hoodie",price:49.99,icon:"🧥",cat:"clothing",deal:true},
{name:"Skyline Tee",price:24.99,icon:"👕",cat:"clothing",deal:false},
{name:"Everyday Sneakers",price:64.99,icon:"👟",cat:"clothing",deal:true},
{name:"Blue Cap",price:18.99,icon:"🧢",cat:"accessories",deal:false},
{name:"Classic Backpack",price:39.99,icon:"🎒",cat:"accessories",deal:true},
{name:"Cool Shades",price:22.99,icon:"🕶️",cat:"accessories",deal:false},
{name:"Soft Joggers",price:34.99,icon:"👖",cat:"clothing",deal:true},
{name:"Fresh Watch",price:54.99,icon:"⌚",cat:"accessories",deal:false}
];

let cart=[];

function makeCards(list){
 return list.map(p=>`<article class="card">
 <div class="pic">${p.icon}</div>
 <h3>${p.name}</h3>
 <span class="price">$${p.price.toFixed(2)}</span>
 <button class="add" onclick="addToCart(${products.indexOf(p)})">Add to cart</button>
 </article>`).join("");
}

homeGrid.innerHTML=makeCards(products.slice(0,4));
finestGrid.innerHTML=makeCards(products.slice(0,6));
clothingGrid.innerHTML=makeCards(products.filter(p=>p.cat==="clothing"));
accessoriesGrid.innerHTML=makeCards(products.filter(p=>p.cat==="accessories"));
dealsGrid.innerHTML=makeCards(products.filter(p=>p.deal));

function showPage(id,button){
 document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
 document.getElementById(id).classList.add("active");
 document.querySelectorAll(".tab").forEach(b=>b.classList.remove("active"));
 if(button)button.classList.add("active");
 window.scrollTo(0,0);
}

function addToCart(i){
 cart.push(products[i]);
 document.getElementById("count").textContent=cart.length;
}

function openCart(){
 const box=document.getElementById("cartItems");
 if(!cart.length){box.innerHTML="<p class='muted'>Your cart is empty.</p>";}
 else{
  box.innerHTML=cart.map(p=>`<div class="row">${p.icon} ${p.name}<b>$${p.price.toFixed(2)}</b></div>`).join("");
 }
 document.getElementById("total").textContent=cart.reduce((sum,p)=>sum+p.price,0).toFixed(2);
 document.getElementById("cartModal").classList.add("show");
}
function closeCart(){document.getElementById("cartModal").classList.remove("show")}
function checkout(){alert(cart.length?"Demo checkout complete! Thanks for shopping at Hamza Mart.":"Your cart is empty.");}
