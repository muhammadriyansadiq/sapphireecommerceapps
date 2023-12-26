var newinbox = document.querySelector(".newinbox")
var womanbox = document.querySelector(".womanbox")
var manbox = document.querySelector(".manbox")
var boxn = document.querySelector(".boxn")
// var boxnavv = document.querySelector(".boxnavv")

var kidsbox = document.querySelector(".kidsbox")
var beautybox = document.querySelector(".beautybox")
var accessoriesbox = document.querySelector(".accessoriesbox")
var homebox = document.querySelector(".homebox")
let localvalue;

newinbox.addEventListener("click",function(e){
    localvalue = e.target.innerText;
  localStorage.setItem('username', localvalue);
console.log(e.target.innerText);
})

womanbox.addEventListener("click",function(e){
    localvalue = e.target.innerText;
  localStorage.setItem('username', localvalue);
  console.log(e.target.innerText);
  })

  manbox.addEventListener("click",function(e){
      localvalue = e.target.innerText;
  localStorage.setItem('username', localvalue);
    console.log(e.target.innerText);
    })


    kidsbox.addEventListener("click",function(e){
        localvalue = e.target.innerText;
  localStorage.setItem('username', localvalue);
      console.log(e.target.innerText);
      })


      beautybox.addEventListener("click",function(e){
          localvalue = e.target.innerText;
  localStorage.setItem('username', localvalue);
        console.log(e.target.innerText);
        })


        accessoriesbox.addEventListener("click",function(e){
            localvalue = e.target.innerText;
  localStorage.setItem('username', localvalue);
          console.log(e.target.innerText);
          })


          homebox.addEventListener("click",function(e){
              localvalue = e.target.innerText;
  localStorage.setItem('username', localvalue);
            console.log(e.target.innerText);
            })


            

            boxn.addEventListener("click",function(e){

  console.log(e.target.classList[0]);
  if(e.target.classList[0] === "newin"){
    newinbox.style.display = "block";
    newinbox.style.display = "flex";
    womanbox.style.display = "none";
    manbox.style.display = "none";
    kidsbox.style.display = "none";
    beautybox.style.display = "none";
    accessoriesbox.style.display = "none";
    homebox.style.display = "none";
  }

  else if(e.target.classList[0] === "woman"){
    womanbox.style.display = "block";
    womanbox.style.display = "flex";
    newinbox.style.display = "none";
   manbox.style.display = "none";
   kidsbox.style.display = "none";
   beautybox.style.display = "none";
   accessoriesbox.style.display = "none";
   homebox.style.display = "none";
   accessoriesbox.style.display = "none";

  }

  else if(e.target.classList[0] === "man"){
    manbox.style.display = "block";
    manbox.style.display = "flex";
    womanbox.style.display = "none";
    newinbox.style.display = "none";
    kidsbox.style.display = "none";
    accessoriesbox.style.display = "none";
    homebox.style.display = "none";
    beautybox.style.display = "none";
  }
  else if(e.target.classList[0] === "kids"){
    kidsbox.style.display = "block";
    kidsbox.style.display = "flex";
    manbox.style.display = "none";
    womanbox.style.display = "none";
    newinbox.style.display = "none";
    beautybox.style.display = "none";
    accessoriesbox.style.display = "none";
    homebox.style.display = "none";

  }

  else if(e.target.classList[0] === "beauty"){
    beautybox.style.display = "block";
    beautybox.style.display = "flex";
    kidsbox.style.display = "none";
    manbox.style.display = "none";
    womanbox.style.display = "none";
    newinbox.style.display = "none";
    accessoriesbox.style.display = "none";
    homebox.style.display = "none";

  }
  else if(e.target.classList[0] === "accessories"){
    accessoriesbox.style.display = "block";
    accessoriesbox.style.display = "flex";
    beautybox.style.display = "none";
    kidsbox.style.display = "none";
    manbox.style.display = "none";
    womanbox.style.display = "none";
    newinbox.style.display = "none";
    homebox.style.display = "none";

  }
  else if(e.target.classList[0] === "home"){
    homebox.style.display = "block";
    homebox.style.display = "flex";
    accessoriesbox.style.display = "none";
    beautybox.style.display = "none";
    kidsbox.style.display = "none";
    manbox.style.display = "none";
    womanbox.style.display = "none";
    newinbox.style.display = "none";

  }

  else{
    newinbox.style.display = "none";
    womanbox.style.display = "none";
    kidsbox.style.display = "none";
   manbox.style.display = "none";
   beautybox.style.display = "none";
   accessoriesbox.style.display = "none";
   homebox.style.display = "none";

  }
})

