// Add the coffee to local storage with key "coffee"


let arr = JSON.parse(localStorage.getItem("coffee")) || []


var length = arr.length;
console.log(length);

document.querySelector("#coffee_count").innerText = ` ${length} `;






const url = " https://masai-mock-api.herokuapp.com/coffee/menu"



async function getdata(){

    try{
        let res = await fetch(url);
        let data = await res.json()
        append(data.menu.data)
        console.log(data.menu.data)
    }
    catch(err){
        console.log(err);
    }
}

getdata();

function append(data){
     const menu = document.getElementById("menu")
    data.forEach(function(el){
     
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = el.image;
        img.style.width = "200px";
        img.style.height = "200px";

        let h = document.createElement("h3")
        h.innerText = el.title;

        let p = document.createElement("p")
        p.innerText = el.price;

        let btn = document.createElement("button")
        btn.innerText = "Add To bucket"
        btn.style.color = "blue";
        btn.style.cursor = "pointer";

        btn.addEventListener("click",function(){
            addTobucket(el);
        })
           div.append(img,h,p,btn);
           menu.append(div);
    })
}
  
  function addTobucket(el){
      console.log(el)
      arr.push(el)

      localStorage.setItem("coffee",JSON.stringify(arr));
      window.location.reload()
  }