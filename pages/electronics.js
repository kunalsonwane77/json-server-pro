import navbar from "../componets/navbar/navbar.js";
import footer from "../componets/footer/footer.js";

let nav = document.getElementById("nav")
let foot = document.getElementById("foot")

nav.innerHTML=navbar()
foot.innerHTML=footer()


let apple = document.getElementById("apple")
let adata = await fetch("http://localhost:3000/apple")
let aactualdata= await adata.json()
aactualdata.forEach(amakecard)


function amakecard(obj){
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
 
    apple.append(card)
 
 
 }

 //for creation

 let creaters = document.getElementById("creaters")
 let cdata = await fetch("http://localhost:3000/creation")
 let cactualdata= await cdata.json()
 cactualdata.forEach(cmakecard)
 
 
 function cmakecard(obj){
     let card= document.createElement("div")
     card.setAttribute("class","ccard")
  
     let image= document.createElement("img")
     image.src=obj.image
  
     let title= document.createElement("h1")
     title.innerText=obj.title
  
     let discription= document.createElement("p")
     discription.innerText=obj.discription
  
     let button = document.createElement("button")
     button.innerText="Shop now"
  
     card.append(image,title,discription,button)
  
     creaters.append(card)
  
  
  }
 
