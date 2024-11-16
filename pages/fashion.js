import navbar from "../componets/navbar/navbar.js"
import footer from "../componets/footer/footer.js";


let nav = document.getElementById("nav")
nav.innerHTML=navbar()

let foot = document.getElementById("foot")
foot.innerHTML=footer()

let cozy = document.getElementById("cozy")


let cozydata = await fetch ("http://localhost:3000/cozyup")
let actualcozy= await cozydata.json()

actualcozy.forEach(cozycard)

function cozycard(obj){
    let card = document.createElement("div")
    card.setAttribute("class","coxycard")

    let img = document.createElement("img")
    img.src= obj.image

    let title = document.createElement("h1")
    title.innerText=obj.title

    let discription= document.createElement("p")
    discription.innerText=obj.discription

    let button = document.createElement("button")
    button.innerText="Shop now"

    card.append(img,title,discription,button)

    cozy.append(card)
}

let winterboots= document.getElementById("winterboots")

let winterdata= await fetch("http://localhost:3000/winterboots")
let actualwinter = await winterdata.json()

actualwinter.forEach(wintercard)

function wintercard(obj){
   let card = document.createElement("div")
   card.setAttribute("class","wcard")

   let img = document.createElement("img")
   img.src=obj.image
    
   let title = document.createElement("h1")
   title.innerText=obj.title
   
   let discription= document.createElement("p")
   discription.innerText=obj.discription

   let button= document.createElement("button")
   button.innerText="shop now"

   card.append(img,title,discription,button)
   winterboots.append(card)
}


//for gift


let giftit = document.getElementById("giftit")

let giftdata= await fetch("http://localhost:3000/gift")
let actualgift= await giftdata.json()

actualgift.forEach(makegiftcard)

function makegiftcard(obj){
    let card = document.createElement("div")
    card.setAttribute("class","giftcard")
    let img = document.createElement("img")
    img.src=obj.image

    let title = document.createElement("h1")
    title.innerText=obj.title

    let discription= document.createElement("p")
    discription.innerText=obj.discription
    let button = document.createElement("button")
    button.innerText="Shop now"
    card.append(img,title,discription,button)

    giftit.append(card)
}


let shopbyprice= document.getElementById("shopbyprice")
let shopdata= await fetch("http://localhost:3000/shopbyprice")
let actualshop = await shopdata.json()

actualshop.forEach(makeshopcard)

function makeshopcard(obj){
    let card = document.createElement("div")
    card.setAttribute("class","shoppcard")

    let img = document.createElement("img")
    img.src= obj.image
    
    let title = document.createElement("h1")
    title.innerText=obj.title
    
    let discription = document.createElement("p")
    discription.innerText=obj.discription
   
    let button = document.createElement("button")
    button.innerText="shop now"
    
    card.append(img,title,discription,button)

    shopbyprice.append(card)
}  



