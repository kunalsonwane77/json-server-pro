

let selectcreation = document.getElementById("selectcreation")
selectcreation.addEventListener("submit",makeforall)
  

let forelectro = document.getElementById("forelectro")
forelectro.addEventListener("submit",makeforelectro)

let forfashion = document.getElementById("forfashion")
forfashion.addEventListener("submit",makefashion)


async function makeforall(event) {
    event.preventDefault()

    let create = document.getElementById("create").value
    let image = selectcreation.image.value
    let title = selectcreation.title.value
    let discription = selectcreation.discription.value



    let obj = {
        image,
        title,
        discription
    }


    await fetch(`http://localhost:3000/${create}`, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Contenst-Type": "application/json"
        }
    })


}

//for all electonic page
async function makeforelectro(event) {
    event.preventDefault()

    let electrocards = document.getElementById("electrocards").value
    let image = forelectro.image.value
    let title = forelectro.title.value
    let discription = forelectro.discription.value



    let obj = {
        image,
        title,
        discription
    }


    await fetch(`http://localhost:3000/${electrocards}`, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Contenst-Type": "application/json"
        }
    })


}
//for fashion cards

async function makefashion(event) {
    event.preventDefault()

    let fashioncards = document.getElementById("fashioncards").value
    let image = forfashion.image.value
    let title = forfashion.title.value
    let discription = forfashion.discription.value



    let obj = {
        image,
        title,
        discription
    }


    await fetch(`http://localhost:3000/${fashioncards}`, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Contenst-Type": "application/json"
        }
    })


}



//for update




let updateform = document.getElementById("update")
updateform.addEventListener("submit", update)

let upid;
let updatedata;
async function update(event) {

    event.preventDefault()
    upid = document.getElementById("upid").value
    updatedata = document.getElementById("updatedata").value

    let data = await fetch(`http://localhost:3000/${updatedata}/${upid}`)

    let actualdata = await data.json()

    updateform.image.value = actualdata.image
    updateform.title.value = actualdata.title
    updateform.price.value = actualdata.price
    updateform.discription.value = actualdata.discription




}

async function updation() {
    let title = updateform.title.value  
    let image = updateform.image.value
    let price = updateform.price.value
    let discription = updateform.discription.value



    let obj = {
        title,
        image,
        price,
        discription
    }


    await fetch(`http://localhost:3000/${updatedata}/${upid}`, {
        method: "PUT",
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }

    })
}








//for delete

let delitems= document.getElementById("delitems")

delitems.addEventListener("submit",deletitems)



async function deletitems(){
    let delid= document.getElementById("delid").value
    let deldata= document.getElementById("deldata").value

    await fetch(`http://localhost:3000/${deldata}/${delid}`,{
        method:"DELETE"
    })


}