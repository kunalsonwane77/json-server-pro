import navbar from "./componets/navbar/navbar.js";
import footer from "./componets/footer/footer.js";


let nav = document.getElementById("nav")

nav.innerHTML=navbar()


let foot = document.getElementById("foot")
foot.innerHTML=footer()



let cards = document.getElementById("cards")

let data = await fetch("http://localhost:3000/shopbyroom")
let actualdata= await data.json()
actualdata.forEach(makecard)

function makecard(obj){
   let card= document.createElement("div")
   card.setAttribute("class","card")

   let image= document.createElement("img")
   image.src=obj.image

   let title= document.createElement("h1")
   title.innerText=obj.title

   let discription= document.createElement("p")
   discription.innerText=obj.discription

   let button = document.createElement("button")
   button.innerText="Shop now"

   card.append(image,title,discription,button)

   cards.append(card)


}

//for prep cards



let prepcd = document.getElementById("prepcd")

let pdata = await fetch("http://localhost:3000/prepcards")
let pactualdata= await pdata.json()
pactualdata.forEach(pmakecard)

function pmakecard(obj){
   let card= document.createElement("div")
   card.setAttribute("class","pcard")

   let image= document.createElement("img")
   image.src=obj.image

   let title= document.createElement("h1")
   title.innerText=obj.title

   let discription= document.createElement("p")
   discription.innerText=obj.discription

   let button = document.createElement("button")
   button.innerText="Shop now"

   card.append(image,title,discription,button)

   prepcd.append(card)


}

//for holowin 

let holocd = document.getElementById("holocd")

let hdata = await fetch("http://localhost:3000/halloween")
let hactualdata= await hdata.json()
hactualdata.forEach(hmakecard)

function hmakecard(obj){
   let card= document.createElement("div")
   card.setAttribute("class","hcard")

   let image= document.createElement("img")
   image.src=obj.image

   let price = document.createElement("p")
   price.innerText=obj.price

   let title= document.createElement("h4")
   title.innerText=obj.title

   let button= document.createElement("button")
   button.innerText="+Add"
   
   let dil= document.createElement("h5")
   dil.innerText="Pickup today Delivery today Shipping,arrives tomorrow"

   card.append(image,button,price,title,dil)

   holocd.append(card)


}

//too good


let tocd = document.getElementById("tocd")

let tdata = await fetch("http://localhost:3000/togood")
let tactualdata= await tdata.json()
tactualdata.forEach(maketcard)

function maketcard(obj){
   let card= document.createElement("div")
   card.setAttribute("class","card")

   let image= document.createElement("img")
   image.src=obj.image

   let title= document.createElement("h1")
   title.innerText=obj.title

   let discription= document.createElement("p")
   discription.innerText=obj.discription

   let button = document.createElement("button")
   button.innerText="Shop now"

   card.append(image,title,discription,button)

   tocd.append(card)


}

