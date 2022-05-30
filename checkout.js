document.querySelector("#contact_form").addEventListener("submit",myFunction);

coffeeArr = JSON.parse(localStorage.getItem("data")) || []


function myFunction(){

    event.preventDefault();

    var cofobj = {
        address : document.querySelector("#address").value,
        name : document. querySelector("#name").value,
        Mob_No : document.querySelector("#number").value,
    }

    console.log(cofobj)

    coffeeArr.push(cofobj)
    localStorage.setItem("data",JSON.stringify(coffeeArr))

    alert("Your order is accepted ")

    function x(){
        console.log(alert("Your order is being Prepared "))
    }
    setTimeout(x,3000)

    function y(){
        console.log(alert("Your order is being packed "))
    }
    setTimeout(y,8000)

    function z(){
        console.log(alert("Your order is out for delivery "))
    }
    setTimeout(z,10000)

    function o(){
        console.log(alert("Your order is out for delivery "))
    }
    setTimeout(o,12000)
}