boxnavv.addEventListener("click",function(e){

  console.log(e.target.classList[0]);
  if(e.target.classList[0] === "newin"){
    newinbox.style.display = "block";
    newinbox.style.display = "flex";
    womanbox.style.display = "none";
    manbox.style.display = "none";
    kidsbox.style.display = "none";
    beautybox.style.display = "none";
    accessoriesbox.style.display = "none";
    homebox.style.display = "none";
  }

  else if(e.target.classList[0] === "woman"){
    womanbox.style.display = "block";
    womanbox.style.display = "flex";
    newinbox.style.display = "none";
   manbox.style.display = "none";
   kidsbox.style.display = "none";
   beautybox.style.display = "none";
   accessoriesbox.style.display = "none";
   homebox.style.display = "none";
   accessoriesbox.style.display = "none";

  }

  else if(e.target.classList[0] === "man"){
    manbox.style.display = "block";
    manbox.style.display = "flex";
    womanbox.style.display = "none";
    newinbox.style.display = "none";
    kidsbox.style.display = "none";
    accessoriesbox.style.display = "none";
    homebox.style.display = "none";
    beautybox.style.display = "none";
  }
  else if(e.target.classList[0] === "kids"){
    kidsbox.style.display = "block";
    kidsbox.style.display = "flex";
    manbox.style.display = "none";
    womanbox.style.display = "none";
    newinbox.style.display = "none";
    beautybox.style.display = "none";
    accessoriesbox.style.display = "none";
    homebox.style.display = "none";

  }

  else if(e.target.classList[0] === "beauty"){
    beautybox.style.display = "block";
    beautybox.style.display = "flex";
    kidsbox.style.display = "none";
    manbox.style.display = "none";
    womanbox.style.display = "none";
    newinbox.style.display = "none";
    accessoriesbox.style.display = "none";
    homebox.style.display = "none";

  }
  else if(e.target.classList[0] === "accessories"){
    accessoriesbox.style.display = "block";
    accessoriesbox.style.display = "flex";
    beautybox.style.display = "none";
    kidsbox.style.display = "none";
    manbox.style.display = "none";
    womanbox.style.display = "none";
    newinbox.style.display = "none";
    homebox.style.display = "none";

  }
  else if(e.target.classList[0] === "home"){
    homebox.style.display = "block";
    homebox.style.display = "flex";
    accessoriesbox.style.display = "none";
    beautybox.style.display = "none";
    kidsbox.style.display = "none";
    manbox.style.display = "none";
    womanbox.style.display = "none";
    newinbox.style.display = "none";

  }

  else{
    newinbox.style.display = "none";
    womanbox.style.display = "none";
    kidsbox.style.display = "none";
   manbox.style.display = "none";
   beautybox.style.display = "none";
   accessoriesbox.style.display = "none";
   homebox.style.display = "none";

  }
})


window.onload = function() {

  newinbox.style.display = "none";
  womanbox.style.display = "none";
  kidsbox.style.display = "none";
 manbox.style.display = "none";
 beautybox.style.display = "none";
 accessoriesbox.style.display = "none";
 homebox.style.display = "none";
 
};


let saveditems = JSON.parse(localStorage.getItem('savedproductitems')) || [];

let itemsqty =0
saveditems.forEach((element)=>{
itemsqty +=element.value

})
console.log(itemsqty);
let selectedproductinbag = document.querySelector(".selectedproductinbag")
selectedproductinbag.innerHTML = itemsqty


let productscardsdata = "";
let search = document.querySelector(".search")
search.addEventListener("click",function(){
  
let searchbarindex = document.querySelector(".searchbarindex")
let localvalue = searchbarindex.value
console.log(localvalue)

localStorage.setItem('username', localvalue);
    var storedUsername = localStorage.getItem('username').toLowerCase();
    console.log('Stored Username:', storedUsername)
    window.location.href = "filter.html";

})