let btn = document.getElementById("btn")
btn.addEventListener("click", checkaccout)

let signup = document.getElementById("signup")
signup.style.display = "none"


let data = await fetch("http://localhost:3000/userdata")
let actualdata = await data.json()


async function checkaccout() {



    let input = document.getElementById("input").value

    if (input == "") {
        alert("please enter email")
        return;

    }

    let emailcheck = false

    for (let i = 0; i < actualdata.length; i++) {
        if (actualdata[i].email == input) {
            emailcheck = true;
            break;
        }
    }

    if (emailcheck) {


        window.location.href = "/index.html"
        console.log("yes accout exist")

    }
    else {
        makeforsignup()
        console.log("plese sign up")
    }

}


function makeforsignup() {


    let login = document.getElementById("login")
    login.style.display = "none"


    signup.style.display = "block"


    let signupbtn = document.getElementById("signupbtn")
    signupbtn.addEventListener("click", addsignup)

    async function addsignup() {
        let inemail = document.getElementById("inemail").value
        let infname = document.getElementById("infname").value
        let inlname = document.getElementById("inlname").value
        let inphone = document.getElementById("inphone").value
        let inpass = document.getElementById("inpass").value


        let obj = {
            email: inemail,
            firstname: infname,
            lastname: inlname,
            phonenumber: inphone,
            password: inpass
        }

        await fetch(`http://localhost:3000/userdata`, {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
                "Contenst-Type": "application/json"
            }
        })
    }






}